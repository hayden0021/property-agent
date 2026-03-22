export const agent = {
  name: "Aria Bennett",
  title: "Luxury Property Advisor & Investment Consultant",
  location: "Dubai Marina, Palm Jumeirah & Downtown specialist",
  phone: "+971 50 123 4567",
  email: "aria@signatureestates.com",
  whatsapp: "971501234567",
  responsePromise: "Replies within 10 minutes during business hours",
  bio: "Aria combines boutique service, deep local inventory knowledge, and investor-grade analysis to help families and high-intent buyers secure the right property faster.",
};

export const navLinks = [
  { label: "Why Choose Me", href: "#why-choose-me" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#featured-listings" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#lead-form" },
];

export const metrics = [
  { value: 128, suffix: "+", label: "Properties closed in the last 24 months" },
  {
    value: 96,
    suffix: "%",
    label: "Qualified inquiries converted into viewings",
  },
  { value: 4.9, suffix: "/5", label: "Average client satisfaction rating" },
  {
    value: 42,
    suffix: "hrs",
    label: "Average time to shortlist ideal options",
  },
];

export const reasons = [
  {
    title: "Qualification-first process",
    description:
      "Every lead is mapped by budget, timing, and purpose so your shortlist feels curated instead of overwhelming.",
  },
  {
    title: "Off-market & pre-launch access",
    description:
      "Tap into private inventory and early opportunities that rarely make it onto public portals.",
  },
  {
    title: "Investor-focused guidance",
    description:
      "Clear rental yield, exit strategy, and area-growth insights help buyers make confident decisions.",
  },
];

export const services = [
  {
    title: "Primary home advisory",
    description:
      "Find move-in-ready homes with neighborhood matching, school access, and lifestyle fit built into the search.",
  },
  {
    title: "Investment property sourcing",
    description:
      "Identify assets with strong rental demand, capital growth potential, and resale appeal.",
  },
  {
    title: "Seller positioning & negotiation",
    description:
      "Price, present, and market listings to attract serious buyers and shorten time on market.",
  },
  {
    title: "Relocation support",
    description:
      "Help international and relocating clients move smoothly with area orientation and tailored options.",
  },
];

export const listings = [
  {
    id: 1,
    title: "Skyline Marina Penthouse",
    type: "Apartment",
    budget: "AED 4M+",
    budgetTier: "premium",
    location: "Dubai Marina",
    beds: 4,
    baths: 5,
    size: "3,850 sq ft",
    status: "Ready to move",
    highlight: "Panoramic marina views and private sky lounge",
  },
  {
    id: 2,
    title: "Palm Signature Villa",
    type: "Villa",
    budget: "AED 15M+",
    budgetTier: "ultra",
    location: "Palm Jumeirah",
    beds: 5,
    baths: 6,
    size: "7,200 sq ft",
    status: "Exclusive listing",
    highlight: "Beachfront living with resort-style amenities",
  },
  {
    id: 3,
    title: "Downtown Investor Suite",
    type: "Apartment",
    budget: "AED 2M - 4M",
    budgetTier: "mid",
    location: "Downtown Dubai",
    beds: 2,
    baths: 2,
    size: "1,480 sq ft",
    status: "High rental yield",
    highlight: "Perfect for short-term rental strategy",
  },
  {
    id: 4,
    title: "Hills Family Residence",
    type: "Townhouse",
    budget: "AED 4M+",
    budgetTier: "premium",
    location: "Dubai Hills",
    beds: 4,
    baths: 4,
    size: "3,100 sq ft",
    status: "New community",
    highlight: "Family-friendly gated community near top schools",
  },
  {
    id: 5,
    title: "Harbour View Executive Home",
    type: "Apartment",
    budget: "Under AED 2M",
    budgetTier: "entry",
    location: "Dubai Creek Harbour",
    beds: 1,
    baths: 2,
    size: "980 sq ft",
    status: "Ideal first investment",
    highlight: "Strong developer payment plan and skyline vistas",
  },
  {
    id: 6,
    title: "Golf Course Corner Villa",
    type: "Villa",
    budget: "AED 4M+",
    budgetTier: "premium",
    location: "Dubai Hills",
    beds: 5,
    baths: 5,
    size: "5,900 sq ft",
    status: "Motivated seller",
    highlight: "Rare corner plot with golf-facing garden",
  },
];

export const transactions = [
  {
    address: "Palm Jumeirah beachfront villa",
    result: "Closed AED 18.2M",
    detail: "Sold in 19 days with 3 competing offers",
  },
  {
    address: "Downtown Dubai 2BR residence",
    result: "Leased at 7.4% yield",
    detail: "Investor purchase completed in 12 days",
  },
  {
    address: "Dubai Hills family townhouse",
    result: "Negotiated AED 420K below ask",
    detail: "Buyer secured after-market furnishing package",
  },
];

export const testimonials = [
  {
    name: "Nadia Rahman",
    role: "Investor, Singapore",
    quote:
      "Aria filtered the market quickly, explained the numbers clearly, and helped me secure a unit that leased within weeks.",
  },
  {
    name: "Samer & Lina Haddad",
    role: "End-user buyers",
    quote:
      "We felt guided, not pressured. The shortlist matched our exact lifestyle needs and the negotiation saved us a significant amount.",
  },
  {
    name: "Omar Khaled",
    role: "Seller, Dubai Marina",
    quote:
      "The positioning, media strategy, and constant updates made the process smooth. We had qualified buyers from day one.",
  },
];

export const faqs = [
  {
    question: "How quickly will I hear back after submitting the form?",
    answer:
      "Most inquiries receive a response within 10 minutes during business hours, including a shortlist plan or next best action.",
  },
  {
    question: "Do you work with both buyers and investors?",
    answer:
      "Yes. The process adapts based on whether you want an end-user home, an investment asset, or a seller strategy consultation.",
  },
  {
    question: "Can I request off-market opportunities?",
    answer:
      "Absolutely. Use the message field to mention “off-market” and the lead intake will prioritize private inventory matching.",
  },
  {
    question: "Do you help international clients purchase remotely?",
    answer:
      "Yes. Virtual tours, legal coordination, and digital paperwork support are available for overseas buyers.",
  },
];

export const trustBadges = [
  "RERA verified",
  "128+ transactions",
  "4.9/5 client rating",
  "WhatsApp response in 10 min",
];

export const filterOptions = {
  propertyTypes: ["All", "Apartment", "Villa", "Townhouse"],
  budgetTiers: [
    { label: "All budgets", value: "all" },
    { label: "Under AED 2M", value: "entry" },
    { label: "AED 2M - 4M", value: "mid" },
    { label: "AED 4M+", value: "premium" },
    { label: "AED 15M+", value: "ultra" },
  ],
  locations: [
    "All",
    "Dubai Marina",
    "Palm Jumeirah",
    "Downtown Dubai",
    "Dubai Hills",
    "Dubai Creek Harbour",
  ],
};
