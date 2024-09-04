import React from "react";
import aboutimg from "../assets/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center w-screen h-screen bg-white text-white font-roxborough overflow-hidden p-2"
    >
      <div className="flex flex-col items-center justify-center bg-black max-w-[1880px] max-h-[950px] w-full h-full rounded-3xl">
        <div className="flex justify-end w-full h-[20%] p-4 lg:p-7">
          <div className="flex flex-col gap-2 h-max w-max text-right text-lg lg:text-xl">
            <a className="hover:italic transition-all" href="#profile">
              profile
            </a>
            <a className="hover:italic transition-all" href="#projects">
              projects
            </a>
            <a className="hover:italic transition-all" href="#contact">
              contacts
            </a>
          </div>
        </div>

        <div className="flex  w-full h-[80%] lg:h-[90%] justify-center overflow-hidden rounded-3xl">
          <div className="flex flex-col lg:flex-row w-full h-full justify-start pt-6 lg:pt-10 pl-6 lg:pl-20">
            <div className="text-2xl md:text-3xl lg:text-4xl w-full lg:w-1/3 mb-4 lg:mb-0">
              about me
            </div>
            <div className="text-justify lg:w-1/3 pr-6" style={{ fontSize: 'clamp(1rem, 1vw + 1rem, 2rem)' }}
            >
              I'm all about diving into the world of AI, constantly pushing the
              boundaries to solve problems in innovative ways. With a background
              in machine learning and a knack for natural language processing,
              I'm on a mission to make technology work smarter for us all.
              Whether it's fine-tuning algorithms or digging deep into data, I'm
              all in. Let's explore the possibilities together!
            </div>
            <div className="flex relative lg:w-1/3 overflow-hidden w-full h-full">
              <div className="flex absolute w-full h-full justify-end lg:-bottom-20 -bottom-2 right-0">
                <img className="max-w-full max-h-full justify-stretch" src={aboutimg} alt="About Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
