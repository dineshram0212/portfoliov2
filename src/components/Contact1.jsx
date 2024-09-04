import React from "react";
import top from "../assets/gotop.png";

import address from "../assets/location.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

import X from "../assets/X.png";
import medium from "../assets/medium.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen bg-white bg-cover overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col relative items-center justify-end w-[1920px] h-[1000px]">
        <div className="flex h-[75%] justify-end w-full bg-black text-white font-roxborough">
          <div className="flex w-1/2 p-10">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="w-[25px]">
                  <img className="h-[20px]" src={address} alt="" />
                </div>
                <div>Bengaluru, India</div>
              </div>
              <div className="flex gap-3">
                <div className="w-[25px]">
                  <img className="h-[20px]" src={phone} alt="" />
                </div>
                <div>+91 9360232068</div>
              </div>
              <div className="flex gap-3">
                <div className="w-[25px]">
                  <img className="h-[20px]" src={mail} alt="" />
                </div>
                <div>dineshramdsml@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full p-10 ">
            <div className="flex pb-3 text-4xl justify-end border-b-[1px]">
              mail me
            </div>
            <div className="flex flex-col gap-10 h-full">
              <form className="flex flex-col w-full h-full gap-10" action="">
                <div className="flex justify-between gap-10 pt-10 ">
                  <input
                    className="bg-transparent w-1/2 border-b-[1px] text-3xl p-2 focus:ring-0 focus:outline-none"
                    placeholder="Name"
                  ></input>
                  <input
                    className="bg-transparent w-1/2 border-b-[1px] text-3xl p-2 focus:ring-0 focus:outline-none"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="w-full h-full">
                  <textarea
                    className="w-full h-full bg-transparent border-[1px] text-3xl p-5 focus:ring-0 focus:outline-none resize-none"
                    name=""
                    id=""
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div className="flex justify-end w-full">
                  <button className="text-xl px-4 py-3 border-[1px] w-max h-max hover:text-black hover:bg-white transition-all">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex h-[15%] w-full items-center justify-between">
          <div className="p-10 text-black tracking-widest text-xl font-roxborough">
            &copy; 2024 DINESH RAM
          </div>
          <div className="flex gap-16 p-10">
            <a className="h-[30px]" href="">
              <img className="h-[30px]" src={linkedin} alt="" />
            </a>
            <a className="h-[30px]" href="">
              <img className="h-[30px]" src={github} alt="" />
            </a>
            <a className="h-[30px]" href="">
              <img className="h-[30px]" src={medium} alt="" />
            </a>
            <a className="h-[30px]" href="">
              <img className="h-[30px]" src={X} alt="" />
            </a>
          </div>
        </div>
        <div class="absolute w-[700px] h-[700px] -bottom-60 -left-36 flex items-center justify-center">
          <svg
            class="absolute w-full h-full animate-spintext"
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text
              className="font-roxborough text-[39px]"
              font-weight="bold"
              fill="white"
            >
              <textPath href="#circlePath" startOffset="0%">
                get in touch • get in touch •
              </textPath>
            </text>
          </svg>
        </div>{" "}
        <a
          href="#landing"
          className="flex absolute h-[50px] hover:h-[70px] transition-all w-[70px] items-center justify-center rounded-t-full bg-black bottom-0"
        >
          <img className="h-[25px]" src={top} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
