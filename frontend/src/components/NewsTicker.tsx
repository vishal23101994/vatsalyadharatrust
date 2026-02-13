"use client";

export default function NewsTicker() {
  const messages = [
    "🌼 Vatsalya Dhara Trust — Serving Humanity with Compassion & Care",
    "🍲 1,00,000+ Meals Served through Annadaan Seva Initiatives",
    "🚑 24/7 Ambulance Service Supporting Emergency Medical Needs",
    "📚 Free Education & Book Distribution for Underprivileged Children",
    "🐄 Gau Seva & Animal Care Programs Promoting Compassion for All Living Beings",
    "💛 Join Our Mission — Your Donation Creates Real Impact",
  ];

  return (
    <div className="group relative w-full overflow-hidden bg-gradient-to-r from-[#4B1E00] via-[#5C2A00] to-[#4B1E00] border-y border-[#FFD97A]/40 py-2 select-none">
      
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#4B1E00] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#4B1E00] to-transparent z-10" />

      {/* Track */}
      <div
        className="
          animate-jm-marquee
          group-hover:[animation-play-state:paused]
          flex w-max gap-12 whitespace-nowrap
          text-[#FFD97A] text-sm md:text-base font-semibold tracking-wide
          drop-shadow-[0_0_6px_rgba(255,217,122,0.6)]
          will-change-transform
        "
      >
        {[...Array(2)].map((_, idx) => (
          <div key={`ticker-dup-${idx}`} className="flex items-center gap-12">
            {messages.map((msg, i) => (
              <span key={`msg-${idx}-${i}`}>{msg}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
