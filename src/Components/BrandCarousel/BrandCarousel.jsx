import React from "react";
import "./BrandCarousel.css";

const BrandCarousel = ({ logos }) => {
  return (
    <div className="scrolling-banner">
      <div className="banner-track">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index + 1}`} />
        ))}
        {/* Duplicate logos for seamless scrolling */}
        {logos.map((logo, index) => (
          <img key={`${index}-duplicate`} src={logo} alt={`Brand ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
