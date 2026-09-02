"use client";

import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";

export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <PlaceholderImage label={images[active]} aspect="aspect-[4/5]" animated />
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3 mt-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}: ${img}`}
              aria-current={active === i}
              className={`transition-opacity ${active === i ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
            >
              <PlaceholderImage label={img} aspect="aspect-square" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
