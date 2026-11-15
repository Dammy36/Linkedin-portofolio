import assets from "./project-assets.json";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type Project = {
  slug: string;
  title: string;
  category: "Websites" | "AI Automation";
  // Omit until the owner confirms the classification. Never infer client status from a screenshot.
  type?: "Client Project" | "Personal Project" | "Demo";
  description: string;
  thumbnail?: ProjectImage;
  screenshots?: ProjectImage[];
  problem?: string;
  approach?: string;
  built: string[];
  technologies: string[];
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
  workflow?: { trigger: string; actions: string[]; output: string };
  caseStudy?: { heading: string; body: string }[];
};
function screenshot(original: string, alt: string): ProjectImage {
  const asset = assets.find((a) => a.original === original);
  if (!asset)
    throw new Error(`Missing original project screenshot: ${original}`);
  return { src: asset.src, width: asset.width, height: asset.height, alt };
}
// Descriptions use supplied screenshots and owner-confirmed project purposes and types.
// No performance metrics, deployment links, unconfirmed website stacks, or business outcomes are claimed.
export const projects: Project[] = [
  {
    slug: "nayae-beauty",
    title: "Nayaé Beauty — Makeup E-commerce Store",
    category: "Websites",
    type: "Client Project",
    description:
      "An e-commerce store for Nayaé Beauty to sell makeup items online, with a product-focused storefront and clear shopping navigation.",
    thumbnail: screenshot(
      "Capture-beauty.PNG",
      "Nayaé Beauty homepage with makeup photography, shop navigation and appointment calls to action.",
    ),
    built: [
      "Makeup e-commerce storefront with product photography and brand messaging.",
      "Navigation for Shop, Services, About, Contact and Cart.",
      "Prominent Shop Now and Book an Appointment calls to action.",
    ],
    technologies: [],
  },
  {
    slug: "damsel-nails-studio",
    title: "Damsel Nails — Appointment Booking Website",
    category: "Websites",
    type: "Client Project",
    description:
      "An appointment-booking website for Damsel Nails, helping visitors explore the salon and book nail appointments.",
    thumbnail: screenshot(
      "Capture-damselnails.PNG",
      "Damsel Nails Studio homepage with nail photography, salon introduction and a Book Now button.",
    ),
    built: [
      "Nail appointment-booking website with salon photography and location information.",
      "Navigation for the studio, services, gallery and contact.",
      "Visible booking, WhatsApp and Instagram calls to action.",
    ],
    technologies: [],
  },
  {
    slug: "ai-automation-digital-systems",
    title: "AI Automation & Digital Systems — Personal Website",
    category: "Websites",
    type: "Personal Project",
    description:
      "A personal services website presenting AI automation, digital operations, content systems and website services.",
    thumbnail: screenshot(
      "pin.PNG",
      "Personal digital systems website with a portrait, AI and automation headline, and Work With Me button.",
    ),
    built: [
      "Personal introduction and digital-services positioning.",
      "Navigation for services, portfolio, process, FAQs and contact.",
      "Work With Me and View My Work calls to action.",
    ],
    technologies: [],
  },
  {
    slug: "247drive-auto",
    title: "247DRIVE AUTO — Automotive Website",
    category: "Websites",
    type: "Client Project",
    description:
      "An automotive website interface featuring vehicle imagery and a car-model search entry point.",
    thumbnail: screenshot(
      "Capture auto.PNG",
      "247DRIVE AUTO homepage showing a vehicle hero, View More button and car-model search field.",
    ),
    built: [
      "Automotive hero with vehicle imagery.",
      "View More call to action.",
      "Car-model search interface.",
    ],
    technologies: [],
  },
  {
    slug: "damsel-nails-ai",
    title: "Damsel Nails AI — Daily Tips Interface",
    category: "Websites",
    type: "Demo",
    description:
      "A daily-tips interface with a topic prompt and a Generate button for beauty, nails and health topics.",
    thumbnail: screenshot(
      "Capture-ai.PNG",
      "Damsel Nails AI daily tips interface with a topic field and Generate button on a pink background.",
    ),
    built: [
      "Daily Tips interface with a topic input.",
      "Generate action and beauty, nails and health topic guidance.",
    ],
    technologies: [],
  },
  {
    slug: "ai-customer-support-email",
    title: "AI-Powered Customer Support Email Automation",
    category: "AI Automation",
    type: "Demo",
    description:
      "An email-support demo that classifies enquiries, routes category-specific responses, and alerts the owner when human intervention is needed.",
    thumbnail: screenshot(
      "Email-ai.PNG",
      "n8n customer support workflow with email classification, category routing, reply agents and owner notification nodes.",
    ),
    screenshots: [
      screenshot(
        "AI Powered Customer Suppport.png",
        "Owner-provided project summary describing n8n, Gmail and OpenRouter customer support email automation.",
      ),
    ],
    built: [
      "Email classification into Booking, Pricing, General Inquiry, Complaint and Urgent categories.",
      "Category-specific response routing.",
      "Owner notification for cases requiring human intervention.",
    ],
    technologies: ["n8n", "Gmail", "OpenRouter"],
    workflow: {
      trigger: "Incoming customer email in Gmail.",
      actions: [
        "Classify the enquiry with an AI model.",
        "Route the message to the relevant category.",
        "Prepare a category-specific response or escalate for human attention.",
      ],
      output:
        "Customer replies and owner notifications, as described in the supplied project summary.",
    },
  },
  {
    slug: "telegram-document-processing",
    title: "Telegram Image & PDF Processing",
    category: "AI Automation",
    type: "Demo",
    description:
      "A Telegram workflow demo that routes image and PDF inputs through separate processing paths, writes to Google Sheets, and returns a message.",
    thumbnail: screenshot(
      "AI auto.PNG",
      "n8n workflow connecting Telegram input to image analysis or PDF extraction, Google Sheets, and a Telegram response.",
    ),
    built: [
      "Telegram trigger and file retrieval.",
      "Separate image-analysis and PDF text-extraction branches.",
      "Model processing, sheet-writing, aggregation and a Telegram response.",
    ],
    technologies: ["n8n", "Telegram", "Google Sheets"],
    workflow: {
      trigger: "A Telegram message.",
      actions: [
        "Retrieve the file and route it by input type.",
        "Analyze an image or extract text from a PDF.",
        "Process the content, split items, and append rows to Google Sheets.",
        "Aggregate the branch output and merge the response paths.",
      ],
      output: "A text message sent back through Telegram.",
    },
  },
  {
    slug: "ai-calendar-sheets-assistant",
    title: "AI Calendar & Sheets Assistant",
    category: "AI Automation",
    type: "Demo",
    description:
      "A chat-agent demo connected to calendar actions, spreadsheet tools, memory and an n8n workflow tool.",
    thumbnail: screenshot(
      "Capture2.PNG",
      "n8n AI agent connected to an OpenAI chat model, memory, Google Calendar, Google Sheets and a workflow tool.",
    ),
    built: [
      "Chat-message trigger connected to an AI agent.",
      "OpenAI Chat Model and Simple Memory connections.",
      "Calendar event creation and retrieval tools.",
      "Google Sheets append, read and update tools, plus an n8n workflow tool connection.",
    ],
    technologies: ["n8n", "OpenAI", "Google Calendar", "Google Sheets"],
    workflow: {
      trigger: "A received chat message.",
      actions: [
        "Pass the message to an AI agent connected to a chat model and memory.",
        "Expose calendar, sheet and workflow tools to the agent.",
      ],
      output:
        "An agent workflow with the tool connections shown in the supplied screenshot. Individual task results are not documented.",
    },
  },
  {
    slug: "ai-inbox-organisation",
    title: "AI Inbox Organisation & Response Routing",
    category: "AI Automation",
    type: "Demo",
    description:
      "A Gmail demo that routes AI-processed messages into labelled categories, with branches for drafts and outgoing messages.",
    thumbnail: screenshot(
      "automation-email.PNG",
      "n8n Gmail workflow with AI processing and branches labelled Promotion, Social, Personal, Sales and MISC.",
    ),
    built: [
      "Gmail trigger and model-processing step.",
      "Routing for Promotion, Social, Personal, Sales and MISC.",
      "Gmail labelling, mark-as-read, draft and message actions on the displayed branches.",
    ],
    technologies: ["n8n", "Gmail"],
    workflow: {
      trigger: "A Gmail trigger.",
      actions: [
        "Process the message with a model and route it through a switch.",
        "Apply the branch-specific Gmail actions shown in the workflow.",
      ],
      output:
        "Category labels, drafts or outgoing messages according to the selected branch.",
    },
  },
  {
    slug: "lead-routing-email",
    title: "AI Lead Routing & Email Follow-Up",
    category: "AI Automation",
    type: "Demo",
    description:
      "A lead-intake demo connecting webhook routing, field preparation, model processing, Google Sheets and Gmail.",
    thumbnail: screenshot(
      "Capture.PNG",
      "n8n Receive New Lead webhook workflow with routing, field editing, a model step, Google Sheets and Gmail message nodes.",
    ),
    built: [
      "Receive New Lead webhook and rule-based routing.",
      "Field-editing branches merged before model processing.",
      "A Google Sheets append-row step and Gmail message actions.",
    ],
    technologies: ["n8n", "Google Sheets", "Gmail"],
    workflow: {
      trigger: "A Receive New Lead webhook.",
      actions: [
        "Route the incoming lead and prepare its fields.",
        "Merge branches and pass the data through a model step.",
        "Append a row to Google Sheets and continue to the Gmail actions.",
      ],
      output: "A recorded sheet row and Gmail message steps in the demo flow.",
    },
  },
  {
    slug: "sheets-data-email-workflows",
    title: "Spreadsheet Data & Email Workflow Demo",
    category: "AI Automation",
    type: "Demo",
    description:
      "Two workflow paths demonstrating spreadsheet processing and email actions alongside scheduled dataset collection.",
    thumbnail: screenshot(
      "auto-3.PNG",
      "n8n screenshot showing a manual Google Sheets and JavaScript email workflow above a scheduled dataset-to-sheet workflow.",
    ),
    built: [
      "Manual Google Sheets processing path with filtering, aggregation, JavaScript and a Gmail action.",
      "Scheduled dataset retrieval, item looping and Google Sheets updates.",
    ],
    technologies: ["n8n", "Google Sheets", "JavaScript", "Gmail"],
    workflow: {
      trigger:
        "A manual trigger for the upper flow; a schedule trigger for the lower flow.",
      actions: [
        "Upper flow: read sheet rows, edit fields, filter, append, aggregate, process with JavaScript and send a message.",
        "Lower flow: retrieve a dataset, loop over items, append or update a sheet, and wait between iterations.",
      ],
      output: "Spreadsheet and email actions shown in the two demo paths.",
    },
  },
];
