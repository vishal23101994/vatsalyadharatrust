'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Heart, Sparkles, Target, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9EF] via-[#FFE8B2] to-[#FFD580] text-[#3A0A00] py-24">

      {/* Subtle Sacred Pattern */}
      <div className="absolute inset-0 bg-[url('/swastik-pattern.png')] opacity-10 bg-cover bg-center"></div>

      {/* 🌺 HEADER */}
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-serif text-[#8B0000] mb-6 drop-shadow-lg">
          Vatsalya <span className="text-[#C45A00]">Dhara Trust</span>
        </h1>

        <p className="text-lg md:text-m max-w-3xl mx-auto text-[#4B2200] leading-relaxed">
          <strong>Vatsalya Dhara Trust</strong> is devoted to serving humanity through
          compassion, dignity, and selfless service. Rooted in the sacred values of
          <em> Seva</em> and empathy, we transform care into action — uplifting
          communities through sustainable humanitarian initiatives.
        </p>
      </motion.div>

      {/* 🌿 Spiritual Foundation Section */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center mt-28 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/vatsalya.png"
          alt="Vatsalya Logo"
          width={200}
          height={200}
          className="rounded-full shadow-2xl object-contain mb-6"
        />
        <h3 className="text-2xl md:text-3xl text-[#8B0000] font-serif font-semibold">
          A Sacred Flow of Compassion
        </h3>
        <p className="max-w-2xl mx-auto mt-3 text-[#4B2200] text-lg leading-relaxed">
          Inspired by the philosophy of unconditional love and humanitarian
          responsibility, Vatsalya Dhara Trust stands as a beacon of service —
          nurturing lives through education, healthcare, relief support, and
          community welfare.
        </p>
      </motion.div>

      {/* 👥 FOUNDERS */}
      <div className="relative max-w-7xl mx-auto mt-32 px-6 text-center z-10">
        <div className="flex justify-center mb-8">
          <Users className="w-14 h-14 text-[#C45A00] animate-pulse" />
        </div>

        <h2 className="text-4xl font-serif font-bold text-[#8B0000] mb-4">
          Our Founders
        </h2>

        <p className="text-lg text-[#4B2200] max-w-3xl mx-auto mb-16 leading-relaxed">
          <strong>Ankit Jain "Prince"</strong> and <strong>Seema Jain </strong>
          envisioned Vatsalya Dhara Trust as a movement rooted in compassion,
          discipline, and spiritual responsibility — transforming faith into
          meaningful humanitarian action.
        </p>

        <div className="space-y-24">

          {/* 🔹 ANKIT JAIN */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/founder.jpeg"
              alt="Ankit Jain"
              width={250}
              height={250}
              className="rounded-full border-[6px] border-[#C45A00] shadow-[0_10px_40px_-10px_rgba(196,90,0,0.6)] object-cover"
            />

            <div className="md:w-2/3 bg-gradient-to-b from-[#FFE8B2] to-[#FFD580] p-8 rounded-3xl border border-[#ECA400]/30 text-left shadow-md">
              <h3 className="text-2xl font-serif text-[#8B0000] font-semibold mb-2">
                Ankit Jain "Prince"
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#C45A00] mb-4">
                Founder & Managing Trustee
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                A spiritually driven leader and humanitarian visionary,
                Ankit Jain established Vatsalya Dhara Trust with the mission
                of transforming compassion into structured social impact.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                Under his guidance, the Trust actively supports
                <strong> food distribution drives, medical camps, emergency
                services, animal welfare initiatives,</strong> and
                community upliftment programs.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                His leadership embodies discipline, humility, and a deep belief
                that service to humanity is the highest spiritual practice.
              </p>
            </div>
          </motion.div>

          {/* 🔹 SEEMA JAIN */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center justify-between gap-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/seema.jpeg"
              alt="Seema Jain"
              width={250}
              height={250}
              className="rounded-full border-[6px] border-[#C45A00] shadow-[0_10px_40px_-10px_rgba(196,90,0,0.6)] object-cover"
            />

            <div className="md:w-2/3 bg-gradient-to-b from-[#FFE8B2] to-[#FFD580] p-8 rounded-3xl border border-[#ECA400]/30 text-left shadow-md">
              <h3 className="text-2xl font-serif text-[#8B0000] font-semibold mb-2">
                Seema Jain
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#C45A00] mb-4">
                Co-Founder & Director
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                Seema Jain plays a pivotal role in guiding the Trust’s
                humanitarian outreach with compassion and strategic clarity.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                With strong organizational leadership and community engagement,
                she ensures that every initiative maintains transparency,
                sustainability, and measurable impact.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                Her nurturing leadership strengthens the Trust’s foundation of
                empathy, women-led participation, and inclusive social development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🌍 ABOUT THE TRUST */}
      <motion.div
        className="relative max-w-7xl mx-auto mt-20 px-10 py-16 rounded-3xl bg-gradient-to-br from-[#FFF8E1] to-[#FFE8A0] border border-[#FFD700]/40 shadow-[0_20px_60px_-15px_rgba(196,90,0,0.3)] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="space-y-5 text-justify">
          <h2 className="text-4xl font-serif font-bold text-[#8B0000] mb-4 text-center">
            About the Trust
          </h2>

          <p className="text-lg leading-relaxed text-[#3A0A00]">
            Vatsalya Dhara Trust is a humanitarian organization dedicated to
            social welfare, spiritual service, and sustainable community
            development.
          </p>

          <p className="text-lg leading-relaxed text-[#3A0A00]">
            Our initiatives span across <strong>education, healthcare,
            emergency relief, food distribution, elderly care, and animal
            welfare</strong> — ensuring dignity and support for every
            individual we serve.
          </p>

          <p className="text-lg leading-relaxed text-[#3A0A00]">
            Through structured impact programs and transparent governance,
            we strive to create lasting change rooted in compassion,
            responsibility, and collective effort.
          </p>
        </div>
      </motion.div>

      {/* 💛 CORE VALUES */}
      <div className="max-w-7xl mx-auto mt-28 grid md:grid-cols-3 gap-10 px-6 relative z-10">
        {[
          {
            icon: <Heart className="w-12 h-12 text-[#C45A00]" />,
            title: 'Compassion',
            text: 'We serve with empathy, dignity, and respect for all living beings.',
          },
          {
            icon: <Sparkles className="w-12 h-12 text-[#C45A00]" />,
            title: 'Integrity',
            text: 'Transparency and accountability guide every initiative we undertake.',
          },
          {
            icon: <Target className="w-12 h-12 text-[#C45A00]" />,
            title: 'Impact',
            text: 'We design programs focused on measurable, sustainable community transformation.',
          },
        ].map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="p-8 bg-gradient-to-br from-[#FFFDF5] to-[#FFF1C8] rounded-3xl border border-[#ECA400]/30 shadow-[0_10px_30px_-10px_rgba(196,90,0,0.25)] text-center hover:shadow-2xl hover:scale-[1.03] transition-transform"
          >
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h3 className="text-2xl font-serif text-[#8B0000] mb-3">
              {value.title}
            </h3>
            <p className="text-[#3A0A00] text-justify">
              {value.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ✨ CTA */}
      <motion.div
        className="text-center mt-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl text-[#A43B00] mb-3 font-serif font-bold">
          Join Our Mission of Service
        </h2>

        <p className="max-w-3xl mx-auto text-[#3A0A00] mb-6 leading-relaxed">
          Together, we can expand the flow of compassion and uplift
          communities through meaningful action.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#3A0A00] font-semibold rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            View Our Work →
          </Link>

          <Link
            href="/donate"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#C45A00] to-[#ECA400] text-white font-semibold rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            Support Our Mission
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
