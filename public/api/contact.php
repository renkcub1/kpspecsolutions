<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, string $message): never
{
    http_response_code($status);
    echo json_encode(['message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, 'Method not allowed.');
}

$configPath = dirname((string) $_SERVER['DOCUMENT_ROOT']) . '/contact-config.php';
if (!is_file($configPath)) {
    respond(503, 'Contact service is not configured.');
}

$config = require $configPath;
$recipient = is_array($config) ? ($config['recipient'] ?? '') : '';
$sender = is_array($config) ? ($config['sender'] ?? '') : '';

if (!filter_var($recipient, FILTER_VALIDATE_EMAIL) || !filter_var($sender, FILTER_VALIDATE_EMAIL)) {
    respond(503, 'Contact service is not configured.');
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    respond(400, 'Invalid request.');
}

// Honeypot: real visitors never fill this hidden field.
if (trim((string) ($data['website'] ?? '')) !== '') {
    respond(200, 'Request received.');
}

function clean(array $data, string $key, int $maxLength): string
{
    $value = trim((string) ($data[$key] ?? ''));
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr($value, 0, $maxLength);
}

$name = clean($data, 'name', 120);
$replyTo = clean($data, 'replyTo', 254);
$company = clean($data, 'company', 160);
$project = clean($data, 'project', 200);
$manufacturer = clean($data, 'manufacturer', 120);
$assistance = clean($data, 'assistance', 120);
$message = clean($data, 'message', 5000);

if ($name === '' || $assistance === '' || $message === '' || !filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
    respond(422, 'Please complete all required fields.');
}

$subject = 'KP Spec Solutions website request: ' . str_replace(["\r", "\n"], ' ', $assistance);
$body = implode("\n", [
    'A new request was submitted through kpspecsolutions.com.',
    '',
    'Name: ' . $name,
    'Email: ' . $replyTo,
    'Company or design firm: ' . ($company ?: 'Not provided'),
    'Project name or location: ' . ($project ?: 'Not provided'),
    'Manufacturer of interest: ' . ($manufacturer ?: 'Not specified'),
    'Type of assistance: ' . $assistance,
    '',
    'Message:',
    $message,
]);

$headers = [
    'From: KP Spec Solutions Website <' . $sender . '>',
    'Reply-To: ' . $name . ' <' . $replyTo . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    respond(502, 'Message could not be sent.');
}

respond(200, 'Request received.');
