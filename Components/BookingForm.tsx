"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.car) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        const whatsappNumber = "94771234567"; // change this

        const message = `Hello Velora Motors,
New Booking Request

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Car: ${form.car}
Date: ${form.date}
Message: ${form.message}`;

        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );

        setShowSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          car: "",
          date: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit booking");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="booking" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Book Your Dream Car
          </h2>
          <p className="mt-3 text-gray-400">
            Send your details and our team will contact you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#111] p-8 shadow-[0_0_40px_rgba(255,0,0,0.08)]"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl bg-black px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="rounded-xl bg-black px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              name="phone"
              placeholder="Phone *"
              value={form.phone}
              onChange={handleChange}
              className="rounded-xl bg-black px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />

            <select
              name="car"
              value={form.car}
              onChange={handleChange}
              className="rounded-xl bg-black px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Car *</option>
              <option value="Porsche 911">Porsche 911</option>
              <option value="BMW M4">BMW M4</option>
              <option value="Audi R8">Audi R8</option>
            </select>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded-xl bg-black px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 md:col-span-2"
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional Message"
            value={form.message}
            onChange={handleChange}
            className="mt-6 w-full rounded-xl bg-black px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-md">
          <div className="max-w-md rounded-2xl border border-white/10 bg-[#111] p-8 text-center shadow-[0_0_50px_rgba(255,0,0,0.2)]">
            <h3 className="text-2xl font-bold">Booking Sent!</h3>
            <p className="mt-3 text-gray-400">
              Thank you. Your booking request has been sent successfully.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}