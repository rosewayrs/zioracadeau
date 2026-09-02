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
 */

type Category = "wedding" | "birthday" | "corporate" | "gift" | "floral" | "lifestyle";

// Unsplash photo IDs, verified via web search, grouped by theme.
const pools: Record<Category, string[]> = {
  wedding: ["cYmnN9uvH7g", "SiZ8IsL6BmA", "phYczwjMPdg"],
  birthday: ["GH_MMZVUFaM", "AquJhsgxams", "IPutN_Cdq1U", "zzTjty6f_1Y"],
  corporate: ["PVwBqEyGLn4", "2UyuVsvHfuQ", "i34y1SiniaE", "wO5DwEoyKjI"],
  gift: [
    "0wWg-kQ5H9k",
    "nMURn_xZku4",
    "KrS40Ohe1is",
    "Qyp0OvNhPyc",
    "HThOojXy4_4",
    "NDYjCsZVMys",
    "zAniegSoQnA",
    "SoJNAlhiyyI",
  ],
  floral: ["8nddjqlxvJ8"],
  lifestyle: ["ch4Fc1cGTq4", "i34y1SiniaE", "phYczwjMPdg"],
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
