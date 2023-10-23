import { Images } from "../../Images/Images";
import "./homePage.css";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Carrusel from "../../components/Carrusel/Carrusel";

const HomePage = () => {
  const titleColor = "#057F2A";
  return (
    <>
      <Header src={Images.homeImgHeader} />
      <Title color={titleColor} title="Finca Agropecuaria" />
      <Text
        className="text-styled-home"
        text="“Un Lugar para conectar con la Naturaleza”"
      />
      <Carrusel />
    </>
  );
};

export default HomePage;
