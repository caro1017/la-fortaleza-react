import { Images } from "../../images/Images";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CarrouselSection.css";

const CarrouselSection = () => {
  const images = [
    Images.carrusel_1,
    Images.carrusel_2,
    Images.carrusel_3,
    Images.carrusel_4,
    Images.carrusel_5,
    Images.carrusel_6,
    Images.carrusel_7,
  ];

  return (
    <>
      <div className="container-carrusel">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CarrouselSection;
