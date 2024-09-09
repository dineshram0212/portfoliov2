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
      <div className="flex flex-col max-w-[1920px] max-h-[980px] h-full w-full text-white">
        <div className="relative flex lg:flex-row flex-col gap-5 w-full lg:h-[45%] h-[55%] justify-between p-14">
          <div className="flex flex-col gap-8">
            <div className="text-3xl md:text-4xl lg:text-6xl font-roxborough font-bold">
              lets connect
            </div>
            <div className="flex flex-col h-full gap-8 justify-between">
              <div className="flex flex-col font-darkergrotesque md:text-2xl lg:text-3xl gap-1">
                <div className="flex gap-1">
                  <div>email me@</div>
                  <div>dineshramdsml@gmail.com</div>
                </div>
                <div>Bengaluru, India</div>
              </div>
              <div className="flex invert gap-5 justify-center lg:gap-20 ">
                <a target="_blank"
                  className="flex items-center min-h-[20px] w-full h-full opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href=""
                >
                  <img
                    className="min-w-[20px] h-[20px] lg:h-[30px]"
                    src={linkedin}
                    alt="https://www.linkedin.com/in/dineshram-r/"
                  />
                </a>
                <a target="_blank"
                  className="flex items-center min-h-[20px] w-full h-full opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href="https://github.com/dineshram0212"
                >
                  <img
                    className="min-w-[20px] h-[20px] lg:h-[30px]"
                    src={github}
                    alt=""
                  />
                </a>
                <a target="_blank"
                  className=" flex items-center min-h-[20px] w-full h-full opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href="https://medium.com/@dineshramdsml"
                >
                  <img
                    className="min-w-[20px] h-[20px] lg:h-[30px]"
                    src={medium}
                    alt=""
                  />
                </a>
                <a target="_blank"
                  className="flex items-center min-h-[20px] w-full h-full opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                  href="https://x.com/dineshramdsml"
                >
                  <img className="min-w-[20px] h-[20px] lg:h-[30px]" src={X} alt="" />
                </a>
              </div>
            </div>
          </div>
          <a
            href="#landing"
            className="font-roxborough text-lg lg:text-2xl h-max w-max hover:italic"
          >
            go to top
          </a>
          <div className="absolute bottom-5 right-5 font-darkergrotesque">
            <div>&copy; 2024 / DINESH RAM</div>
          </div>
        </div>
        <div className="w-full lg:h-[55%] h-[45%] bg-contactbg bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Contact;
