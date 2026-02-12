"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Activity,
  Truck,
  Users,
  Layers,
  HandHeart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function WhatWeDoPage() {
  return (
    <section className="bg-[#FCFAF6] text-[#3B1D00] overflow-hidden">

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

          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
            Compassion in Action
          </h1>

          <p className="text-xl text-[#3B1D00]/80 mb-6">
            Serving Humanity Through Seva, Integrity & Dedication
          </p>

          <p className="text-lg text-[#3B1D00]/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            At Vatsalya Dhara Trust, our initiatives are rooted in spiritual compassion 
            and guided by structured planning. Every program we run is designed not just 
            to provide immediate relief, but to create sustainable impact and restore dignity.
          </p>

          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-10 py-4 bg-amber-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <HandHeart size={18} />
            Support Our Mission
          </Link>

          <div className="mt-6 text-amber-700 font-semibold tracking-widest">
            सेवा • करुणा • मानवता
          </div>
        </div>
      </div>

      {/* ================= IMPACT STATS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-10 text-center">

          {[
            { number: "1,00,000+", label: "Meals Served", desc: "Through ongoing Annadaan drives across communities." },
            { number: "2,000+", label: "Medical Beneficiaries", desc: "Free camps, medicines & emergency support." },
            { number: "1,000+", label: "Students Supported", desc: "Scholarships, books & mentorship programs." },
            { number: "24/7", label: "Ambulance Service", desc: "Rapid response for life-saving emergencies." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 shadow-lg border border-amber-200 hover:shadow-2xl transition"
            >
              <h3 className="text-4xl font-bold text-amber-700 mb-2">
                {item.number}
              </h3>
              <p className="font-semibold">{item.label}</p>
              <p className="text-sm text-[#3B1D00]/70 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-6xl mx-auto px-6 space-y-28">

        <section className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-14 border border-amber-200">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-amber-600" />
            <h2 className="text-3xl font-serif font-semibold">
              Our Commitment to Sustainable Impact
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-justify">
            We believe that meaningful change requires continuity, accountability,
            and compassion. Every initiative is monitored to ensure that resources
            reach the right beneficiaries and create long-term value.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-justify">
            Our work integrates spiritual wisdom with measurable outcomes —
            ensuring that service remains both heartfelt and effective.
          </p>
        </section>

        {/* ================= SERVICES ================= */}
        <section>
          <h2 className="text-4xl font-serif font-semibold text-center mb-16">
            Our Core Initiatives
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                img: "/images/youth.jpg",
                icon: <Heart className="text-rose-500" size={32} />,
                title: "Humanitarian Seva & Annadaan",
                desc: "Large-scale food distribution drives ensuring no one sleeps hungry. Nutritious meals are served with dignity across communities.",
              },
              {
                img: "/images/education.jpeg",
                icon: <BookOpen className="text-amber-600" size={32} />,
                title: "Education & Youth Empowerment",
                desc: "Scholarships, educational material, mentorship programs, and skill-building initiatives empowering future generations.",
              },
              {
                img: "/images/healthcamp.jpeg",
                icon: <Activity className="text-green-600" size={32} />,
                title: "Healthcare & Medical Support",
                desc: "Free health camps, preventive care awareness, and medicine distribution programs improving community well-being.",
              },
              {
                img: "/images/ambulance.jpeg",
                icon: <Truck className="text-blue-600" size={32} />,
                title: "Emergency & Ambulance Services",
                desc: "Round-the-clock emergency transport ensuring timely medical intervention during critical situations.",
              },
              {
                img: "/images/animals.jpeg",
                icon: <Layers className="text-amber-700" size={32} />,
                title: "Animal Welfare & Gau Seva",
                desc: "Providing food, shelter, and medical assistance to animals, extending compassion beyond human communities.",
              },
              {
                img: "/images/elderly.jpeg",
                icon: <Users className="text-purple-600" size={32} />,
                title: "Elderly & Orphan Support",
                desc: "Holistic support programs offering care, dignity, and security for vulnerable individuals.",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href="/donate"
                className="group bg-white rounded-3xl shadow-lg border border-amber-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#3B1D00]/80">
                    {item.desc}
                  </p>
                  <div className="mt-4 text-amber-700 font-semibold">
                    Support this Initiative →
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* ================= GOVERNANCE ================= */}
        <section className="bg-gradient-to-br from-amber-50 to-white p-16 rounded-3xl shadow-xl border border-amber-200">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-amber-700" />
            <h2 className="text-3xl font-serif font-semibold">
              Transparency & Accountability
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-justify">
            We maintain complete transparency in fund allocation and program
            implementation. Every contribution is responsibly utilized to
            maximize impact and uphold donor trust.
          </p>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="relative bg-gradient-to-r from-amber-200 to-amber-100 p-20 rounded-3xl shadow-2xl border border-amber-300 text-center mb-32">

          <h2 className="text-4xl font-serif font-semibold mb-6">
            Be a Part of This Sacred Mission
          </h2>

          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Every donation creates real impact — nourishing lives, saving
            patients, empowering students, and protecting the vulnerable.
          </p>

          <Link
            href="/donate"
            className="inline-flex items-center gap-3 px-12 py-5 bg-amber-800 text-white rounded-full shadow-xl hover:bg-amber-900 hover:scale-105 transition duration-300"
          >
            <HandHeart size={20} />
            Donate Now
          </Link>

          <div className="mt-8 text-amber-800 font-semibold tracking-widest">
            सेवा • करुणा • मानवता
          </div>
        </section>

      </div>
    </section>
  );
}
