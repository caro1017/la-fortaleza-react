import { Images } from "../../Images/Images";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

const ContactPage = () => {
  const titleColor = "#057F2A"
  return (
    <>
      <Header src={Images.contactImgHeader} title="Contactenos" />
      <Title color={titleColor} title="Contactenos"  />
    </>
  );
};

export default ContactPage;
