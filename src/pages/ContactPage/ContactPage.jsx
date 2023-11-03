import { Images } from "../../Images/Images";
import HeaderSection from "../../section/HeaderSection/HeaderSection";
import Title from "../../components/Title/Title";
import CardsIcon from "../../components/Cards/CardsIcon/CardsIcon";
import Gallery from "../../components/Gallery/Gallery";
import FormContact from "../../components/FormBar/FormContact/FormContact";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "./ContactPage.css";

const photos = [Images.gallery_2_1, Images.gallery_2_2, Images.gallery_2_3];

const ContactPage = () => {
  return (
    <>
      <header>
        <HeaderSection src={Images.contactImgHeader} title="Contactenos" />
      </header>
      <main>
        <Title color="#057F2A" title="Contactenos" linePosition="both" />

        <div className="container-contact">
          <div className="container-cards-icon">
            <CardsIcon
              icon={<PhoneAndroidIcon />}
              title="Celular"
              text="(+52) 311 8169087"
            />
            <CardsIcon
              icon={<WhatsAppIcon />}
              title="WhatsApp"
              text="(+52) 312 4026944"
            />
            <CardsIcon
              icon={<MailOutlineIcon />}
              title="Email"
              text="fincalafortalezaecobio@gmail"
            />
            <CardsIcon
              icon={<AccessTimeIcon />}
              title="Horario Atención"
              text="L - D 9am - 6pm"
            />
          </div>

          <div className="container-form-contact">

            <div className="container-gallery-contact">
              <div className="top-images">
                <Gallery photos={photos.slice(0, 2)} />
              </div>
              <div className="bottom-images">
                <Gallery photos={photos.slice(2, 4)} />
              </div>
            </div>

            <div className="container-form-contact-page">
              <FormContact />
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default ContactPage;
