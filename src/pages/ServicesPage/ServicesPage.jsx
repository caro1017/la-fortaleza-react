import { Images } from "../../Images/Images";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";

const ServicesPage = () => {
  return (
    <>
      <HeaderSection src={Images.servicesImgHeader} title="Servicios" />
      <Title color="#057F2A" title="Servicios" linePosition="both" />
    </>
  );
};

export default ServicesPage;
