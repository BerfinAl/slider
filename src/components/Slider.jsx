import BackgroundVideo from "./BackgroundVideo";
import ImageSlider from "./ImageSlider";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

export default function Slider() {

  function scrollToImages() {
    const images = document.querySelector(".images-wrapper");
    images.scrollIntoView();
  }

  return (
    <>
      <div className="wrapper">
        <BackgroundVideo scrollToImages={scrollToImages} />

        <ImageSlider images={[img1, img2, img3, img4]} />
      </div>
    </>
  );
}
