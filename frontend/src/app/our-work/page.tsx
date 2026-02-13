"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  HandHeart,
  CheckCircle,
} from "lucide-react";

type GalleryData = Record<string, string[]>;

type Section = {
  title: string;
  key: string;
  icon: React.ReactNode;
  description: string[];
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
      icon: <Heart size={26} />,
      description: [
        "At Vatsalya Dhara Trust, Annadan is not merely distribution of food — it is a sacred offering of dignity. Every meal served carries warmth, respect, and reassurance for those facing hardship.",
        "From winter relief drives to community kitchens during crisis, our volunteers serve with humility and devotion. These moments reflect faith in action — where service becomes spirituality.",
        "We believe nourishment is a human right. When hunger disappears, hope reappears."
      ],
    },
    {
      title: "Education & Youth Empowerment",
      key: "education",
      icon: <BookOpen size={26} />,
      description: [
        "Education is the foundation of transformation. Through scholarships, mentoring programs, and book distribution initiatives, we empower young minds with knowledge and values.",
        "Beyond academics, we nurture discipline, leadership, and character — building confident individuals who can uplift their families and communities.",
        "Every classroom smile represents a future strengthened with courage and opportunity."
      ],
    },
    {
      title: "Healthcare & Medical Support",
      key: "healthcare",
      icon: <Activity size={26} />,
      description: [
        "Accessible healthcare restores dignity. Our free medical camps, awareness drives, and medicine support programs serve vulnerable communities with compassion.",
        "Doctors, volunteers, and supporters unite to ensure that financial constraints never stand between a patient and healing.",
        "Service in healthcare is sacred — where compassion meets recovery."
      ],
    },
    {
      title: "Animal Welfare & Gau Seva",
      key: "animal",
      icon: <Layers size={26} />,
      description: [
        "Compassion extends to all living beings. Through Gau Seva, animal feeding drives, and welfare initiatives, we honor life in its purest form.",
        "Our volunteers serve with reverence, recognizing that kindness toward animals strengthens society’s moral fabric.",
        "True humanity is reflected in how gently we treat every creature."
      ],
    },
    {
      title: "Elderly & Orphan Support",
      key: "elderly",
      icon: <Users size={26} />,
      description: [
        "Supporting elders and orphaned children protects both wisdom and future. We provide emotional care, shelter assistance, and essential resources.",
        "Our programs ensure that no elder feels abandoned and no child feels unseen.",
        "Through belonging and compassion, we restore dignity and hope."
      ],
    },
    {
      title: "Shav Daah Seva & Ambulance Services",
      key: "ambulance",
      icon: <Truck size={26} />,
      description: [
        "In life’s most critical and painful moments — whether during medical emergencies or times of loss — Vatsalya Dhara Trust stands beside families with dignity, urgency, and compassion.",
        "Our 24/7 ambulance services respond swiftly when every second matters, ensuring patients receive timely medical care while offering reassurance to anxious loved ones.",
        "Through our Shav Daah Seva, we also support families facing financial or social hardship by ensuring respectful last rites for departed souls. We believe every life deserves care in its final journey.",
        "From saving lives in motion to honoring them in farewell, our service transforms fear into hope, grief into grace, and humanity into prayer."
      ],
    },
  ];

  useEffect(() => {
    fetch("/api/our-work")
      .then((res) => res.json())
      .then((data: GalleryData) => {
        setSectionsData(data);
      });
  }, []);

  const openLightbox = (
    images: { section: string; file: string }[],
    index: number
  ) => {
    setActiveImages(images);
    setActive(index);
  };

  const prev = () =>
    setActive((i) => (i! - 1 + activeImages.length) % activeImages.length);

  const next = () =>
    setActive((i) => (i! + 1) % activeImages.length);

  return (
    <section className="min-h-screen bg-[#FFF8E7]">

      {/* ================= HERO ================= */}
      <div className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-amber-100 via-[#FFF3D6] to-amber-50">

        <div className="absolute w-[800px] h-[800px] bg-amber-300/30 rounded-full blur-3xl animate-[spin_80s_linear_infinite]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">

          <Image
            src="/images/vatsalya.png"
            alt="Vatsalya Logo"
            width={150}
            height={150}
            className="mx-auto mb-8"
          />

          {/* 🌺 HEADER */}
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-[#8B0000] mb-6 drop-shadow-lg">
              Our <span className="text-[#C45A00]">Work</span>
            </h1>
          </motion.div>

          <p className="text-xl text-[#3B1D00]/80 mb-6">
            A spiritual journey of service in action — where compassion transforms
            into measurable impact and humanity becomes devotion.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-10 py-4 bg-amber-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <HandHeart size={18} />
            Support Our Mission
          </Link>

          {/* Trust Line + 80G Badge */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* 80G Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                         bg-green-600 border border-green-400/40 
                         backdrop-blur-md text-green-200 text-sm font-medium 
                         shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              <CheckCircle size={16} className="text-green-300" />
              Eligible for 80G Tax Exemption
            </motion.div>
          </div>

          <div className="mt-6 text-amber-700 font-semibold tracking-widest">
            सेवा • करुणा • मानवता
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      {sections.map((section, idx) => {
        const images = sectionsData[section.key] || [];
        if (images.length === 0) return null;

        const mappedImages = images.map((file) => ({
          section: section.key,
          file,
        }));

        const isBright = idx % 2 === 0;

        return (
          <div
            key={section.key}
            className={`px-6 py-16 ${
              isBright
                ? "bg-gradient-to-b from-[#FFF3D4] to-[#FFE8B2]"
                : "bg-[#FFF9EF]"
            }`}
          >
            <div className="max-w-7xl mx-auto space-y-10">

              {/* Title */}
              <div className="text-center space-y-4">
                <div className="flex justify-center text-amber-700">
                  <div className="p-4 rounded-full bg-white shadow-xl">
                    {section.icon}
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#4B1E00]">
                  {section.title}
                </h2>
              </div>

              {/* Images */}
              <div className="relative overflow-hidden">
                <div
                  className="flex gap-8 w-max"
                  style={{
                    animation: `scroll-left ${
                      mappedImages.length * 8
                    }s linear infinite`,
                  }}
                >
                  {[...mappedImages, ...mappedImages].map((img, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        openLightbox(mappedImages, index % mappedImages.length)
                      }
                      className="cursor-pointer w-72 h-60 rounded-3xl overflow-hidden shadow-2xl border border-amber-200 group"
                    >
                      <img
                        src={`/images/vatsalya/${img.section}/${img.file}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-3xl mx-auto text-center space-y-8">

                {section.description.map((para, i) => (
                  <p
                    key={i}
                    className="text-[#3A2A1A] text-lg md:text-xl leading-relaxed font-light tracking-wide"
                  >
                    {para}
                  </p>
                ))}

              </div>

              {/* Impact */}
              <div className="text-center text-amber-700 font-semibold">
                🌼 Impacted Lives: {images.length * 50}+ individuals supported
              </div>
            </div>
          </div>
        );
      })}

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
              className="max-h-[85vh] rounded-3xl shadow-2xl border border-amber-300"
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
