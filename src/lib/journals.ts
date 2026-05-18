export interface JournalSection {
  type: "text" | "image" | "video" | "heading" | "quote";
  value: string;
  caption?: string;
}

export interface JournalEntry {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: "Science" | "Philosophy" | "Research" | "Observation" | "Journal";
  coverMedia?: {
    type: "image" | "video";
    url: string;
  };
  content: JournalSection[];
}

export const allJournals: JournalEntry[] = [
  {
    slug: "the-future-of-interface",
    title: "The Future of Digital Interfaces",
    subtitle: "How neural mapping and cognitive science will redefine our interaction with machines.",
    date: "May 12, 2026",
    category: "Science",
    coverMedia: {
      type: "image",
      url: "/assets/digital-bank.png"
    },
    content: [
      {
        type: "heading",
        value: "The Convergence of Mind and Machine"
      },
      {
        type: "text",
        value: "The history of interface design has always been a journey of reducing friction. From punch cards to command lines, and from GUIs to touch, each step has brought the machine closer to the human intent."
      },
      {
        type: "quote",
        value: "The best interface is no interface.",
        caption: "Golden Krishna"
      },
      {
        type: "text",
        value: "As we look toward the next decade, the focus shifts from the screen to the synapse. Research in neuro-plasticity suggests that our brains are more than ready to adopt digital layers as extensions of ourselves."
      }
    ]
  }
];
