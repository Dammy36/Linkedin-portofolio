import { notFound } from "next/navigation";
import Link from "next/link";
import { insights } from "@/content/insights";
import { Footer } from "@/components/footer";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: insights.find((i) => i.slug === slug)?.title || "Article not found",
  };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = insights.find((p) => p.slug === slug && p.body && p.publishedAt);
  if (!p) notFound();
  return (
    <>
      <main id="main" className="container section case-study">
        <Link className="inline-link" href="/#insights">
          ← Back to insights
        </Link>
        <p className="eyebrow">{p.category}</p>
        <h1>{p.title}</h1>
        <time dateTime={p.publishedAt}>{p.publishedAt}</time>
        <div className="article-body">
          {p.body?.split("\n\n").map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
