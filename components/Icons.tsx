type P = { className?: string };

export const Crown = ({ className }: P) => (
  <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
    <path d="M6 14l14 12 12-20 12 20 14-12-5 28H11z" fill="#f7b63b" stroke="#d9902a" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="6" cy="12" r="4" fill="#ffd061" stroke="#d9902a" strokeWidth="2" />
    <circle cx="32" cy="5" r="4" fill="#ffd061" stroke="#d9902a" strokeWidth="2" />
    <circle cx="58" cy="12" r="4" fill="#ffd061" stroke="#d9902a" strokeWidth="2" />
    <path d="M32 30l4 5-4 5-4-5z" fill="#ff5c97" stroke="#d3175e" strokeWidth="1.5" />
  </svg>
);

export const Sparkle = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z" fill="currentColor" />
  </svg>
);

export const Heart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" fill="currentColor" />
  </svg>
);

export const Play = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
);

export const Instagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M14 8.5V7c0-.8.3-1.2 1.3-1.2H17V3h-2.6C11.7 3 10.5 4.600 10.500 6.800v1.700H8v3h2.500V21h3.500v-9.500h2.600l.4-3z" />
  </svg>
);

export const WhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm5.300 14.200c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7a11 11 0 0 1-4.600-4c-.4-.5-1.200-1.600-1.200-3s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.9 2c.1.200.1.400 0 .6l-.4.600c-.2.200-.3.400-.1.700.2.300.800 1.300 1.700 2 1.100 1 2 1.300 2.300 1.400.3.100.5.100.7-.1l.9-1c.2-.3.400-.2.700-.1l1.900.9c.3.100.5.200.5.400 0 .2 0 .8-.1 1.200z" />
  </svg>
);

export const TikTok = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M16.500 3c.3 2.300 1.600 3.700 3.800 3.900v3a7 7 0 0 1-3.700-1.100v6.200a6 6 0 1 1-6-6c.4 0 .7 0 1 .1v3.100a3 3 0 1 0 2 2.800V3z" />
  </svg>
);
