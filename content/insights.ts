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
      src: "/projects/capture-beauty.png",
      alt: "Nayaé Beauty makeup store homepage with product photography and shopping navigation.",
    },
  },
  {
    slug: "when-to-automate",
    category: "AI Automation",
    title: "When should a small business automate a task?",
  },
  {
    slug: "purposeful-progress",
    category: "Building with Purpose",
    title: "Why doing more isn't always making progress",
  },
];
