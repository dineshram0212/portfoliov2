import React from "react";
import top from "../assets/gotop.png";
import X from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import medium from "../assets/medium.png";

import tab from "../assets/arrow.png";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-end items-center w-screen h-screen bg-black bg-cover overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col  items-center justify-end w-[1920px] h-[1000px]">
        <div className="relative flex w-full h-[85%] bg-black text-white p-20 overflow-hidden">
          <div className="flex flex-col h-full w-1/2 items-start">
            <div className="flex flex-col text-2xl gap-1 font-darkergrotesque">
              <div>Bengaluru, India</div>
              <div>dineshramdsml@gmail.com</div>
              <div>+91 9360232068</div>
            </div>
          </div>
          <div className="flex flex-col h-full w-1/2 ">
            <div className="flex w-full justify-end">
              <a href="#landing" className="text-2xl font-roxborough">
                got to top
              </a>
            </div>
            {/* <div className="flex flex-col h-1/3 text-4xl underline underline-offset-4 gap-5 pt-20">
              <a href="" className="flex gap-2 items-baseline">X <img src={tab} className="h-[16px]" alt="" /></a>
              <a href="" className="flex gap-2 items-baseline">github <img src={tab} className="h-[16px]" alt="" /></a>
              <a href="" className="flex gap-2 items-baseline">linkedin <img src={tab} className="h-[16px]" alt="" /></a>
              <a href="" className="flex gap-2 items-baseline">medium <img src={tab} className="h-[16px]" alt="" /></a>
            </div> */}
            <div className="flex flex-col w-full items-start text-4xl font-light gap-24 p-20 pt-24 pl-32">
              <div className="relative group flex items-center">
                <a href="" className="flex gap-2 items-baseline">
                  <img src={X} className="h-[30px] invert" alt="X Icon" />
                </a>
                <div className="absolute flex items-center left-full ml-8 text-6xl opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-600 ease-in-out">
                  <div className="flex items-center gap-4">
                    <div className="w-max">X.COM</div>
                    <img src={tab} alt="Tab Icon" className="invert h-[30px]"/>
                  </div>
                </div>
              </div>

              <div className="relative group flex items-center">
                <a href="" className="flex gap-2 items-baseline">
                  <img
                    src={github}
                    className="h-[30px] invert"
                    alt="GitHub Icon"
                  />
                </a>
                <div className="absolute flex items-center left-full ml-8 text-6xl opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-600 ease-in-out">
                  <div className="-z-10 flex items-center gap-4">
                    <div className="w-max">GITHUB.COM</div>
                    <img src={tab} alt="Tab Icon" className="invert h-[30px]"/>
                  </div>
                </div>
              </div>

              <div className="relative group flex items-center">
                <a href="" className="flex gap-2 items-baseline">
                  <img
                    src={linkedin}
                    className="h-[30px] invert"
                    alt="LinkedIn Icon"
                  />
                </a>
                <div className="absolute flex items-center left-full ml-8 text-6xl opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-600 ease-in-out">
                  <div className="flex items-center gap-4">
                    <div className="w-max">LINKEDIN.COM</div>
                    <img src={tab} alt="Tab Icon" className="invert h-[30px]"/>
                  </div>
                </div>
              </div>

              <div className="relative group flex items-center">
                <a href="" className="flex gap-2 items-baseline">
                  <img
                    src={medium}
                    className="h-[30px] invert"
                    alt="Medium Icon"
                  />
                </a>
                <div className="absolute flex items-center left-full ml-8 text-6xl opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-600 ease-in-out">
                  <div className="flex items-center gap-4">
                    <div className="w-max">MEDIUM.COM</div>
                    <img src={tab} alt="Tab Icon" className="invert h-[30px]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-[60px] text-white font-roxborough font-extrabold text-[140px] h-max w-max animate-marquee">
            <span className="mr-8 h-max">
              lets connect • lets connect • lets connect • lets connect • lets
              connect • lets connect • lets connect • lets connect •
            </span>
            <span className="mr-8 h-max">
              lets connect • lets connect • lets connect • lets connect • lets
              connect • lets connect • lets connect • lets connect •
            </span>
          </div>
        </div>
        <div className="flex relative w-full h-[15%] bg-white items-center justify-center font-lora text-xl">
          <div>&copy; 2024 DINESH RAM R</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
