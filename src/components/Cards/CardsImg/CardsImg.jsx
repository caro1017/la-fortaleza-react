/* eslint-disable react/prop-types */
import FlotingButton from "../../FlotingButton/FlotingButton";
import AddIcon from "@mui/icons-material/Add";
import Text from "../../Text/Text";
import Title from "../../Title/Title";
import "./CardsImg.css";

const Cards = ({
  cardPosition,
  src,
  text,
  color,
  title,
  linePosition,
  srcImg1,
  srcImg2,
  srcImg3,
  href,
}) => {
  return (
    <>
      <div
        className={`container-card ${
          cardPosition === "right" ? "card-right" : "card-left"
        }`}
      >
        {/* Opcion para teenr la imagene al lado derecho */}
        {cardPosition === "left" && (
          <>
            <div className="container-info-card">
              <div className="card-left">
                <img src={src} alt="Imagen naturaleza" className="card-img" />
                <span className="circle-icon-card-left">
                  <div className="icon-card-left">
                    <FlotingButton
                      icon={<AddIcon />}
                      className="styled-icon-card-left"
                      href={href}
                    />
                  </div>
                </span>
              </div>

              <div className="container-info-text-card">
                <Title
                  color={color}
                  title={title}
                  linePosition={linePosition}
                />
                <Text text={text} color={color} />
              </div>
              {/* Condicional para mostrar las imagenes si estas son solicitadas en otro componente */}
              {srcImg1 || srcImg2 || srcImg3 ? (
                <div className="container-img-card">
                  {srcImg1 && <img src={srcImg1} alt="Imagen comida campo" />}
                  {srcImg2 && <img src={srcImg2} alt="Imagen comida campo" />}
                  {srcImg3 && <img src={srcImg3} alt="Imagen comida campo" />}
                </div>
              ) : null}
            </div>
          </>
        )}
        {/* Opcion para teenr la imagene al lado izquierdo */}
        {cardPosition === "right" && (
          <>
            <div className="container-info-card">
              <div className="container-info-text-card">
                <Title
                  color={color}
                  title={title}
                  linePosition={linePosition}
                />
                <Text text={text} color={color} />
                {/* Condicional para mostrar las imagenes si estas son solicitadas en otro componente */}
                {srcImg1 || srcImg2 || srcImg3 ? (
                  <div className="container-img-card">
                    {srcImg1 && <img src={srcImg1} alt="Imagen comida campo" />}
                    {srcImg2 && <img src={srcImg2} alt="Imagen comida campo" />}
                    {srcImg3 && <img src={srcImg3} alt="Imagen comida campo" />}
                  </div>
                ) : null}
              </div>

              <div className="card-right">
                <img src={src} alt="Imagen naturaleza" className="card-img" />
                <span className="circle-icon-card-right">
                  <div className="icon-card-right">
                    <FlotingButton
                      icon={<AddIcon />}
                      className="styled-icon-card-right"
                      href={href}
                    />
                  </div>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
