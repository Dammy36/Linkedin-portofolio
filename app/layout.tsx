import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: `${site.name} — Purposeful Digital Solutions`,
    template: `%s | ${site.name}`,
  },
  description:
    "Purposeful websites, AI automation, and content strategy for founders and small business owners. Build with purpose. Grow with strategy.",
  openGraph: {
    title: `${site.name} — Build with purpose.`,
    description:
      "Web development, AI automation, and content strategy built around real business needs.",
    type: "website",
    locale: "en_US",
    ...(site.url ? { url: site.url } : {}),
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
