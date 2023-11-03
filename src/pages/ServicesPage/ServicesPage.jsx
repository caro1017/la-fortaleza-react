import { Images } from "../../Images/Images";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";
import CarrouselSection from "../../section/CarrouselSection/CarrouselSection";
import TabsComponent from "../../components/TabsBar/TabsComponent/TabsComponent";
import SeparatorSection from "../../section/SeparatorSection/SeparatorSection";
import VideoSection from "../../section/VideoSection/VideoSection";
import Gallery from "../../components/Gallery/Gallery";
import "./ServicesPage.css";

const photos = [
  Images.gallery_1_1,
  Images.gallery_1_2,
  Images.gallery_1_3,
  Images.gallery_1_4,
  Images.gallery_1_5,
  Images.gallery_1_6,
  Images.gallery_1_7,
];

const ServicesPage = () => {
  const colorGreen = "#057F2A";

  return (
    <>
      <header>
        <HeaderSection src={Images.servicesImgHeader} title="Servicios" />
      </header>
      <main>
        <Title color={colorGreen} title="Servicios" linePosition="both" />
        <CarrouselSection />
        <TabsComponent />
        <SeparatorSection src={Images.separatorServices} />
        <VideoSection textButtonVideo="Alojamiento" href="/Reservas" />
        <div className="container-gallery-services">
          <Gallery photos={photos} />
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
