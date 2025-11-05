import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Resources />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
