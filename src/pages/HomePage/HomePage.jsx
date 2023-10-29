import { Images } from "../../Images/Images";

import "./HomePage.css";

import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import CarrouselSection from "../../section/CarrouselSection/CarrouselSection";
import SeparatorSection from "../../section/SeparatorSection/SeparatorSection";
import VideoSection from "../../section/VideoSection/VideoSection";
import Cards from "../../components/Cards/Cards";

const HomePage = () => {
  const colorGreen = "#057F2A";
  const colorOrange = "#FF5D02";

  return (
    <>
      <header>
        <HeaderSection src={Images.homeImgHeader} />
      </header>
      <main>
        <Title
          color={colorGreen}
          title="Finca Agropecuaria"
          linePosition="both"
        />
        <Text
          color={colorGreen}
          textAlign="center"
          text="“Un Lugar para conectar con la Naturaleza”"
        />
        <CarrouselSection />
        <SeparatorSection src={Images.separatorHome} />
        <VideoSection textButtonVideo="Servicios" href="/Servicios"/>
        <Cards
          text="“Atención de alta calidad, con conocimiento del tema guiandote en una gran experiencia”"
          color={colorGreen}
          cardPosition="left"
          src={Images.cardHome_1}
          href="/Servicios"
        />
        <SeparatorSection src={Images.separatorHome} />
        <Cards
          text="“Una experiencia única llena de nuevos retos, conociendo un poco mas de nuestra tradición ”"
          color={colorOrange}
          cardPosition="right"
          src={Images.cardHome_2}
          srcImg1={Images.homeComida_1}
          srcImg2={Images.homeComida_2}
          srcImg3={Images.homeComida_3}
          href="/Servicios"
        />
      </main>
    </>
  );
};

export default HomePage;
