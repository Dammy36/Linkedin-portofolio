export type Insight = {
  slug: string;
  category: string;
  title: string;
  body?: string;
  publishedAt?: string;
};
// A body and a genuine publication date enable a dedicated article page.
export const insights: Insight[] = [
  {
    slug: "effective-websites",
    category: "Website Development",
    title: "Why a beautiful website isn't always an effective website",
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
