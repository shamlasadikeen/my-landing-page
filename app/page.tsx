import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedCars from "../Components/FeaturedCars";
import Features from "../Components/Features";
import BookingForm from "../Components/BookingForm";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Features />
      <BookingForm />
      <Footer />
    </main>
  );
}