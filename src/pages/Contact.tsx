import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { manufacturers } from "../data/manufacturers";

type FormStatus = "idle" | "submitting" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "min-h-14 w-full rounded-2xl border border-[#D9D4C9] bg-[#FBFAF7] px-5 text-base text-[#292B28] outline-none transition placeholder:text-[#777873]/70 focus:border-[#8F9F7A] focus:ring-4 focus:ring-[#8F9F7A]/15";
  const labelClass =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#68745E]";

  return (
    <main className="min-h-screen bg-[#F5F3EE] pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-48">
      <section className="mx-auto grid w-[min(100%-2rem,1320px)] overflow-hidden rounded-[32px] border border-[#DDD8CE] bg-white shadow-[0_28px_80px_rgba(42,45,40,.10)] lg:grid-cols-[.82fr_1.18fr] lg:rounded-[44px]">
        <div className="relative overflow-hidden bg-[#29352F] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="absolute -right-32 -top-32 size-96 rounded-full bg-[#8F9F7A]/25 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-36 -left-36 size-80 rounded-full border-[70px] border-white/5" />

          <div className="relative flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B9C7AA]">
              Let&apos;s Connect
            </p>
            <h1 className="mt-7 max-w-lg font-serif text-[clamp(3rem,6vw,5.4rem)] leading-[.92] tracking-[-0.035em]">
              Let&apos;s specify something exceptional.
            </h1>
            <p className="mt-8 max-w-md text-base leading-8 text-white/75 sm:text-lg">
              Tell us about your project, material needs, or presentation request. KP Spec Solutions will follow up personally.
            </p>

            <div className="mt-12 border-t border-white/15 pt-8 lg:mt-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B9C7AA]">
                Serving
              </p>
              <p className="mt-3 font-serif text-2xl">Georgia · Alabama · Tennessee</p>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
                Commercial architectural materials, product guidance, samples, and specification support.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20">
          {status === "success" ? (
            <div className="flex min-h-[560px] flex-col items-center justify-center text-center" role="status">
              <CheckCircle2 className="size-14 text-[#8F9F7A]" strokeWidth={1.5} />
              <h2 className="mt-7 font-serif text-4xl text-[#262925]">Thank you.</h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[#666862]">
                Your request has been received. KP Spec Solutions will be in touch soon.
              </p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#68745E] underline underline-offset-8">
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-9">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F9F7A]">Project Assistance</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#262925] sm:text-5xl">How can we help?</h2>
                <p className="mt-4 max-w-xl leading-7 text-[#6A6B67]">Share what you know today. We can work through the details together.</p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name *</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="replyTo" className={labelClass}>Your Email *</label>
                  <input id="replyTo" name="replyTo" type="email" inputMode="email" autoComplete="email" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Company or Design Firm</label>
                  <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="project" className={labelClass}>Project Name or Location</label>
                  <input id="project" name="project" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="manufacturer" className={labelClass}>Manufacturer of Interest</label>
                  <select id="manufacturer" name="manufacturer" defaultValue="" className={fieldClass}>
                    <option value="">Not sure yet</option>
                    {manufacturers.map((manufacturer) => (
                      <option key={manufacturer.slug} value={manufacturer.name}>{manufacturer.name}</option>
                    ))}
                    <option value="Multiple manufacturers">Multiple manufacturers</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="assistance" className={labelClass}>Type of Assistance *</label>
                  <select id="assistance" name="assistance" defaultValue="" required className={fieldClass}>
                    <option value="" disabled>Select one</option>
                    <option>Request a presentation</option>
                    <option>Samples or literature</option>
                    <option>Specification support</option>
                    <option>Product information</option>
                    <option>General inquiry</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>Tell Us About Your Project *</label>
                  <textarea id="message" name="message" rows={6} required className={`${fieldClass} resize-y py-4`} />
                </div>

                <div className="absolute -left-[10000px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" disabled={status === "submitting"} className="group flex min-h-14 w-full items-center justify-between rounded-full bg-[#29352F] px-7 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#3D4A43] disabled:cursor-wait disabled:opacity-70 sm:px-9">
                    <span>{status === "submitting" ? "Sending Request…" : "Send Request"}</span>
                    <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  {status === "error" && (
                    <p className="mt-4 text-sm leading-6 text-[#9B3C31]" role="alert">
                      The secure form connection is not active yet. Please try again after the site is published.
                    </p>
                  )}
                  <p className="mt-5 text-center text-xs leading-5 text-[#777873]">
                    Your information is used only to respond to your request. We never publish or share contact details.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
