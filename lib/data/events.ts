import { EventCategory } from "@/lib/types";

export const eventCategories: EventCategory[] = [
  {
    slug: "weddings",
    title: "Weddings",
    eyebrow: "Events — Weddings",
    description:
      "For the aisle, the reception, and every quiet moment between — styled to be remembered.",
    longDescription: [
      "[INSERT WEDDING EVENT DESIGN SERVICES — styling, floral direction, tablescapes, favours, coordination]",
      "[INSERT PAST WEDDING PORTFOLIO DESCRIPTION OR CASE STUDY]",
    ],
    image: "Weddings — reception styling and tablescape",
    pairedGiftingNote:
      "Every wedding we design is paired with gifting for the people who stood beside you — bridal party keepsakes, welcome gifts for out-of-town guests, or a considered gift for each other.",
    pairedShopCategory: "wedding",
  },
  {
    slug: "celebrations",
    title: "Celebrations",
    eyebrow: "Events — Celebrations",
    description:
      "Anniversaries, engagements, homecomings, milestones worth marking properly.",
    longDescription: [
      "[INSERT CELEBRATION EVENT DESIGN SERVICES — engagement dinners, anniversaries, homecomings, milestone gatherings]",
      "[INSERT PAST CELEBRATION PORTFOLIO DESCRIPTION OR CASE STUDY]",
    ],
    image: "Celebrations — intimate milestone gathering",
    pairedGiftingNote:
      "Each celebration is paired with gifting composed for the moment — a gift for the guest of honour, or something small for everyone who came to mark it with you.",
    pairedShopCategory: "love",
  },
  {
    slug: "birthdays",
    title: "Birthdays",
    eyebrow: "Events — Birthdays",
    description:
      "Another beautiful year, celebrated on purpose — from the tablescape to the gift each guest takes home.",
    longDescription: [
      "[INSERT BIRTHDAY EVENT DESIGN SERVICES — styling, tablescapes, themed design, favours]",
      "[INSERT PAST BIRTHDAY PORTFOLIO DESCRIPTION OR CASE STUDY]",
    ],
    image: "Birthdays — styled celebration tablescape",
    pairedGiftingNote:
      "Birthdays are paired with a gift chosen specifically for the person turning the page — plus favours, if your celebration calls for them.",
    pairedShopCategory: "birthday",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    eyebrow: "Events — Corporate",
    description:
      "Launches, galas, client dinners and team milestones — executed flawlessly.",
    longDescription: [
      "[INSERT CORPORATE EVENT DESIGN SERVICES — launches, galas, client dinners, team offsites, brand activations]",
      "[INSERT PAST CORPORATE EVENT PORTFOLIO DESCRIPTION OR CASE STUDY]",
    ],
    image: "Corporate Events — branded gala setup",
    pairedGiftingNote:
      "Corporate events are paired with gifting that represents your brand — for clients, executives, and the team that made the night happen.",
    pairedShopCategory: "corporate",
  },
];

export function getEventCategoryBySlug(slug: string) {
  return eventCategories.find((e) => e.slug === slug);
}
