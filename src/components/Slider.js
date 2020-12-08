import React, { useState } from "react";
import img1 from "../assets/Banner-img-1.jpg";
import img2 from "../assets/Banner-img-2.jpg";
import img3 from "../assets/Banner-img-3.jpg";
import img4 from "../assets/Banner-img-4.jpg";
import img5 from "../assets/Banner-img-5.jpg";
import { ImgComp } from "./ImgComp";

export const Slider = () => {
  const [x, setX] = useState(0);
  const slides = [img1, img2, img3, img4, img5];

  const goLeft = () => {
    if (x === 0) {
      setX((slides.length - 1) * -100);
    } else {
      setX(x + 100);
    }
  };

  const goRight = () => {
    if (x === -100 * (slides.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  return (
    <div className="slider__main">
      {slides.map((slide) => (
        <div
          className="slider__slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          <ImgComp src={slide} />
        </div>
      ))}
      <button onClick={goLeft} className="slider__btn left">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button onClick={goRight} className="slider__btn right">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};
