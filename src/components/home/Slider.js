import React from "react";
import OwlCarousel from "react-owl-carousel";

import SlidersData from "../../data/SliderData";
import Button from "../common-ui/Button";

const Slider = () => {

  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: false,
    // autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true
    // navText: ['next','prev']
  };

  const SliderDetail = ({ sliderData }) => {
    const { itemCaptionFisrtLine, itemCaptionSecondLine, img } = sliderData;
    return (
      <div className="item">
        <img src={img} className="img-responsive" alt="" />
        <div className="item-caption">
          <div className="item-caption-inner">
            <div className="item-caption-wrap">
              <h2>
                {itemCaptionFisrtLine}
                <br />
                {itemCaptionSecondLine}
              </h2>
              <Button className="btn-white" path="/">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="main-slide main-slide-boxed">
      <div className="container">
        <OwlCarousel
          className="owl-carousel main-demo second-demo"
          {...options}
        >
          {SlidersData.length &&
            SlidersData.map((sliderData) => (
              <SliderDetail sliderData={sliderData} key={sliderData.id} />
            ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Slider;
