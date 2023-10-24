import { Images } from "../../images/Images";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";

const ContactPage = () => {
  return (
    <>
      <HeaderSection  src={Images.contactImgHeader} title="Contactenos" />
      <Title color="#057F2A" title="Contactenos" linePosition="both" />
    </>
  );
};

export default ContactPage;
