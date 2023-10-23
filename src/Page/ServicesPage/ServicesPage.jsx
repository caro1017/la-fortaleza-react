import { Images } from "../../Images/Images";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

const ServicesPage = () => {
  const titleColor = "#057F2A"
  return (
    <>
      <Header src={Images.servicesImgHeader} title="Servicios" />
      <Title color={titleColor} title="Servicios"/>
    </>
  );
};

export default ServicesPage;
