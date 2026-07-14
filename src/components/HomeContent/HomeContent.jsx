import Hero from "../Hero/Hero";
import ClientsMarquee from "../ClientsMarquee/ClientsMarquee";
import AboutIntro from "../AboutIntro/AboutIntro";
import ProfessionalDesigners from "../ProfessionalDesigners/ProfessionalDesigners";
import ProudlyPatna from "../ProudlyPatna/ProudlyPatna";
import ServicesSplit from "../ServicesSplit/ServicesSplit";
import ServicesGrid from "../ServicesGrid/ServicesGrid";
import OurBrands from "../OurBrands/OurBrands";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import ShowcaseWebDesign from "../ShowcaseWebDesign/ShowcaseWebDesign";
import ShowcaseSoftware from "../ShowcaseSoftware/ShowcaseSoftware";
import ShowcaseGraphics from "../ShowcaseGraphics/ShowcaseGraphics";
import ShowcaseMarketing from "../ShowcaseMarketing/ShowcaseMarketing";
import Testimonials from "../Testimonials/Testimonials";
import CallToAction from "../CallToAction/CallToAction";
import ProcessSteps from "../ProcessSteps/ProcessSteps";
import StatsCounter from "../StatsCounter/StatsCounter";
import CoreValues from "../CoreValues/CoreValues";
import HomeFAQ from "../HomeFAQ/HomeFAQ";
import styles from "./HomeContent.module.css";

export default function HomeContent({ city = "India" }) {
  return (
    <>
      <Hero city={city} />
      <ClientsMarquee />
      
      {/* Moved up as requested */}
      <StatsCounter />
      <OurBrands />
      <ServicesSplit />
      <ServicesGrid />
      <FeaturedProjects />

      {/* "Our Strategic Digital Partner" section and below */}
      <AboutIntro city={city} />
      <ProfessionalDesigners />
      <ProudlyPatna city={city} />
      
      {/* Mega Showcase Sections with Ambient Fog */}
      <div className={styles.showcaseWrapper}>
        <div className={styles.ambientFog1}></div>
        <div className={styles.ambientFog2}></div>
        <div className={styles.ambientFog3}></div>
        
        <ShowcaseWebDesign />
        <ShowcaseSoftware />
        <ShowcaseGraphics />
        <ShowcaseMarketing />
      </div>

      <ProcessSteps />
      <CoreValues />
      <Testimonials />
      <HomeFAQ />
      <CallToAction />
    </>
  );
}
