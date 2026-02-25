import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookingClick={openBooking} />
      <Hero onBookingClick={openBooking} />
      <Specialities />
      <Contact onBookingClick={openBooking} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default Index;
