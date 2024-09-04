import React from "react";
import aboutimg from "../assets/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center w-screen h-screen  bg-white text-white font-roxborough overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center bg-black w-[1880px] h-[950px] rounded-3xl">
        <div className="flex justify-end w-full h-1/4 p-7">
          <div className="flex flex-col gap-2 h-max w-max text-right text-xl">
            <a className="hover:italic transition-all" href="#profile">profile</a>
            <a className="hover:italic transition-all" href="#projects">projects</a>
            <a className="hover:italic transition-all" href="#contact">contacts</a>
          </div>
        </div>
        <div className="flex relative w-full h-[90%] justify-center overflow-hidden rounded-3xl">
        <div className="flex absolute w-max h-full items-end -bottom-20 right-0">
            <img
              className="w-[400px]"
              src={aboutimg}
            />
          </div>
          <div className="flex w-full h-full justify-start pt-10 p-20">
            <div className="text-4xl w-1/3">about me</div>
            <div className="text-4xl w-1/3 text-justify">
              I'm all about diving into the world of AI, constantly pushing the
              boundaries to solve problems in innovative ways. With a background
              in machine learning and a knack for natural language processing,
              I'm on a mission to make technology work smarter for us all.
              Whether it's fine-tuning algorithms or digging deep into data, I'm
              all in. Let's explore the possibilities together!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
