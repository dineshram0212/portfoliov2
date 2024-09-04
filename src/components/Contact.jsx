import React from "react";
import greek from "../assets/greekcontact.jpg";
import X from "../assets/X.png";
import medium from "../assets/medium.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contact = () => {
  return (
    <div
      className="flex items-end justify-center w-screen h-screen bg-black"
      id="contact"
    >
      <div className=" flex flex-col w-[1920px] h-[980px] text-white">
        <div className="relative flex w-full h-[45%] justify-between p-14">
          <div className="flex flex-col gap-8">
            <div className="text-6xl font-roxborough font-bold">
              lets connect
            </div>
            <div className="flex flex-col h-full gap-5 justify-between">
              <div className="flex flex-col font-darkergrotesque text-3xl gap-1">
                <div className="flex gap-1">
                  <div>email me@</div>
                  <div>dineshramdsml@gmail.com</div>
                </div>
                <div>Bengaluru, India</div>
              </div>
              <div className="flex invert gap-20 ">
                <a
                  className="h-[30px] opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href=""
                >
                  <img className="h-[30px]" src={linkedin} alt="" />
                </a>
                <a
                  className="h-[30px] opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href=""
                >
                  <img className="h-[30px]" src={github} alt="" />
                </a>
                <a
                  className="h-[30px] opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href=""
                >
                  <img className="h-[30px]" src={medium} alt="" />
                </a>
                <a
                  className="h-[30px] opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href=""
                >
                  <img className="h-[30px]" src={X} alt="" />
                </a>
              </div>
            </div>
          </div>
          <a
            href="#landing"
            className="font-roxborough text-2xl h-max w-max hover:italic"
          >
            go to top
          </a>
          <div className="absolute bottom-5 right-5 font-darkergrotesque">
            <div>&copy; 2024 / DINESH RAM</div>
          </div>
        </div>
        <div className="w-full h-[55%] bg-contactbg bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Contact;
