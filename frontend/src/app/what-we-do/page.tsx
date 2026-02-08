import {
  Heart,
  BookOpen,
  Activity,
  Truck,
  Users,
  Layers,
  HandHeart,
} from "lucide-react";

export default function WhatWeDoPage() {
  return (
    <section className="min-h-screen bg-[#FFF8E7] px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* HEADER */}
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#4B1E00]">
            What We Do
          </h1>
          <p className="text-lg md:text-xl text-[#4B1E00]/80">
            Transforming compassion into action through meaningful service
          </p>
        </header>

        {/* INTRO */}
        <section className="bg-white/70 backdrop-blur p-8 rounded-2xl shadow border border-amber-200">
          <p className="text-lg leading-relaxed text-[#4B1E00]/90 text-justify">
            At <strong>Vatsalya Dhara Trust</strong>, our work is driven by the belief
            that true service lies in addressing real needs with empathy and
            responsibility. We design and implement initiatives that directly
            improve lives, support communities, and uphold human dignity.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-[#4B1E00]/90 text-justify">
            Our activities span across education, healthcare, emergency response,
            animal welfare, and social upliftment — guided by the spirit of
            <em> seva</em> and compassion for all living beings.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section>
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
            Our Core Initiatives
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* HUMANITARIAN SEVA */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/youth.jpg"
                  alt="Humanitarian Seva"
                  className="w-full h-full object-cover object-top"
                />

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <Heart className="text-rose-500 mb-4" size={36} />
                <h3 className="text-2xl font-semibold mb-3">
                  Humanitarian Seva & Annadaan
                </h3>
                <p className="text-[#4B1E00]/90 text-justify leading-relaxed">
                  We conduct regular food distribution drives (Annadaan) to feed
                  the hungry, homeless, and economically weaker sections of society.
                  During natural disasters, pandemics, or emergencies, the Trust
                  actively participates in relief operations by providing essential
                  supplies, food packets, and immediate assistance.
                </p>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/education.jpeg"
                  alt="Humanitarian Seva"
                  className="w-full h-full object-cover object-top"
                />

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <BookOpen className="text-amber-600 mb-4" size={36} />
                <h3 className="text-2xl font-semibold mb-3">
                  Education & Youth Empowerment
                </h3>
                <p className="text-[#4B1E00]/90 text-justify leading-relaxed">
                  Education is the foundation of a strong society. We support
                  underprivileged children by providing access to learning
                  resources, guidance, and moral education. Our programs focus on
                  holistic development — nurturing discipline, confidence, and
                  values alongside academics.
                </p>
              </div>
            </div>

            {/* HEALTHCARE */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/healthcamp.jpeg"
                  alt="Humanitarian Seva"
                  className="w-full h-full object-cover object-top"
                />

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <Activity className="text-green-600 mb-4" size={36} />
                <h3 className="text-2xl font-semibold mb-3">
                  Healthcare & Medical Support
                </h3>
                <p className="text-[#4B1E00]/90 text-justify leading-relaxed">
                  The Trust organizes free health check-up camps, medicine
                  distribution drives, and healthcare awareness programs,
                  particularly for senior citizens and economically weaker
                  communities.
                </p>
              </div>
            </div>

            {/* AMBULANCE */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/ambulance.jpeg"
                  alt="Humanitarian Seva"
                  className="w-full h-full object-cover object-top"
                />

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <Truck className="text-blue-600 mb-4" size={36} />
                <h3 className="text-2xl font-semibold mb-3">
                  Ambulance & Emergency Services
                </h3>
                <p className="text-[#4B1E00]/90 text-justify leading-relaxed">
                  Timely medical assistance can save lives. Our ambulance services
                  provide rapid emergency support, ensuring patients are
                  transported safely to medical facilities during critical
                  situations.
                </p>
              </div>
            </div>

            {/* ANIMAL WELFARE */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/animals.jpeg"
                  alt="Humanitarian Seva"
                  className="w-full h-full object-cover object-top"
                />

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <Layers className="text-amber-700 mb-4" size={36} />
                <h3 className="text-2xl font-semibold mb-3">
                  Gau Seva & Animal Welfare
                </h3>
                <p className="text-[#4B1E00]/90 text-justify leading-relaxed">
                  Compassion extends to all living beings. We actively support
                  cow shelters (Gau Seva), feed birds and animals, and provide care
                  for injured or abandoned animals.
                </p>
              </div>
            </div>

            {/* ELDERLY & ORPHANS */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/elderly.jpeg"
                  alt="Humanitarian Seva"
                  className="w-full h-full object-cover object-top"
                />

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <Users className="text-purple-600 mb-4" size={36} />
                <h3 className="text-2xl font-semibold mb-3">
                  Support for Elderly & Orphans
                </h3>
                <p className="text-[#4B1E00]/90 text-justify leading-relaxed">
                  We extend care, shelter, emotional support, and essential
                  assistance to senior citizens and orphaned children, ensuring
                  they live with dignity and security.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-white/70 p-8 rounded-2xl shadow border border-amber-200">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Our Approach
          </h2>
          <p className="text-[#4B1E00]/90 leading-relaxed text-justify">
            Our approach combines compassion with action. We work closely with
            volunteers, local communities, and well-wishers to identify real
            needs and deliver meaningful support. Transparency, accountability,
            and sustainability remain at the core of all our initiatives.
          </p>

          <p className="mt-4 text-[#4B1E00]/90 leading-relaxed text-justify">
            Every initiative, whether large or small, is guided by the belief
            that collective efforts can bring lasting change.
          </p>
        </section>

        {/* CLOSING */}
        <section className="bg-gradient-to-b from-amber-50 to-white p-10 rounded-2xl shadow border border-amber-200 text-center">
          <HandHeart size={42} className="mx-auto text-amber-600 mb-4" />
          <p className="text-lg md:text-xl font-medium text-[#4B1E00]">
            Our work is a reflection of our values — compassion, service,
            and humanity in action.
          </p>

          <p className="mt-4 text-[#4B1E00]/80">
            With your support and participation, we continue to serve society
            with dedication and love.
          </p>

          <div className="mt-6 tracking-wide text-amber-700 font-semibold">
            सेवा • करुणा • मानवता
          </div>
        </section>

      </div>
    </section>
  );
}
