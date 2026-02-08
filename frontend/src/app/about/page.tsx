export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#FFF8E7] px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* TITLE */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#4B1E00]">
            About Vatsalya Dhara Trust
          </h1>
          <p className="text-lg md:text-xl text-[#4B1E00]/80">
            A flow of compassion, service, and humanity
          </p>
        </header>

        {/* INTRO */}
        <section className="bg-white/70 backdrop-blur p-8 rounded-2xl shadow border border-amber-200">
          <p className="text-lg leading-relaxed text-[#4B1E00]/90 text-justify">
            <strong>Vatsalya Dhara Trust</strong> is a non-profit humanitarian organization
            established with the vision of serving society through compassion, empathy,
            and selfless service. The word <em>“Vatsalya”</em> represents unconditional love
            and care, while <em>“Dhara”</em> signifies a continuous flow — together symbolizing
            an ever-flowing stream of love and service for humanity.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-[#4B1E00]/90 text-justify">
            Guided by moral values, spiritual ethics, and social responsibility, the Trust
            works tirelessly to uplift the underprivileged, support the vulnerable, and
            nurture a more compassionate society.
          </p>
        </section>

        {/* VISION & MISSION */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-[#4B1E00]/90 leading-relaxed text-justify">
              To build a society rooted in humanity, equality, and compassion — where
              every individual lives with dignity, access to basic needs, and the
              opportunity to grow irrespective of social or economic barriers.
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-sm">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-[#4B1E00]/90 leading-relaxed text-justify">
              To serve humanity through sustainable initiatives in education, healthcare,
              animal welfare, disaster relief, and social upliftment — driven by the
              principles of selfless service and moral responsibility.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-white/70 p-8 rounded-2xl shadow border border-amber-200">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Our Philosophy
          </h2>
          <p className="text-[#4B1E00]/90 leading-relaxed text-justify">
            At Vatsalya Dhara Trust, we believe that true service goes beyond charity.
            It is about standing beside those in need, understanding their struggles,
            and empowering them with care, respect, and long-term support.
          </p>

          <p className="mt-4 text-[#4B1E00]/90 leading-relaxed text-justify">
            Inspired by Indian cultural values and the spirit of <em>“Seva”</em>, our
            work emphasizes compassion for all living beings — humans and animals alike.
            We strive to transform lives not just through material support, but through
            kindness, dignity, and hope.
          </p>
        </section>

        {/* KEY AREAS */}
        <section>
          <h2 className="text-3xl font-serif font-semibold mb-6 text-center">
            Areas of Work
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Education & Youth Empowerment",
                desc:
                  "Providing access to education for underprivileged children, supporting learning resources, and nurturing youth through value-based guidance and leadership development.",
              },
              {
                title: "Healthcare & Medical Support",
                desc:
                  "Organizing free medical camps, health checkups, medicine distribution, and healthcare awareness for economically weaker sections and senior citizens.",
              },
              {
                title: "Ambulance & Emergency Services",
                desc:
                  "Ensuring timely medical assistance through ambulance services, especially during emergencies, accidents, and critical situations.",
              },
              {
                title: "Animal Welfare & Gau Seva",
                desc:
                  "Promoting compassion towards animals through cow shelter support, feeding initiatives, and care for injured or abandoned animals.",
              },
              {
                title: "Food Distribution & Annadaan",
                desc:
                  "Regular food distribution drives to feed the hungry, homeless, and needy, ensuring no one sleeps hungry.",
              },
              {
                title: "Support for Elderly & Orphans",
                desc:
                  "Providing shelter, care, emotional support, and essential resources for senior citizens and orphaned children.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4B1E00]/90 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="bg-gradient-to-b from-amber-50 to-white p-8 rounded-2xl shadow border border-amber-200 text-center">
          <p className="text-lg md:text-xl font-medium text-[#4B1E00]">
            Vatsalya Dhara Trust is not just an organization —
            <br />
            it is a movement of hearts committed to humanity.
          </p>

          <p className="mt-4 text-[#4B1E00]/80">
            Together, through compassion and service, we strive to create
            a more caring and inclusive world.
          </p>

          <div className="mt-6 tracking-wide text-amber-700 font-semibold">
            सेवा • करुणा • मानवता
          </div>
        </section>

      </div>
    </section>
  );
}
