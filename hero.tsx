import React from "react";
import { MailOpen } from "lucide-react"
import { Button } from "./button";
 

const Hero=()=>{
    return <div className="m-[5px]">
        <div
  className="hero min-h-[80vh] bg-fixed bg-center bg-no-repeat "
  style={{
     backgroundImage: "url(/pictures/woman.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Futristic <span className="text-mydarkblue">Clothes</span></h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
        Upgrade  your Wardrobe with sleek and stylish apparels
      </p>
      <Button className="mr-2 h-6 w-25 hover:bg-black hover:text-mygold outline outline-offset-2 outline-1 group hover:rounded-3xl duration-300 hover:outline-white">
      <MailOpen className="group-hover:animate-bounce"/> Shop now
    </Button>
    </div>
  </div>
</div>
    </div>;
}
export default Hero;