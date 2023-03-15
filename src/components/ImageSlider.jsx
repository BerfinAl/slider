import { useState, useEffect } from "react";

import Indicator from "./Indicator";
import BackgroundVideo from "./BackgroundVideo";

export default function ImageSlider({ images = [], autoPlayTime = 3000 }) {
  const [currentSlide, setCurrentSlide] = useState(-1);

  function changeCurrentSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = currentSlide >= images.length - 1 ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      changeCurrentSlide();
    }, autoPlayTime);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const imgElements = images.map((img, i) => {
    return (
      <div
        className="slide-img"
        key={i}
        style={{
          backgroundImage: `url(${img})`,
          marginLeft: i === 0 ? `-${currentSlide * 100}vw` : 0,
        }}
      >
        <div className="slide-img-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            elit ac diam porta vehicula.
          </p>
          <button>Click</button>
        </div>
      </div>
    );
  });

  return (
    <div className="images-wrapper">
      {imgElements}
      <Indicator
        slides={images}
        currentSlide={currentSlide}
        changeCurrentSlide={changeCurrentSlide}
      />
    </div>
  );
}
