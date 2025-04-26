"use client"
import React from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { Button } from "./button";
import BestSellingCard from "./bestsellingcard";
import { useAppSelector } from "../../app/store/hooks";


const BestSelling = () => {
  const product= useAppSelector((state)=>state.products);
  const bestsell = product.slice(0, 3)
  // const bestsell = [
  //   {
  //     src: "/pictures/t-shirt1.jpeg",
  //     alt: "White T-Shirt",
  //     title: "White Printed Tee",
  //     description: "Best Quality t-shirt for B*tches",
  //     price: 150,
  //     category: "Top",
  //     slug: "White-T-shirt",
  //     discount:5
  //   },
  //   {
  //     src: "/pictures/t-shirt2.jpeg",
  //     alt: "T-Shirt",
  //     title: "Printed Tee",
  //     description: "Best Quality t-shirt for B*tches",
  //     price: 180,
  //     category: "T-shirt",
  //     slug: "T-shirt1",
  //     disount:30
      
  //   },
  //   {
  //     src: "/pictures/hat.jpeg",
  //     alt: "Fashion Hat",
  //     title: "Classic Hat",
  //     description: "Stylish hat for all seasons",
  //     price: 180,
  //     category: "Accessories",
  //     slug: "hat",
  //     discount:30
  //   },
  // ];

  return (
    <div className="body-font mb-12 mt-12 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="flex flex-wrap justify-center gap-5">
  {bestsell.length > 0 ? (
    bestsell.map((items: any, i) => (
      <BestSellingCard
        key={items.slug} // Use a unique identifier, like 'slug'
        src={items.imge[0]} // Assuming the property is 'image'
        alt={items.title}
        title={items.title}
        description={items.description}
        price={items.price}
        category={items.category}
        slug={items.slug}
        discount={items.discount}
      />
    ))
  ) : (
    <p className="text-center text-gray-600">No products available.</p>
  )}
</div>

    </div>
  );
};

export default BestSelling;