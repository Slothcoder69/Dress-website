"use client";
import React from"react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from "./bestsellingcard";
import { useAppSelector } from "../../app/store/hooks";

const FeaturedProducts = ()=>{
  {/**My data */}
  const Gestsell= useAppSelector((state)=>state.products);

  // const Gestsell=[
  //   {
  //     src:"/pictures/t-shirt1.jpeg" ,
  //     alt:"White T-Shirt",
  //     title:"White Printed Tee",
  //     description:"Best Quality t-shirt for B*tches",
  //     price:150,
  //     category:"Top",
  //     slug:"Whitess T-shirt",
  //    },
  //    {
  //      src:"/pictures/t-shirt2.jpeg" ,
  //      alt:" T-Shirt",
  //      title:" Printed Tee",
  //      description:"Best Quality t-shirt for B*tches",
  //      price:180,
  //      category:"t-shirt",
  //      slug:" TTT-shirt",
  //    },
  //    {
  //     src: "/pictures/hat.jpeg",
  //     alt: "Fashion Hat",
  //     title: "Classic Hat",
  //     description: "Stylish hat for all seasons",
  //     price: 180,
  //     category: "Accessories",
  //     slug: "hat",
  //   },
  //   {
  //     src:"/pictures/t-shirt1.jpeg" ,
  //     alt:"White T-Shirt",
  //     title:"White Printed Tee",
  //     description:"Best Quality t-shirt for B*tches",
  //     price:150,
  //     category:"Top",
  //     slug:"Whitess T-shirt",
  //    },
  //    {
  //      src:"/pictures/t-shirt2.jpeg" ,
  //      alt:" T-Shirt",
  //      title:" Printed Tee",
  //      description:"Best Quality t-shirt for B*tches",
  //      price:180,
  //      category:"t-shirt",
  //      slug:" TTT-shirt",
  //    },
  //    {
  //     src: "/pictures/hat.jpeg",
  //     alt: "Fashion Hat",
  //     title: "Classic Hat",
  //     description: "Stylish hat for all seasons",
  //     price: 180,
  //     category: "Accessories",
  //     slug: "hat",
  //   },
  //   {
  //     src:"/pictures/t-shirt1.jpeg" ,
  //     alt:"White T-Shirt",
  //     title:"White Printed Tee",
  //     description:"Best Quality t-shirt for B*tches",
  //     price:150,
  //     category:"Top",
  //     slug:"Whitess T-shirt",
  //    },
  //    {
  //      src:"/pictures/t-shirt2.jpeg" ,
  //      alt:" T-Shirt",
  //      title:" Printed Tee",
  //      description:"Best Quality t-shirt for B*tches",
  //      price:180,
  //      category:"t-shirt",
  //      slug:" TTT-shirt",
  //    },
  //    {
  //     src: "/pictures/hat.jpeg",
  //     alt: "Fashion Hat",
  //     title: "Classic Hat",
  //     description: "Stylish hat for all seasons",
  //     price: 180,
  //     category: "Accessories",
  //     slug: "hat",
  //   },
  


  // ]
    {/**Carosel settings */}

   
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
          
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,

              arrows:false,
            }
          }
        ]
      };
    return   (
        <div className="mb-[30px] mt-[30px]">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-myBlackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize text-center">
              Featured Products
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
            </div>
          </div>
    
          {/* Carousel */}
          <Slider {...settings}>
            {Gestsell.map((item:any, i) => (
              <div key={i} className="flex justify-center items-center">
                <BestSellingCard
                  src={item.imge[0]}
                  alt={item.title}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  slug={item.slug}
                  discount={item.discount}
                />
              </div>
            ))}
          </Slider>
        </div>
      );
    };
    
    export default FeaturedProducts;