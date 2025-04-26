import React from "react";
import Image from "next/image";
import { MailOpen } from "lucide-react"
import { Button } from "./button";
import { FaCartShopping, FaHeart} from "react-icons/fa6";
import BestSellingCard from "./bestsellingcard";

const GestSelling = () => {
  const Gestsell=[
    {
      src:"/pictures/t-shirt1.jpeg" ,
      alt:"White T-Shirt",
      title:"White Printed Tee",
      description:"Best Quality t-shirt for B*tches",
      price:150,
      category:"Top",
      slug:"Top1"
    },
    {
      src:"/pictures/t-shirt2.jpeg" ,
      alt:" T-Shirt",
      title:" Printed Tee",
      description:"Best Quality t-shirt for B*tches",
      price:180,
      category:"Top",
      slug:" TTT-shirt",
      discount:50,
     },
     {
      src: "/pictures/hat.jpeg",
      alt: "Fashion Hat",
      title: "Classic Hat",
      description: "Stylish hat for all seasons",
      price: 180,
      category: "Accessories",
      slug: "hat",
    },

  ]
  return (
    <div className="body-font mb-[30px] mt-[30px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">

        </h1>
        <div className="flex mt-2 justify-center">
          {/* <div className="w-16 h-1 rounded-full bg-myorange inline-flex" /> */}
        </div>
      </div>



      {/* Best Selling Products Here */}
      <div className="flex flex-wrap justify-center gap-5">
        {Gestsell.map((items,i) => (
          <BestSellingCard src={items.src} alt={items.alt} title={items.title} description={items.description} price={items.price} category={items.category} slug={items.slug} discount={items.discount} />
        ))}
      </div>
    </div>
  );
};

export default GestSelling;
