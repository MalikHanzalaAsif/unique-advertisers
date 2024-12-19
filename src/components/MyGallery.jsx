import { useState } from "react";

// Lightbox gallery
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import { Images } from "./ListImages";
// Images
import ReviewShotOne from "/images/services/casual-dress.webp";
import ReviewShotTwo from "/images/services/find-your-style-component.webp";
import ReviewShotThree from "/images/services/review-shot-3.png";
import ReviewShot from "/images/services/review-shot-2.png";

const fallbackPhotos = [
  {
    src: ReviewShotOne,
    width: 500,
    height: 400,
  },
  {
    src: ReviewShotTwo,
    width: 500,
    height: 400,
  },
  {
    src: ReviewShotThree,
    width: 500,
    height: 400,
  },
  {
    src: ReviewShot,
    width: 500,
    height: 400,
  },
  {
    src: ReviewShotOne,
    width: 500,
    height: 400,
  },
  {
    src: ReviewShotTwo,
    width: 500,
    height: 400,
  },
  {
    src: ReviewShotThree,
    width: 500,
    height: 400,
  },
  {
    src: ReviewShot,
    width: 500,
    height: 400,
  },
];

const MyGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const handleClick = (e) => {
    console.log("clicked index: " + e.index);
    console.log("Photos: " + e.index);
    console.log("aaa: " + photos);
    // console.log(photos[e.index]);
    setSelectedPhoto(photos ? photos[e.index] : e.index);
    setLightBoxOpen(true);
  };

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos ? photos : fallbackPhotos}
        onClick={(index) => handleClick(index)}
      />
      <Lightbox
        open={lightBoxOpen}
        close={() => setLightBoxOpen(false)}
        // slides={selectedPhoto ? [selectedPhoto] : []}
        slides={photos ? photos : fallbackPhotos}
      />
    </>
  );
};

export default MyGallery;
