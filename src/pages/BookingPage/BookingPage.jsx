import { Images } from "../../Images/Images";
import "./BookingPage.css";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";
import Gallery from "../../components/Gallery/Gallery";
import FormBooking from "../../components/FormBar/FormBooking/FormBooking";
import TabsComponent from "../../components/TabsBar/TabsComponent/TabsComponent";
import SeparatorSection from "../../section/SeparatorSection/SeparatorSection";

const photos = [Images.gallery_2_1, Images.gallery_2_2, Images.gallery_2_3];

const BookingPage = () => {
  const colorOrange = "#FF5D02";
  return (
    <>
      <header>
        <HeaderSection src={Images.bookingImgHeader} title="Reservas" />
      </header>
      <main>
        <Title color={colorOrange} title="Reservas" linePosition="both" />
        <div className="container-booking-section">
          <div className="container-gallery-section">
            <div className="top-images">
              <Gallery photos={photos.slice(0, 2)} />
            </div>
            <div className="bottom-images">
              <Gallery photos={photos.slice(2, 4)} />
            </div>
          </div>

          <div className="container-registro-form">
            <FormBooking />
          </div>
        </div>
        <SeparatorSection src={Images.separatorHome} />
        <div className="contenedor-services-booking">
          <TabsComponent />
        </div>
      </main>
    </>
  );
};

export default BookingPage;
