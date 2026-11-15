export const site = {
  name: "Damilola Oseyemi",
  email: "pingrowthdigital@gmail.com",
  linkedin: "https://www.linkedin.com/in/damilola-oseyemi/",
  // Set NEXT_PUBLIC_SITE_URL to the real HTTPS deployment URL for canonical URLs and sitemap.
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""),
  tagline: "Build with purpose. Grow with strategy.",
};
export const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Selected Work", "work"],
  ["My Process", "process"],
  ["Contact", "contact"],
] as const;
export const services = [
  {
    title: "Website Development",
    label: "01 / WEB",
    description:
      "I design and build responsive websites, landing pages, and e-commerce experiences that help businesses communicate clearly and make it easier for customers to take action.",
    capabilities: [
      "Business websites",
      "Landing pages",
      "E-commerce experiences",
      "Responsive design",
      "Website improvements",
    ],
  },
  {
    title: "AI Automation",
    label: "02 / AUTOMATION",
    description:
      "I build automation workflows that connect tools, reduce repetitive tasks, and help business operations run more efficiently.",
    capabilities: [
      "n8n workflows",
      "Business process automation",
      "Lead capture workflows",
      "Follow-up automation",
      "Tool and API integrations",
    ],
  },
  {
    title: "Content Strategy",
    label: "03 / STRATEGY",
    description:
      "I develop purposeful content ideas and strategies that help businesses communicate their value, reach the right audience, and create with intention.",
    capabilities: [
      "Content planning",
      "Content pillars",
      "Messaging direction",
      "Storytelling frameworks",
      "Content calendars",
    ],
  },
];
export const processSteps = [
  {
    title: "Discover",
    text: "We start by understanding your business, your goals, and the problem you're trying to solve.",
  },
  {
    title: "Design",
    text: "I identify the right website, automation, or content approach based on what your business actually needs.",
  },
  {
    title: "Deliver",
    text: "I build, test, refine, and hand over a solution designed around the agreed objectives.",
  },
];
export const offers = [
  {
    title: "Purposeful Web Presence",
    audience: "For businesses ready to make a clearer first impression.",
    text: "A website or landing page that communicates clearly and supports customer action.",
    deliverables:
      "Potential scope: website design, development, responsive layouts.",
    service: "Website Development",
  },
  {
    title: "Smart Business Workflow",
    audience: "For businesses spending too much time on repetitive tasks.",
    text: "Simplify everyday operations and connect the tools you already use.",
    deliverables:
      "Potential scope: workflow mapping, n8n automation, tool integrations.",
    service: "AI Automation",
  },
  {
    title: "Purpose-Driven Digital Solutions",
    audience: "For businesses that need a connected digital approach.",
    text: "Bring your website, workflows, and strategic digital direction together.",
    deliverables:
      "Potential scope: website development, automation, messaging direction.",
    service: "Combined Digital Solution",
  },
];
