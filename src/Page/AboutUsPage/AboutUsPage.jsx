import { Images } from "../../Images/Images";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

const AboutUsPage = () => {
  const titleColor = "#FF5D02"
  return (
    <>
      <Header src={Images.aboutUsImgHeader} title="Nosotros" />
      <Title color={titleColor} title="Nosotros"/>
    </>
  );
};

export default AboutUsPage;
