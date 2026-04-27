export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 px-6 py-4 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">Velora Motors</h1>

            <div className="hidden gap-6 md:flex">
        <a href="#home" className="text-gray-300 transition hover:text-white">
          Home
        </a>
        <a href="#cars" className="text-gray-300 transition hover:text-white">
          Cars
        </a>
        <a href="#about" className="text-gray-300 transition hover:text-white">
          About
        </a>
        <a href="#booking" className="text-gray-300 transition hover:text-white">
          Booking
        </a>
        <a href="#contact" className="text-gray-300 transition hover:text-white">
          Contact
        </a>
      </div>

              <a
          href="#booking"
          className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}