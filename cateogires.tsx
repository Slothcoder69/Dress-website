import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="body-font mb-[30px] mt-[30px]">
      <div className="text-center mb-10">
        <h1 className="text-myBlackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* Categories Starts from here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <a href={"/Tops"}>
          <Image
            src="/pictures/overcoat.jpeg" // Use a root-relative path
            alt="Overcoat"
            width={350}
            height={350}
            className="rounded-xl duration-500 group-hover:scale-125"
            />
          <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
          
            <h1 className="uppercase">Tops</h1>
          </div>
          <div className="block lg:hidden z-[100] absolute duration-500 bottom-2 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
            <h1 className="uppercase">Tops</h1>
          </div>
            </a>
        </div>
         {/* Category 2 */}
         <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <a href={"/tshirts"}>
          <Image
            src="/pictures/t-shirt.jpeg" // Use a root-relative path
            alt="T-shirts"
            width={350}
            height={350}
            className="rounded-xl duration-500 group-hover:scale-125"
            />
          <div className="absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
            <h1 className="uppercase">T-shirts</h1>
          </div>
          <div className="block lg:hidden z-[100] absolute duration-500 bottom-2 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
            <h1 className="uppercase">T-shirts</h1>
          </div>
            </a>
        </div>
         {/* Category 3 */}
         <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <a href={"/accessories"}>
          <Image
            src="/pictures/accessories.jpg" // Use a root-relative path
            alt="accessories"
            width={350}
            height={350}
            className="rounded-xl duration-500 group-hover:scale-125"
            />
          <div className="absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
            <h1 className="uppercase">Accessories</h1>
          </div>
          <div className="block lg:hidden z-[100] absolute duration-500 bottom-2 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
            <h1 className="uppercase">Accessories</h1>
          </div>
            </a>
        </div>
         {/* Category 4 */}
         <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <a href={"/Shoes"}>
          <Image
            src="/pictures/shoes.jpeg" // Use a root-relative path
            alt="shoes"
            width={350}
            height={350}
            className="rounded-xl duration-500 group-hover:scale-125"
            />
          <div className="absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
            <h1 className="uppercase">shoes</h1>
          </div>
          <div className="block lg:hidden z-[100] absolute duration-500 bottom-2 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackhead/70 text-center text-myWhite w-full">
            <h1 className="uppercase">Shoes</h1>
          </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
