'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Heart, Sparkles, Target, ShieldCheck, HandHeart, CheckCircle } from 'lucide-react';

const trustees = [
  {
    role: "अध्यक्ष",
    name: "सीमा जैन",
    address:
      "D-49 बी, ललिता पार्क, शकरपुर एक्सटें., लक्ष्मी नगर, दिल्ली - 110092",
    phone: "9625604001",
  },
  {
    role: "महामंत्री",
    name: "अंकित जैन ‘प्रिंस’",
    address:
      "पुलक निवास, 4/2771, गली नं. 3, बिहारी कॉलोनी, शाहदरा, दिल्ली - 110032",
    phone: "9810900699",
  },
  {
    role: "कोषाध्यक्ष",
    name: "संदीप जैन",
    address: "मकान नं. 1154, सेक्टर-16, फरीदाबाद, हरियाणा",
    phone: "9810772312",
  },
  {
    role: "ट्रस्टी",
    name: "राजू व्यास",
    address: "116, लख्मी की पोल, जोधपुर, राजस्थान",
    phone: "9414243770",
  },
];


export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9EF] via-[#FFE8B2] to-[#FFD580] text-[#3A0A00]">

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
              Vatsalya <span className="text-[#C45A00]">Dhara Trust (Regd.)</span>
            </h1>
          </motion.div>

          <p className="py-10 text-lg md:text-m max-w-3xl mx-auto text-[#4B2200] leading-relaxed">
            <strong>Vatsalya Dhara Trust</strong> is devoted to serving humanity through
            compassion, dignity, and selfless service. Rooted in the sacred values of
            <em> Seva</em> and empathy, we transform care into action — uplifting
            communities through sustainable humanitarian initiatives.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-10 py-3 bg-amber-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
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

      {/* 👥 FOUNDERS */}
      <div className="relative max-w-7xl mx-auto mt-32 px-6 text-center z-10">
        <div className="flex justify-center mb-8">
          <Users className="w-14 h-14 text-[#C45A00] animate-pulse" />
        </div>

        <h2 className="text-4xl font-serif font-bold text-[#8B0000] mb-4">
          Our Team
        </h2>

        <p className="text-lg text-[#4B2200] max-w-3xl mx-auto mb-16 leading-relaxed">
          <strong>Seema Jain</strong> and <strong>Ankit Jain "Prince" </strong>
          envisioned Vatsalya Dhara Trust as a movement rooted in compassion,
          discipline, and spiritual responsibility — transforming faith into
          meaningful humanitarian action.
        </p>

        <div className="space-y-24">

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
                President
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
                Ankit Jain <span className="text-[#C45A00] italic">"Prince"</span>
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#C45A00] mb-4">
                Secratary
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
          {/* 🔹 SANDEEP JAIN */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center justify-between gap-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/sandeep.jpeg"   // 👈 add his image in public/images
              alt="Sandeep Jain"
              width={250}
              height={250}
              className="rounded-full border-[6px] border-[#C45A00] shadow-[0_10px_40px_-10px_rgba(196,90,0,0.6)] object-cover"
            />

            <div className="md:w-2/3 bg-gradient-to-b from-[#FFE8B2] to-[#FFD580] p-8 rounded-3xl border border-[#ECA400]/30 text-left shadow-md">
              <h3 className="text-2xl font-serif text-[#8B0000] font-semibold mb-2">
                <span className="text-[#C45A00] italic">CA</span> Sandeep Jain
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#C45A00] mb-4">
                Treasurer
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                A qualified Chartered Accountant and Advocate, Sandeep Jain
                strengthens the Trust with financial discipline and legal
                compliance expertise.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                He ensures transparency in governance, structured financial
                management, and ethical operational practices across all
                humanitarian initiatives.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                His professional guidance supports sustainable growth,
                accountability, and regulatory integrity — forming the backbone
                of the Trust’s responsible administration.
              </p>
            </div>
          </motion.div>
          {/* 🔹 RAJU VYAS */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/raju.jpeg"   // 👈 add his image in public/images
              alt="Raju Vyas"
              width={250}
              height={250}
              className="rounded-full border-[6px] border-[#C45A00] shadow-[0_10px_40px_-10px_rgba(196,90,0,0.6)] object-cover"
            />

            <div className="md:w-2/3 bg-gradient-to-b from-[#FFE8B2] to-[#FFD580] p-8 rounded-3xl border border-[#ECA400]/30 text-left shadow-md">
              <h3 className="text-2xl font-serif text-[#8B0000] font-semibold mb-2">
                Raju Vyas
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#C45A00] mb-4">
                Trustee
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                A dedicated social worker based in Jodhpur, Raju Vyas plays a
                vital role in expanding the Trust’s grassroots outreach.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                He actively supports community welfare programs, relief efforts,
                and humanitarian activities — ensuring timely assistance to those
                in need.
              </p>

              <p className="text-[#3A0A00] leading-relaxed text-justify">
                His deep local engagement and service-oriented mindset help
                strengthen Vatsalya Dhara’s mission of compassion across regions.
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

      {/* 👥 BOARD OF TRUSTEES */}
      <motion.div
        className="relative max-w-7xl mx-auto mt-28 px-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-bold text-[#8B0000] mb-3">
            Board of Trustees
          </h2>
          <p className="text-[#4B2200] max-w-3xl mx-auto">
            Dedicated individuals guiding the mission of Vatsalya Dhara Trust with
            transparency, responsibility, and compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {trustees.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-[#FFF8E1] to-[#FFE8B2] p-6 rounded-2xl border border-[#ECA400]/40 shadow-lg text-center hover:shadow-2xl hover:scale-[1.03] transition"
            >
              <p className="text-sm text-[#C45A00] font-semibold mb-1">
                {t.role}
              </p>

              <h3 className="text-lg font-serif font-semibold text-[#8B0000] mb-3">
                {t.name}
              </h3>

              <p className="text-sm text-[#3A0A00] leading-relaxed mb-4">
                {t.address}
              </p>

              <a
                href={`tel:${t.phone}`}
                className="inline-block bg-[#FFD580] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
              >
                📞 {t.phone}
              </a>
            </div>
          ))}
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
        className="py-20 text-center mt-24 relative z-10"
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
            href="/our-work"
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
