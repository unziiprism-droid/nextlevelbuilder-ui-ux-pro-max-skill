"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Message from ${name || "the Unzii website"}`;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
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
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-secondary px-6 py-3.5 text-sm font-medium text-text-inverse transition-all duration-300 hover:bg-accent active:scale-[0.98]"
      >
        Send Message
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </button>

      <p className="text-xs text-text-muted">
        This opens your email app with your message ready to send to {siteConfig.email}.
      </p>
    </form>
  );
}
