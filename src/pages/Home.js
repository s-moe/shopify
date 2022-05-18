import React from "react";
import "./home.scss";
import watchImage from "../assets/watch.jpg";
import bodyOilImage from "../assets/bodyOil.jpg";

export default function Home() {
  const watchAltText =
    "Two white modern-looking watches one with a black face and the other shows a white back.";
  const bodyOilAltText =
    "St Barth's I'm Fabulous body oil in a clear container and light brown liquid laying next to a white packaged box.";
  const header = "Your exclusive virtual business coach";
  const description =
    "You wear a lot of hats when it comes to your business. Coming up with new product ideas doesn't have to be one of them. That's why we made Ideaify.";
  const subheading =
    "Where Shopify merchants come for new product inspiration to grow their businesses. Explore Ideaify's powerful AI capabilities below.";
  const homeClassName = "home";
  const leftClassName = "left";
  const wrapperClassName = "wrapper";
  const rightClassName = "right";
  const imageLeftClassName = "imgLeft";
  const imageRightClassName = "imgRight";
  return (
    <div className={homeClassName} id={homeClassName}>
      <div className={leftClassName}>
        <div className={wrapperClassName}>
          <h1>{header}</h1>
          <p>{description}</p>
          <p>{subheading}</p>
        </div>
      </div>
      <div className={rightClassName}>
        <div className={imageLeftClassName}>
          <img src={watchImage} alt={watchAltText} />
        </div>

        <div className={imageRightClassName}>
          <img src={bodyOilImage} alt={bodyOilAltText} />
        </div>
      </div>
    </div>
  );
}
