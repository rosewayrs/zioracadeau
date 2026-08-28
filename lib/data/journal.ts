import { JournalArticle } from "@/lib/types";

export const journalArticles: JournalArticle[] = [
  {
    id: "j1",
    title: "What to Gift Someone Who Has Everything",
    slug: "what-to-gift-someone-who-has-everything",
    excerpt:
      "When the obvious gifts are already off the table, thoughtfulness becomes the only currency that matters.",
    category: "Gift Guides",
    date: "2026-06-02",
    readTime: "5 min read",
    image: "Journal — someone who has everything",
    body: [
      "[INSERT ARTICLE CONTENT — a considered gift guide for the hardest person to shop for]",
      "[INSERT FURTHER GUIDANCE, EXAMPLES AND RECOMMENDATIONS]",
    ],
  },
  {
    id: "j2",
    title: "The Art of Making a Gift Feel Personal",
    slug: "the-art-of-making-a-gift-feel-personal",
    excerpt:
      "Personalisation isn't a monogram. It's proof that you were paying attention.",
    category: "Personalisation",
    date: "2026-05-14",
    readTime: "4 min read",
    image: "Journal — personalisation detail",
    body: [
      "[INSERT ARTICLE CONTENT — on the difference between customisation and true personalisation]",
    ],
  },
  {
    id: "j3",
    title: "How to Build a Gift Box That Tells a Story",
    slug: "how-to-build-a-gift-box-that-tells-a-story",
    excerpt:
      "Every beautiful gift box is really a small piece of narrative design. Here's how we think about ours.",
    category: "Behind the Scenes",
    date: "2026-04-22",
    readTime: "6 min read",
    image: "Journal — box being composed",
    body: ["[INSERT ARTICLE CONTENT — the curation process behind a Zioracadeau box]"],
  },
  {
    id: "j4",
    title: "5 Gifts That Say “I Thought About You”",
    slug: "five-gifts-that-say-i-thought-about-you",
    excerpt:
      "Thoughtfulness has a shortlist. These are five ways to prove you were listening.",
    category: "Gift Guides",
    date: "2026-03-30",
    readTime: "3 min read",
    image: "Journal — five gift edit",
    body: ["[INSERT ARTICLE CONTENT]"],
  },
  {
    id: "j5",
    title: "Corporate Gifting Without the Corporate Feel",
    slug: "corporate-gifting-without-the-corporate-feel",
    excerpt:
      "How to make client and team gifting feel human, not transactional.",
    category: "Corporate Gifting",
    date: "2026-03-05",
    readTime: "5 min read",
    image: "Journal — corporate gifting scene",
    body: ["[INSERT ARTICLE CONTENT]"],
  },
  {
    id: "j6",
    title: "A Short Guide to Gift Etiquette",
    slug: "a-short-guide-to-gift-etiquette",
    excerpt:
      "Presentation, timing, and the small rules that make a gift land the way it was intended.",
    category: "Thoughtful Living",
    date: "2026-02-18",
    readTime: "4 min read",
    image: "Journal — etiquette flat lay",
    body: ["[INSERT ARTICLE CONTENT]"],
  },
];

export function getArticleBySlug(slug: string) {
  return journalArticles.find((a) => a.slug === slug);
}
