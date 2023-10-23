import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Images } from "../../Images/Images";
import "./carrusel.css";

const Carrusel = () => {
  const items = [
    <img src={Images.carrusel_1} alt="Imagen 1" />,
    <img src={Images.carrusel_2} alt="Imagen 2" />,
    <img src={Images.carrusel_3} alt="Imagen 3" />,
    <img src={Images.carrusel_4} alt="Imagen 4" />,
    <img src={Images.carrusel_5} alt="Imagen 5" />,
    <img src={Images.carrusel_6} alt="Imagen 6" />,
    <img src={Images.carrusel_7} alt="Imagen 7" />,
  ];
  const responsive = {
    0: { items: 1 }, 
    768: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <>
      <div className="container-carrusel">
        <AliceCarousel
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
          buttonsDisabled={true}
        />
      </div>
    </>
  );
};

export default Carrusel;
