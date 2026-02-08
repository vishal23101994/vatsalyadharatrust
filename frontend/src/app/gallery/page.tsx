"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const prev = () =>
    setActive((i) => (i! - 1 + images.length) % images.length);
  const next = () =>
    setActive((i) => (i! + 1) % images.length);

  return (
    <section className="min-h-screen bg-[#FFF8E7] px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            Gallery
          </h1>
          <p className="text-lg text-[#4B1E00]/80">
            Moments of service, compassion, and humanity
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img, i) => (
            <div
              key={img}
              onClick={() => setActive(i)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md border border-amber-200 bg-white"
            >
              <img
                src={`/images/vatsalya/images/${img}`}
                alt="Vatsalya Seva"
                loading="lazy"
                className="w-full h-56 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/vatsalya/images/${images[active]}`}
              className="max-h-[85vh] rounded-xl shadow-2xl"
            />

            {/* CLOSE */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
            >
              <X />
            </button>

            {/* PREV */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
            >
              <ChevronLeft />
            </button>

            {/* NEXT */}
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
            >
              <ChevronRight />
            </button>

            {/* DOWNLOAD */}
            <a
              href={`/images/vatsalya/images/${images[active]}`}
              download
              className="absolute bottom-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
