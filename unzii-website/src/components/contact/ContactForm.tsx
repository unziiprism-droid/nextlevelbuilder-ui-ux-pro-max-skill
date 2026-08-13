"use client";

import { useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { formConfig, siteConfig } from "@/lib/site-config";

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: formConfig.web3formsAccessKey,
          subject: `Message from ${name || "the Unzii website"}`,
          name,
          email,
          message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-border bg-surface-muted p-10 text-center sm:p-14">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-secondary text-text-inverse">
          <Check className="size-5" aria-hidden />
        </span>
        <h2 className="mt-6 text-xl font-semibold text-brand-secondary">
          Message received
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
          Thank you for reaching out. We typically reply within 15 minutes
          during business hours.
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-brand-secondary">
          <MessageCircle className="size-4" aria-hidden />
          Need a faster answer? Use the live chat in the corner of this page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-brand-secondary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-brand-secondary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us a bit about what you need"
          className={`mt-2 resize-none ${inputClasses}`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-secondary px-6 py-3.5 text-sm font-medium text-text-inverse transition-all duration-300 hover:bg-accent active:scale-[0.98] disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </button>

      {status === "error" ? (
        <p className="text-xs text-red-600">
          Something went wrong sending your message. Please try again, or
          email us directly at {siteConfig.email}.
        </p>
      ) : (
        <p className="text-xs text-text-muted">
          We reply within 15 minutes during business hours, or reach us
          directly at {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
