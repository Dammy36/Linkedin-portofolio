export type Insight = {
  slug: string;
  category: string;
  title: string;
  introduction?: string;
  linkedinUrl?: string;
  image?: { src: string; alt: string };
  body?: string;
  publishedAt?: string;
};
// A body and a genuine publication date enable a dedicated article page.
export const insights: Insight[] = [
  {
    slug: "nayae-beauty",
    category: "Website Development",
    title: "What a makeup store needs beyond a beautiful homepage",
    introduction:
      "The purpose behind Nayaé Beauty: helping customers explore makeup products and complete orders online.",
    linkedinUrl: "https://lnkd.in/p/d5i8feFi",
    image: {
      src: "/projects/beauty-photo-naye.png",
      alt: "Nayaé Beauty website with makeup portraits and its Beauty, made personal mission statement.",
    },
  },
  {
    slug: "when-to-automate",
    category: "AI Automation",
    title: "When should a small business automate a task?",
  },
  {
    slug: "business-problem-before-tools",
    category: "Building with Purpose",
    title: "Why I start with the business problem before choosing the tools",
    introduction:
      "I start by understanding what the business needs to improve, then decide whether a website, automation, or clearer content will help solve the problem.",
    image: {
      src: "/projects/business-card.png",
      alt: "Start with the problem: customers struggle to place orders, make shopping easier, then choose an online store with product pages and checkout.",
    },
  },
];
