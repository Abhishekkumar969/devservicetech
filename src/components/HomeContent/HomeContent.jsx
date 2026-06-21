import Hero from "../Hero/Hero";
import ClientsMarquee from "../ClientsMarquee/ClientsMarquee";
import AboutIntro from "../AboutIntro/AboutIntro";
import ProfessionalDesigners from "../ProfessionalDesigners/ProfessionalDesigners";
import ProudlyPatna from "../ProudlyPatna/ProudlyPatna";
import ServicesSplit from "../ServicesSplit/ServicesSplit";

export default function HomeContent({ city = "India" }) {
  return (
    <>
      <Hero city={city} />
      <ClientsMarquee />
      <AboutIntro city={city} />
      <ProfessionalDesigners />
      <ProudlyPatna city={city} />
      <ServicesSplit />
    </>
  );
}
