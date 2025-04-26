"use client";
import React, { useState } from "react";
import Image from "next/image";

const Slugcomp = () => {
  const [path, setPath] = useState("");

  return (
    <div>
      {/* Main Image */}
      <Image
        alt="ecommerce"
        width={400}
        height={400} // Fixed the height to a realistic value
        src={path ? path : "/pictures/t-shirt1.jpeg"}
      />

      {/* Thumbnails */}
      <div className="flex items-center justify-evenly mx-auto mt-2">
        {[
          { src: "/pictures/woman.jpg", alt: "Tops" },
          { src: "/pictures/overcoat.jpeg", alt: "Tops" },
          { src: "/pictures/t-shirt1.jpeg", alt: "pants" },
        ].map((item, index) => (
          <div key={index} className="cursor-pointer w-16 h-16">
            <Image
              src={item.src}
              width={60}
              height={60}
              alt={item.alt}
              onClick={() => setPath(item.src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slugcomp;
