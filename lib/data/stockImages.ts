/**
 * Temporary real stock photography used to fill Zioracadeau's placeholder
 * slots so the site reads as a finished, living page rather than gradient
 * blocks. Every image below is sourced from Unsplash (free to use under the
 * Unsplash License) and is intentionally generic — it is NOT real
 * Zioracadeau product or event photography, and should be swapped for the
 * brand's own photography before launch. See PlaceholderImage.tsx for how
 * this is wired in, and the `useStock` prop for opting a specific slot back
 * out to the plain gradient (used for the founder portrait, so a stock
 * model's photo is never presented as a specific real person).
 *
 * IMPORTANT: the id here is Unsplash's CDN asset id (the long
 * "timestamp-hash" string used in images.unsplash.com/photo-<id> URLs),
 * NOT the short id that appears in an unsplash.com/photos/<slug>-<id> page
 * URL — those are two different id systems. Every id below was verified by
 * fetching the photo's real page and reading its og:image meta tag, and
 * double-checked to resolve as a live image (not a 404) at the CDN.
 */

type Category = "wedding" | "birthday" | "corporate" | "gift" | "floral" | "lifestyle";

// Unsplash CDN photo IDs — verified live, free-tier (non-Unsplash+), grouped by theme.
const pools: Record<Category, string[]> = {
  wedding: [
    "1583939003579-730e3918a45a",
    "1595407753234-0882f1e77954",
    "1648154164366-d067faecdc51",
    "1511795409834-ef04bbd61622",
  ],
  birthday: [
    "1769541706531-9182ebb963db",
    "1530103862676-de8c9debad1d",
    "1513151233558-d860c5398176",
    "1583875762487-5f8f7c718d14",
  ],
  corporate: [
    "1587825140708-dfaf72ae4b04",
    "1558008258-3256797b43f3",
    "1511578314322-379afb476865",
    "1492684223066-81342ee5ff30",
  ],
  gift: [
    "1518291043933-49e998050694",
    "1480717846107-87837abec1e9",
    "1513201099705-a9746e1e201f",
    "1608755728617-aefab37d2edd",
    "1617118601021-4992c028fe5d",
  ],
  floral: ["1558021843-f9ab317ed0eb", "1782038522861-22e8c23c96e5"],
  lifestyle: [
    "1647905555465-0f9004fbdaed",
    "1580657274234-7339717f4541",
    "1623073284793-84dc366d4798",
    "1511229577011-6b24bfc30871",
  ],
};

const keywordMap: Array<[RegExp, Category]> = [
  [/wedding|bridal|bride|groom/i, "wedding"],
  [/birthday|cake|candle(?!light)/i, "birthday"],
  [/corporate|executive|office|gala|ballroom|conference|ceo|brand activation|launch/i, "corporate"],
  [/gift|box|ribbon|wrap|present|packag|parcel/i, "gift"],
  [/floral|flower|bouquet|rose|peony|botanical/i, "floral"],
  [/toast|champagne|celebrat|guest|reaction|table|tablescape|dinner|reception/i, "lifestyle"],
];

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function categoryForLabel(label: string): Category {
  for (const [pattern, category] of keywordMap) {
    if (pattern.test(label)) return category;
  }
  return "lifestyle";
}

/**
 * Resolves a stable, theme-matched Unsplash photo URL for a given
 * placeholder label. The same label always resolves to the same image
 * (hashed, not random), so a page doesn't shuffle images on every render.
 */
export function getStockPhotoUrl(label: string, width = 1600): string {
  const category = categoryForLabel(label);
  const pool = pools[category];
  const id = pool[hashString(label) % pool.length];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;
}
