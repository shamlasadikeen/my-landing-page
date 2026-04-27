"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black px-6 text-white"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="relative z-10 animate-[fadeInUp_1s_ease-out]">
          <span className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-sm text-red-400">
            Premium Car Experience
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Drive the Future with <br />
            <span className="text-red-500">Power, Luxury</span> and Style
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Discover premium vehicles built for performance, comfort, and
            elegance. From city drives to long journeys, Velora Motors delivers
            the perfect ride.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cars"
              className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
            >
              Explore Cars
            </a>

            <a
              href="#booking"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              View Offers
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (CAR IMAGE) */}
        <div className="relative z-10 flex justify-center animate-[fadeIn_1.2s_ease-out]">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury sports car"
            className="w-full max-w-2xl rounded-2xl object-cover shadow-2xl transition duration-500 hover:scale-[1.03]"
          />
        </div>

      </div>
    </section>
  );
}