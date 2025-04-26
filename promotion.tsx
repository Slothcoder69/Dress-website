import React from "react";

const Promotion =()=>{
    return <div className="body-font mb-[30px] mt-[30px]">
        {
            /*
            Heading
            */
        }
        <div className="text-center mb-10">
            <h1 className="text-myBlackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
              Our Promotion
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
            </div>
          </div>
            {/*Promotion Starts Here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl">
                {/*1st child*/}
<div className="hero h-[25rem] promo-1 rounded-xl" >
  <div className="hero-overlay bg-opacity-68 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get upto <span className="text-myorange">60% </span>off</h1>
      <p className="scroll-m-20 text-base font-medium text-myWhite tracking-tight mt-2 ">
        Flash Sale, get upto 60% offthe season variant.
      </p>
    </div>
  </div>
</div>
                {/*2nd child*/}
                <div className="hero h-[25rem] promo-2 rounded-xl" >
  <div className="hero-overlay bg-opacity-68 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get upto <span className="text-myorange">30% </span>off</h1>
      <p className="scroll-m-20 text-base font-medium text-myWhite tracking-tight mt-2 ">
        Flash Sale, get upto 30% offthe New Jewellry Arrival
      </p>
    </div>
  </div>
</div>
            </div>
    </div>;
}
export default Promotion;