export default function Features() {
  return (
    <section id="cars" className="bg-[#111111] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Why Choose Velora Motors</h2>
          <p className="mt-4 text-gray-400">
            Built for drivers who demand more from every journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Luxury Design</h3>
            <p className="mt-3 text-gray-400">
              Sleek exteriors and premium interiors crafted for elegance and comfort.
            </p>
          </div>

           <div className="rounded-2xl border border-white/10 bg-black p-6 transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold">High Performance</h3>
            <p className="mt-3 text-gray-400">
              Powerful engines, smooth handling, and advanced driving technology.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-6 transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <h3 className="text-xl font-semibold">Trusted Support</h3>
            <p className="mt-3 text-gray-400">
              Dedicated customer service, easy financing, and reliable after-sales support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}