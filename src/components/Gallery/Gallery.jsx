/* eslint-disable react/prop-types */
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
