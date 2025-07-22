import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Benefits from "@/components/Benefits";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatIs />
      <Benefits />
      <Terms />
      <Footer />
    </div>
  );
};

export default Index;
