import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Jumbotron() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    draggable: true,
  };
  return (
    <div className="relative pt-[80px] ml-[394px] mr-[10px]">
      <div className="rounded-md">
        <Slider {...settings}>
          <img
            src="https://p4.wallpaperbetter.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg"
            className="w-full h-[460px] object-cover rounded-md"
          />
          <img
            src="https://cdn.wallpapersafari.com/53/79/ajwtby.jpg"
            className="w-full h-[460px] object-cover rounded-md"
          />
          <img
            src="https://image.tmdb.org/t/p/original/k3gPbv74t3CN6hv56dyek54ipEj.jpg"
            className="w-full h-[460px] object-cover rounded-md"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Jumbotron;
