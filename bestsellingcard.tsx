import React from "react";
import Image from "next/image";
import { MailOpen } from "lucide-react";
import { Button } from "./button";
import Link from 'next/link';
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
  id,
  discount,
}: {
  id: number,
  src: string,
  alt: string,
  title: string,
  description: string,
  price: number,
  category: string,
  slug: string,
  discount:number,
}) => {
  return (
    <div className="w-[350px] h-[43rem] mx-auto shadow-md rounded-xl group overflow-hidden"> {/* Increased height */}
      <Link href={`/${category}/${slug}`}>

        {/* Image Div */}
        <div className="block relative h-[25rem] mb-0 p-0"> {/* Increased image height */}

          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
            className="object-cover rounded-t-xl"
          />
        </div>
        <div className="p-7 mt-0 bg-white">
          {/* Typography Div */}
          <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 text-myBlackhead mb-5">
            {title}
          </h2>
          <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackpara mb-5 line-clamp-1">
            {description}
          </p>
          <div className="flex gap-4">
  {/* Original Price */}
  {price && (
    <p
      className={`
        mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead 
        line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-myorange/70"}
      `}
    >
      ${price.toFixed(2)}
    </p>
  )}

  {/* Discounted Price */}
  {discount > 0 && (
    <p className="mt-2 text-base font-semibold tracking-tight text-myBlackhead">
      ${discount > 0 ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2)}
    </p>
  )}
</div>
    
          

  
          
          
   </div>
      </Link>
      <div className="relative w-full h-16"> {/* Increased height for buttons */}
        {/* Right-aligned Button */}
        <Button className="group bg-myBlackhead hover:bg-transparent border border-myBlackhead text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight py-2 px-2 rounded-xl transition duration-300 absolute right-4">
          <FaCartShopping className="mr-2 h-4 w-4 group-hover:text-myorange transition duration-300 inline-block" />
          Add to cart
        </Button>

        {/* Left-aligned Button */}
        <Button className="group bg-mydarkblue hover:bg-mystrawberry duration-700  hover:bg-repeat-round border border-myBlackhead text-myWhite hover:text-mygold scroll-m-20 text-xs font-semibold tracking-tight py-2 transition absolute left-4 rounded-xl">
          Buy now
        </Button>
      </div>
    </div>
  );
}

export default BestSellingCard;
