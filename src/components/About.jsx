import React from "react";
import aboutimg from "../assets/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center w-screen h-screen bg-white text-white font-roxborough overflow-hidden p-5"
    >
      <div className="flex flex-col items-center justify-center bg-black max-w-[1880px] max-h-[950px] w-full h-full rounded-3xl">
        {/* Navigation Links */}
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

        {/* Main Content */}
        <div className="flex w-full h-[80%] lg:h-[90%] justify-center overflow-hidden rounded-3xl">
          <div className="flex flex-col lg:flex-row w-full h-full justify-start gap-6 lg:gap-0">
            {/* About Me Title */}
            <div className="text-2xl md:text-3xl lg:text-4xl w-full lg:w-1/3 mb-4 lg:mb-0  p-5 lg:p-10">
              about me
            </div>

            {/* Description */}
            <div
              className="text-justify lg:w-1/3 pr-4 md:pr-6 font-lora p-4 sm:p-6 md:p-8 lg:p-10"
              style={{
                fontSize: "clamp(1rem, 1vw + 0.5rem, 1.5rem)",
                lineHeight: "1.6",
              }}
            >
              I'm all about diving into the world of AI, constantly pushing the
              boundaries to solve problems in innovative ways. With a background
              in machine learning and a knack for natural language processing,
              I'm on a mission to make technology work smarter for us all.
              Whether it's fine-tuning algorithms or digging deep into data, I'm
              all in. Let's explore the possibilities together!
            </div>

            {/* Image Section */}
            <div className="flex relative lg:w-1/3 w-full h-full overflow-hidden">
              <div className="flex absolute w-[80%] h-[80%] justify-end lg:-bottom-10 -bottom-2 right-0">
                <img
                  className="max-w-full max-h-full object-cover rounded-lg"
                  src={aboutimg}
                  alt="About Me"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
