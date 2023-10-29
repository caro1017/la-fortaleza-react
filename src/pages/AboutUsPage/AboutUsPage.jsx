import { Images } from "../../Images/Images";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";
import CarrouselSection from "../../section/CarrouselSection/CarrouselSection";
import SeparatorSection from "../../section/SeparatorSection/SeparatorSection";
import Cards from "../../components/Cards/Cards";

const AboutUsPage = () => {
  const colorGreen = "#057F2A";
  const colorOrange = "#FF5D02";
  return (
    <>
      <header>
        <HeaderSection src={Images.aboutUsImgHeader} title="Nosotros" />
      </header>
      <main>
        <Title color={colorOrange} title="Nosotros" linePosition="both" />
        <CarrouselSection />
        <SeparatorSection src={Images.separatorUs} />
        <Cards
          title="MISION"
          linePosition="right"
          text="En La Fortaleza fomentamos la permacultura y el uso de nuestros espacios para vivir experiencias únicas en agroecoturismo, eventos educativos, sociales y corporativos, en un entorno natural, como estrategia para promover la concienciación ambiental."
          color={colorOrange}
          cardPosition="right"
          src={Images.cardUs_1}
          href="/Servicios"
        />
        <Cards
          title="VISION"
          linePosition="right"
          text="Posicionarnos para el 2025 como una de las fincas Agroecoturísticas y sostenibles más importantes a visitar en el Departamento de Arauca. Reconocida como ejemplo de sostenibilidad y protección del medio ambiente y la salud de las personas, fomentando el cultivo y consumo de productos ecológicos."
          color={colorGreen}
          cardPosition="left"
          src={Images.cardUs_2}
          href="/Servicios"
        />
        <Cards
          title="VALORES"
          linePosition="right"
          text="Innovación Honestidad Trabajo en equipo Conciencia medioambiental Responsabilidad Transparencia y confianza Sostenibilidad."
          color={colorOrange}
          cardPosition="right"
          src={Images.cardUs_3}
          href="/Servicios"
        />
         <SeparatorSection src={Images.separatorUs} />
      </main>
    </>
  );
};

export default AboutUsPage;
