export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  category: string;
  image: string;
  whoIsItFor: string[];
  whatProblem: string[];
  whatYouGet: string[];
  requiredTools: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "ai-marketing-mastery",
    name: "AI Marketing Mastery",
    price: 49,
    shortDescription: "Launch your first AI-powered campaign in 24 hours",
    category: "Marketing",
    image: "/placeholder.svg",
    featured: true,
    description: "Transform your marketing with AI tools and proven frameworks. No technical experience required.",
    whoIsItFor: [
      "Small business owners struggling with marketing",
      "Solopreneurs who want to scale content creation",
      "Marketing managers looking to adopt AI tools",
      "Entrepreneurs starting their first business"
    ],
    whatProblem: [
      "Spending hours creating content with inconsistent results",
      "No clear strategy for using AI in marketing",
      "Overwhelmed by too many AI tools and options",
      "Struggling to maintain brand voice with AI"
    ],
    whatYouGet: [
      "5 video tutorials (60 minutes total)",
      "50+ battle-tested prompts for marketing",
      "Campaign templates for 10 industries",
      "Content calendar system",
      "AI tool comparison guide",
      "30-day implementation checklist"
    ],
    requiredTools: [
      "ChatGPT (free or paid)",
      "Canva (free account works)",
      "Google Workspace or Microsoft 365"
    ]
  },
  {
    id: "productivity-ai-system",
    name: "Productivity AI System",
    price: 39,
    shortDescription: "Automate your workflow and save 10 hours per week",
    category: "Productivity",
    image: "/placeholder.svg",
    featured: true,
    description: "Build your personal AI assistant that handles repetitive tasks while you focus on growth.",
    whoIsItFor: [
      "Busy founders juggling multiple responsibilities",
      "Remote workers managing complex projects",
      "Consultants handling multiple clients",
      "Anyone drowning in emails and admin work"
    ],
    whatProblem: [
      "No time for strategic thinking due to admin overload",
      "Missing important tasks and deadlines",
      "Repetitive work killing your productivity",
      "Difficulty maintaining work-life balance"
    ],
    whatYouGet: [
      "4 video guides (45 minutes)",
      "Email automation templates",
      "Task prioritization AI prompts",
      "Meeting notes automation system",
      "Calendar optimization framework",
      "Weekly review template"
    ],
    requiredTools: [
      "ChatGPT or Claude",
      "Gmail or Outlook",
      "Any task management app (Notion, Todoist, etc.)"
    ]
  },
  {
    id: "content-creator-toolkit",
    name: "Content Creator Toolkit",
    price: 59,
    shortDescription: "Create 30 days of content in one afternoon",
    category: "Content Creation",
    image: "/placeholder.svg",
    featured: true,
    description: "Never run out of content ideas. Generate, repurpose, and schedule content at scale with AI.",
    whoIsItFor: [
      "Content creators struggling with consistency",
      "Business owners managing social media",
      "Agencies serving multiple clients",
      "Coaches and consultants building authority"
    ],
    whatProblem: [
      "Constant pressure to post consistently",
      "Running out of fresh content ideas",
      "Time-consuming content creation process",
      "Low engagement on social posts"
    ],
    whatYouGet: [
      "6 video tutorials (75 minutes)",
      "100+ content prompt templates",
      "Content repurposing system",
      "Engagement optimization guide",
      "Platform-specific best practices",
      "Viral content framework"
    ],
    requiredTools: [
      "ChatGPT or similar AI tool",
      "Canva (free version works)",
      "Social media scheduling tool (Buffer, Later, etc.)"
    ]
  },
  {
    id: "sales-funnel-builder",
    name: "Sales Funnel Builder",
    price: 79,
    shortDescription: "Build a converting funnel in one weekend",
    category: "Sales",
    image: "/placeholder.svg",
    featured: true,
    description: "Stop losing leads. Build a proven sales funnel that converts visitors into paying customers.",
    whoIsItFor: [
      "Entrepreneurs launching their first product",
      "Service providers needing consistent leads",
      "E-commerce owners improving conversion",
      "Course creators building their funnel"
    ],
    whatProblem: [
      "High traffic but low conversion rates",
      "Unclear customer journey",
      "No system for nurturing leads",
      "Guessing what messaging works"
    ],
    whatYouGet: [
      "7 video lessons (90 minutes)",
      "Complete funnel templates",
      "Copywriting frameworks with AI prompts",
      "Email sequence templates",
      "Landing page optimization checklist",
      "A/B testing guide"
    ],
    requiredTools: [
      "Website builder (Webflow, WordPress, etc.)",
      "Email marketing tool (Mailchimp, ConvertKit, etc.)",
      "ChatGPT for copywriting"
    ]
  },
  {
    id: "personal-branding-accelerator",
    name: "Personal Branding Accelerator",
    price: 45,
    shortDescription: "Build a memorable personal brand in 7 days",
    category: "Branding",
    image: "/placeholder.svg",
    description: "Stand out in your industry with a compelling personal brand that attracts opportunities.",
    whoIsItFor: [
      "Professionals transitioning to entrepreneurship",
      "Consultants competing in crowded markets",
      "Job seekers building their online presence",
      "Thought leaders establishing authority"
    ],
    whatProblem: [
      "Invisible in a crowded marketplace",
      "Unclear positioning and messaging",
      "Inconsistent brand across platforms",
      "Difficulty articulating your value"
    ],
    whatYouGet: [
      "5 video modules (55 minutes)",
      "Brand positioning canvas",
      "Bio and headline templates",
      "Visual identity guide",
      "Content pillars framework",
      "7-day action plan"
    ],
    requiredTools: [
      "LinkedIn or Twitter account",
      "Canva for graphics",
      "ChatGPT for content ideation"
    ]
  },
  {
    id: "email-list-launcher",
    name: "Email List Launcher",
    price: 35,
    shortDescription: "Get your first 1000 subscribers in 30 days",
    category: "Marketing",
    image: "/placeholder.svg",
    description: "Build an engaged email list from scratch using proven lead magnet strategies and AI.",
    whoIsItFor: [
      "New entrepreneurs building their audience",
      "Bloggers monetizing their content",
      "Coaches offering online services",
      "Product creators pre-launching"
    ],
    whatProblem: [
      "Zero or tiny email list",
      "No strategy for growing subscribers",
      "Poor lead magnet conversion",
      "Don't know what content to send"
    ],
    whatYouGet: [
      "4 video trainings (50 minutes)",
      "10 lead magnet templates",
      "Landing page frameworks",
      "Welcome sequence scripts",
      "Growth tactics checklist",
      "Engagement tips"
    ],
    requiredTools: [
      "Email platform (Mailchimp, ConvertKit, etc.)",
      "Landing page builder",
      "ChatGPT for content"
    ]
  }
];

export const categories = [
  { id: "all", name: "All Packages", icon: "Package" },
  { id: "Marketing", name: "Marketing", icon: "Megaphone" },
  { id: "Productivity", name: "Productivity", icon: "Zap" },
  { id: "Content Creation", name: "Content Creation", icon: "FileText" },
  { id: "Sales", name: "Sales", icon: "TrendingUp" },
  { id: "Branding", name: "Branding", icon: "Award" }
];
