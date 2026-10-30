export const CONTACT_EMAIL = 'causent.official@gmail.com';
export const CONTACT_PHONE = '+91 70662 62005';
export const CONTACT_PHONE_HREF = 'tel:+917066262005';

export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;
export const WALKTHROUGH_SUBJECT = 'Causent — Walkthrough / Collaboration Enquiry';
export const WALKTHROUGH_HREF = `${CONTACT_HREF}?subject=${encodeURIComponent(WALKTHROUGH_SUBJECT)}`;

export const NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
] as const;

export const INDUSTRY_STATS = [
  {
    value: '109.6M',
    label: 'x402 transactions.',
    description:
      'Transactions processed by the x402 machine-payments protocol since its May 2025 launch, as reported by Visa and Artemis in July 2026.',
    source: 'Visa and Artemis, July 2026',
    sourceUrl: 'https://www.visa.com/en-us/thought-leadership/innovation/agentic-payments-from-the-ground-up',
  },
  {
    value: '5–20%',
    label: 'Projected payment-volume influence.',
    description:
      "AI agents are projected to influence between 5% and 20% of payment volume within five years, according to Adyen's 2026 fraud report.",
    source: 'Adyen, 2026 Fraud Report',
    sourceUrl: 'https://www.adyen.com/press-and-media/fraud-report-2026',
  },
  {
    value: '30%',
    label: 'Merchant trust signal.',
    description:
      '30% of merchants already identify AI-platform trust scoring as a critical new signal for managing agentic commerce.',
    source: 'Adyen, 2026 Fraud Report',
    sourceUrl: 'https://www.adyen.com/press-and-media/fraud-report-2026',
  },
  {
    value: '450%+',
    label: 'Increase in underground mentions of AI agents.',
    description:
      'Visa PERC reported a greater than 450% increase in dark-web community posts mentioning AI agents over a six-month comparison.',
    source: 'Visa PERC',
    sourceUrl:
      'https://corporate.visa.com/en/sites/visa-perspectives/security-trust/the-threats-landscape-of-agentic-commerce.html',
  },
] as const;

export const TRUST_FRAMEWORK = {
  summary:
    "Mastercard's Agent Pay Trust Framework, published on September 30, 2026, highlights five pillars of agentic commerce trust.",
  pillars: ['Identity', 'Intent', 'Controls', 'Trusted execution', 'Intelligence'],
  source: 'Mastercard, September 30, 2026',
  sourceUrl: 'https://www.mastercard.com/us/en/news-and-trends/Insights/2026/mastercard-agentic-commerce-trust-white-paper.html',
} as const;

export type CapabilityVisualKind = 'intent' | 'execution' | 'divergence' | 'accountability';

export const CAPABILITIES: ReadonlyArray<{
  number: string;
  title: string;
  description: string;
  visual: CapabilityVisualKind;
}> = [
  {
    number: '01',
    title: 'Understand the intent.',
    description:
      'Establish what the user or business actually authorized, including the purpose and permitted boundaries of a payment.',
    visual: 'intent',
  },
  {
    number: '02',
    title: 'Follow the execution.',
    description:
      'Bring together important events across agents, payment providers and settlement systems to understand how a transaction unfolded.',
    visual: 'execution',
  },
  {
    number: '03',
    title: 'Identify the divergence.',
    description: 'Highlight where the recorded execution differs from the original authorized instruction.',
    visual: 'divergence',
  },
  {
    number: '04',
    title: 'Establish accountability.',
    description:
      'Create a clear, traceable account of what happened to support investigation, evidence review and dispute handling.',
    visual: 'accountability',
  },
];

export const EVIDENCE_TIMELINE = [
  'Intent recorded',
  'Instruction received by agent',
  'Payment submitted',
  'Execution events logged',
  'Outcome reconciled against intent',
] as const;
