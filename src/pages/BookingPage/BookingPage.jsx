import { Images } from "../../Images/Images";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";

const BookingPage = () => {
  return (
    <>
      <HeaderSection src={Images.bookingImgHeader} title="Reservas" />
      <Title color="#FF5D02" title="Reservas" linePosition="both" />
    </>
  );
};

export default BookingPage;
