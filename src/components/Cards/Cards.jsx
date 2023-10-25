/* eslint-disable react/prop-types */
import FlotingButton from "../FlotingButton/FlotingButton";
import AddIcon from "@mui/icons-material/Add";
import Text from "../Text/Text";
import "./Cards.css";
import Title from "../Title/Title";

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
}) => {
  return (
    <>
      <div
        className={`container-card ${
          cardPosition === "right" ? "card-right" : "card-left"
        }`}
      >
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
            </div>
          </>
        )}

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

                <div className="container-img-card">
                  <img src={srcImg1} alt="Imagen comida campo" />
                  <img src={srcImg2} alt="Imagen comida campo" />
                  <img src={srcImg3} alt="Imagen comida campo" />
                </div>
              </div>

              <div className="card-right">
                <img src={src} alt="Imagen naturaleza" className="card-img" />
                <span className="circle-icon-card-right">
                  <div className="icon-card-right">
                    <FlotingButton
                      icon={<AddIcon />}
                      className="styled-icon-card-right"
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
