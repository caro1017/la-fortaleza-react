/* eslint-disable react/prop-types */
// Se utiliza el componente npm i react-photo-album
import PhotoAlbum from "react-photo-album";
import "./Gallery.css";

const Gallery = ({ photos }) => {
  return (
    <>
      <PhotoAlbum layout="rows" photos={photos} />
    </>
  );
};

export default Gallery;
