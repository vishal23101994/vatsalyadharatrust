import { Mail, Phone, MapPin, HeartHandshake } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FFF3CC] via-[#FFF8E7] to-white px-6 py-24">

      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,200,120,0.25),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto space-y-20">

        {/* HERO */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-5 text-[#4B1E00]">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-[#4B1E00]/80 leading-relaxed">
            Reach out to us for service, support, volunteering,
            <br className="hidden md:block" />
            or meaningful collaboration
          </p>
        </header>

        {/* INTRO CARD */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-amber-200 text-center">
            <p className="text-lg leading-relaxed text-[#4B1E00]/90">
              At <strong>Vatsalya Dhara Trust</strong>, we believe every
              conversation carries the power to inspire service and change.
              Whether you wish to help, seek help, or simply connect —
              we welcome you with open hearts.
            </p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="grid md:grid-cols-2 gap-10">

          {/* PHONE */}
          <div className="group bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-amber-200 shadow-lg text-center transition hover:shadow-2xl">
            <Phone size={42} className="mx-auto mb-4 text-green-600 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold mb-3">Call Us</h3>
            <p className="text-[#4B1E00]/80 mb-4">
              Available for support & emergencies
            </p>
            <div className="space-y-2 font-medium">
              <a href="tel:+919910987666" className="block hover:text-amber-700">
                +91 99109 87666
              </a>
              <a href="tel:+919810900699" className="block hover:text-amber-700">
                +91 98109 00699
              </a>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="group bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-amber-200 shadow-lg text-center transition hover:shadow-2xl">
            <MapPin size={42} className="mx-auto mb-4 text-rose-600 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-semibold mb-3">Visit Us</h3>
            <p className="text-[#4B1E00]/80 text-sm leading-relaxed">
              Vatsalya Bhawan, P-75, Street No. 5,
              <br />
              Bihari Colony Extension, Bihari Colony
              <br />
              Shahdara, Delhi – 110032
            </p>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-amber-200">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Send Us a Message
            </h2>

            <form className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-amber-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-amber-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-amber-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 md:col-span-2"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="border border-amber-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 md:col-span-2"
              />

              <div className="md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  className="
                    inline-flex items-center gap-2
                    bg-gradient-to-r from-amber-500 to-amber-600
                    text-white
                    px-10 py-3
                    rounded-full
                    font-semibold
                    shadow-lg
                    hover:shadow-xl
                    hover:scale-105
                    transition
                  "
                >
                  <HeartHandshake size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* CLOSING */}
        <footer className="text-center">
          <p className="text-lg text-[#4B1E00]/90">
            Together, every small step creates a wave of compassion.
          </p>
          <div className="mt-3 tracking-wide text-amber-700 font-semibold">
            सेवा • करुणा • मानवता
          </div>
        </footer>

      </div>
    </section>
  );
}
