/* eslint-disable react/prop-types */
import "./CardsIcon.css";
import {  CardActionArea, CardContent } from "@mui/material";

const CardsIcon = ({ icon, title, text }) => {
  return (
    <>
      <div className="container-card-icon cards-icon">
        <CardActionArea>
          <CardContent>
            <span>{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </CardContent>
        </CardActionArea>
      </div>
    </>
  );
};

export default CardsIcon;
