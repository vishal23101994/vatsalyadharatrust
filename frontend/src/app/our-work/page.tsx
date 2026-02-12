"use client";

import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  BookOpen,
  Activity,
  Truck,
  Users,
  Layers,
} from "lucide-react";

type GalleryData = Record<string, string[]>;

type Section = {
  title: string;
  key: string;
  icon: React.ReactNode;
  description: string;
};

export default function OurworkPage() {
  const [sectionsData, setSectionsData] = useState<GalleryData>({});
  const [active, setActive] = useState<number | null>(null);
  const [activeImages, setActiveImages] = useState<
    { section: string; file: string }[]
  >([]);

  const sections: Section[] = [
    {
      title: "Humanitarian Seva & Annadan",
      key: "annadan",
      icon: <Heart size={22} />,
      description:
        "Our Annadan drives reflect the spirit of true compassion. From distributing warm meals on winter streets to supporting families during crisis situations, these moments capture dignity being restored. Every plate served is a message — you are not alone. We believe nourishment is not charity, it is responsibility.",
    },
    {
      title: "Education & Youth Empowerment",
      key: "education",
      icon: <BookOpen size={22} />,
      description:
        "Education transforms destiny. Through scholarship support, mentoring, and essential learning materials, we nurture confidence and knowledge in young minds. These images reflect hope in classrooms, smiles in learning spaces, and futures being built with courage and values.",
    },
    {
      title: "Healthcare & Medical Support",
      key: "healthcare",
      icon: <Activity size={22} />,
      description:
        "Health is dignity. Our medical camps, medicine distribution programs, and awareness drives bring accessible care to vulnerable communities. These moments showcase service in action — where compassion meets healing.",
    },
    {
      title: "Emergency & Ambulance Services",
      key: "ambulance",
      icon: <Truck size={22} />,
      description:
        "When emergencies strike, time matters. Our ambulance services operate with urgency and humanity, ensuring patients receive immediate care. These visuals represent hope during life’s most critical moments.",
    },
    {
      title: "Animal Welfare & Gau Seva",
      key: "animal",
      icon: <Layers size={22} />,
      description:
        "Compassion extends to every living being. Through Gau Seva, feeding drives, and animal care initiatives, we honor life in all forms. These moments reflect kindness beyond boundaries.",
    },
    {
      title: "Elderly & Orphan Support",
      key: "elderly",
      icon: <Users size={22} />,
      description:
        "Care for elders and children is care for humanity’s foundation. Through emotional support, shelter assistance, and essential aid, we ensure dignity, belonging, and security for those who need it most.",
    },
  ];

  useEffect(() => {
    fetch("/api/our-work")
      .then((res) => res.json())
      .then((data: GalleryData) => {
        setSectionsData(data);
      });
  }, []);

  const openLightbox = (images: { section: string; file: string }[], index: number) => {
    setActiveImages(images);
    setActive(index);
  };

  const prev = () =>
    setActive((i) => (i! - 1 + activeImages.length) % activeImages.length);

  const next = () =>
    setActive((i) => (i! + 1) % activeImages.length);

  return (
    <section className="min-h-screen bg-[#FCFAF6] px-6 py-24">

      <div className="max-w-7xl mx-auto space-y-32">

        {/* HEADER */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl font-serif font-semibold text-[#4B1E00]">
            Our Work
          </h1>
          <p className="text-lg text-[#4B1E00]/80 max-w-3xl mx-auto leading-relaxed">
            A living testament of compassion in action. Every image reflects
            service, every moment reflects humanity.
          </p>
          <div className="text-amber-700 font-semibold tracking-widest">
            सेवा • करुणा • मानवता
          </div>
        </header>

        {/* SECTIONS */}
        {sections.map((section) => {
          const images = sectionsData[section.key] || [];

          if (images.length === 0) return null;

          const mappedImages = images.map((file) => ({
            section: section.key,
            file,
          }));

          return (
            <div key={section.key} className="space-y-10">

              {/* Title */}
              <div className="text-center space-y-3">
                <div className="flex justify-center text-amber-700">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-serif font-semibold text-[#4B1E00]">
                  {section.title}
                </h2>
              </div>

              {/* Animated Image Slider */}
              <div className="relative overflow-hidden">

                <div
                  className="marquee gap-6"
                  style={{
                    animation: `scroll-left ${mappedImages.length * 8}s linear infinite`,
                  }}
                >

                  {[...mappedImages, ...mappedImages].map((img, index) => (
                    <div
                      key={index}
                      onClick={() => openLightbox(mappedImages, index % mappedImages.length)}
                      className="cursor-pointer flex-shrink-0 w-72 h-60 rounded-2xl overflow-hidden shadow-lg group"
                    >
                      <img
                        src={`/images/vatsalya/${img.section}/${img.file}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                  ))}

                </div>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg leading-relaxed text-[#4B1E00]/90 text-justify">
                  {section.description}
                </p>

                <p className="mt-6 text-amber-700 font-medium">
                  Impacted Lives: {images.length * 50}+ individuals supported
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-amber-200 pt-10"></div>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/vatsalya/${activeImages[active].section}/${activeImages[active].file}`}
              className="max-h-[85vh] rounded-2xl shadow-2xl"
            />

            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-xl"
            >
              <X />
            </button>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl"
            >
              <ChevronRight />
            </button>

            <a
              href={`/images/vatsalya/${activeImages[active].section}/${activeImages[active].file}`}
              download
              className="absolute bottom-4 right-4 bg-amber-700 text-white px-6 py-3 rounded-full shadow-xl hover:bg-amber-800 transition"
            >
              <Download size={18} />
              
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
