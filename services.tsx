import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <section className="body-font mb-8 mt-8">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-myBlackhead scroll-m-20 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              Our Services
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myorange" />
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Free Delivery */}
            <div className="group p-4 flex flex-col text-center items-center bg-white shadow-md rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <Image
                  src="/pictures/van.png"
                  alt="Delivery"
                  width={100}
                  height={100}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-myBlackhead text-lg font-bold lg:text-xl mb-2 group-hover:text-myorange duration-300">
                  Free Delivery
                </h2>
                <p className="group-hover:text-myorange duration-300 text-myBlackpara text-sm sm:text-base font-medium tracking-tight">
                  Free Delivery on Order Above $690
                </p>
              </div>
            </div>
            {/* Customer Service */}
            <div className="group p-4 flex flex-col text-center items-center bg-white shadow-md rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <Image
                  src="/pictures/customserv.jpg"
                  alt="Customer Service"
                  width={100}
                  height={100}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-myBlackhead text-lg font-bold lg:text-xl mb-2 group-hover:text-myorange duration-300">
                  24/7 Customer Service
                </h2>
                <p className="group-hover:text-myorange duration-300 text-myBlackpara text-sm sm:text-base font-medium tracking-tight">
                  For Queries and Questions feel free to contact.
                </p>
              </div>
            </div>
            {/* Money Back Guarantee */}
            <div className="group p-4 flex flex-col text-center items-center bg-white shadow-md rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <Image
                  src="/pictures/money.png"
                  alt="Money Back Guarantee"
                  width={100}
                  height={100}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-myBlackhead text-lg font-bold lg:text-xl mb-2 group-hover:text-myorange duration-300">
                  Money Back Guarantee
                </h2>
                <p className="group-hover:text-myorange duration-300 text-myBlackpara text-sm sm:text-base font-medium tracking-tight">
                  Get Money Back Guarantee on Damaged Products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
