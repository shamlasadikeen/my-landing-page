"use client";

import { useState } from "react";
import CarModal from "./CarModal";

export default function FeaturedCars() {
  const cars = [
    {
      name: "Porsche 911",
      img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
      description:
        "A premium sports car with iconic design, thrilling acceleration, and luxury comfort for every drive.",
    },
    {
      name: "BMW M4",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      description:
        "The BMW M4 combines precision handling, aggressive styling, and refined performance for true driving enthusiasts.",
    },
    {
      name: "Audi R8",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      description:
        "The Audi R8 delivers supercar looks, exceptional speed, and an unforgettable premium driving experience.",
    },
  ];

  const [selectedCar, setSelectedCar] = useState<null | (typeof cars)[0]>(null);

  return (
    <section id="cars" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Featured Cars</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]"
            >
              <img
                src={car.img}
                alt={car.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <button
                  onClick={() => setSelectedCar(car)}
                  className="mt-4 text-sm text-red-500 hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CarModal
        isOpen={!!selectedCar}
        onClose={() => setSelectedCar(null)}
        car={selectedCar}
      />
    </section>
  );
}