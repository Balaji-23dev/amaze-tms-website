"use client";

import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValueProp from "@/components/ValueProp";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CrossBorder from "@/components/CrossBorder";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ValueProp />
        <Services />
        <Stats />
        <CrossBorder />
        <Industries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
