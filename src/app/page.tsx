import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProp />
      <Services />
      <Industries />
      <Marquee />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
