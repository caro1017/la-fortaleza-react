import { Images } from "../../images/Images";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";

const AboutUsPage = () => {
  return (
    <>
      <HeaderSection  src={Images.aboutUsImgHeader} title="Nosotros" />
      <Title color="#FF5D02" title="Nosotros" linePosition="both" />
    </>
  );
};

export default AboutUsPage;
