"use client";

type CarModalProps = {
  isOpen: boolean;
  onClose: () => void;
  car: {
    name: string;
    img: string;
    description: string;
  } | null;
};

export default function CarModal({ isOpen, onClose, car }: CarModalProps) {
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6">
      <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#111] p-6 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 text-sm hover:bg-white hover:text-black"
        >
          Close
        </button>

        <img
          src={car.img}
          alt={car.name}
          className="h-72 w-full rounded-xl object-cover"
        />

        <h3 className="mt-6 text-3xl font-bold">{car.name}</h3>
        <p className="mt-4 text-gray-300">{car.description}</p>

        <button
          onClick={onClose}
          className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Book This Car
        </button>
      </div>
    </div>
  );
}