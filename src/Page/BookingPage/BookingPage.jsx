import { Images } from "../../Images/Images";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

const BookingPage = () => {
  const titleColor = "#FF5D02"
  return (
    <>
      <Header src={Images.bookingImgHeader} title="Reservas" />
      <Title color={titleColor} title="Reservas"/>
    </>
  );
};

export default BookingPage;
