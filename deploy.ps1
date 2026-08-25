param(
    [Parameter(Mandatory = $true)]
    [string]$Message
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$branch = git branch --show-current

if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($branch)) {
    throw "Could not identify the current Git branch."
}

Write-Host "Building the production website..." -ForegroundColor Cyan

npm run build

if ($LASTEXITCODE -ne 0) {
    throw "Production build failed. Nothing was published."
}

Write-Host "Saving changes to GitHub..." -ForegroundColor Cyan

git add -A
git reset --quiet -- .vexp

if ($LASTEXITCODE -ne 0) {
    throw "Could not stage the changes."
}

$stagedChanges = git diff --cached --name-only

if ($stagedChanges) {
    git commit -m $Message

    if ($LASTEXITCODE -ne 0) {
        throw "Git commit failed."
    }
}
else {
    Write-Host "No new code changes to commit." -ForegroundColor Yellow
}

git push origin $branch

if ($LASTEXITCODE -ne 0) {
    throw "GitHub push failed. The server was not changed."
}

$archive = Join-Path $env:TEMP "kpspecsolutions-deploy.tar.gz"

if (Test-Path $archive) {
    Remove-Item $archive -Force
}

Write-Host "Packaging the production files..." -ForegroundColor Cyan

tar -czf $archive -C dist .

if ($LASTEXITCODE -ne 0) {
    throw "Could not package the production build."
}

Write-Host "Uploading to the live server..." -ForegroundColor Cyan

scp $archive "kpspecsolutions:/home/kpspecs/site-deploy.tar.gz"

if ($LASTEXITCODE -ne 0) {
    throw "Server upload failed."
}

$remoteCommand = 'test -d /home/kpspecs/public_html && rm -rf /home/kpspecs/public_html/assets /home/kpspecs/public_html/api && rm -f /home/kpspecs/public_html/index.html /home/kpspecs/public_html/favicon.svg /home/kpspecs/public_html/icons.svg /home/kpspecs/public_html/.htaccess && tar -xzf /home/kpspecs/site-deploy.tar.gz -C /home/kpspecs/public_html && rm -f /home/kpspecs/site-deploy.tar.gz'

ssh kpspecsolutions $remoteCommand

if ($LASTEXITCODE -ne 0) {
    throw "Server deployment failed."
}

Remove-Item $archive -Force

Write-Host ""
Write-Host "Deployment completed successfully." -ForegroundColor Green
Write-Host "Local files, GitHub, and the live server are synchronized."