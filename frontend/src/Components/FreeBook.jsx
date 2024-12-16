import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookdata from "../Bookdata.js";
import Slider from "react-slick";
import Card from "./Card.jsx";

const FreeBook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filterdata = bookdata.filter((book) => book.category === "free");
  console.log(filterdata);

  return (
    <>
      <div className="py-10 bg-white mt-10 md:mx-20 mx-4 px-2">
        <div>
          <h2 className="text-xl font-bold font-sans  text-black">
            free offered courses
          </h2>
          <p className="text-base font-semibold font-sans text-black mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            placeat totam rem aspernatur? Vitae, cumque.
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {filterdata.map((item) => (
              <Card item ={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
