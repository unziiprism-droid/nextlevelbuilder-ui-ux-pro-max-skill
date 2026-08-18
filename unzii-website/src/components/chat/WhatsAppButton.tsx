import { chatConfig } from "@/lib/site-config";

/**
 * Floating WhatsApp button. Styled to read as "someone's here now" (an
 * online dot plus a "Chat with us" label) rather than a bare icon, so
 * it carries the same reassurance a live-chat widget would, without
 * a separate dashboard, plain CSS/HTML, no client JS needed. Inactive
 * (renders nothing) until chatConfig.whatsappNumber is set in
 * src/lib/site-config.ts.
 */
export function WhatsAppButton() {
  const { whatsappNumber, whatsappMessage } = chatConfig;
  if (!whatsappNumber) return null;

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 rounded-full bg-surface py-2 pl-2 pr-4 shadow-lifted ring-1 ring-border transition-transform duration-300 hover:scale-105"
    >
      <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.25 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01a.9.9 0 0 0-.66.31c-.23.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29Z" />
        </svg>
        <span
          className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-green-500 ring-2 ring-surface"
          aria-hidden
        />
      </span>
      <span className="text-sm font-medium text-brand-secondary">Chat with us</span>
    </a>
  );
}
