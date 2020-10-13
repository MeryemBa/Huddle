import React from "react";
import HeroSection from "../../component/hero-section/hero-section-comp";
import MainSection from "../../component/main-section/main-section-comp";
import Cta from "../../component/call-to-action/cta-comp";
import Footer from "../../component/footer/footer-comp";
import { data } from "./data";

function HomePage() {
  return (
    <>
      <HeroSection {...data.hero} />
      <MainSection features={data.features} />
      <Cta {...data.cta} />
      <Footer />
    </>
  );
}

export default HomePage;
