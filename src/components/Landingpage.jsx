import React, { useState, useEffect } from "react";
import name from "../assets/name.svg";

const Landingpage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dimmingOpacity = Math.min(scrollPosition / 300, 1); // Gradual opacity change

  return (
    <div
      className="flex items-center justify-center  w-screen h-screen font-roxborough overflow-hidden"
      id="landing"
    >
      {/* Fixed Background Image Layer */}
      <div
        className="fixed inset-0 bg-photobw bg-cover bg-center bg-no-repeat"
        style={{ zIndex: -1 }} // Ensures background is behind all content
      ></div>

      {/* Content Container with White Transition Effect */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-500 ease-in-out`}
        style={{
          opacity: dimmingOpacity, // Dim based on scroll, calculated elsewhere
          zIndex: 1,
        }}
      ></div>

      <div
        className="relative flex flex-col max-w-[1920px] max-h-[1000px] h-screen w-screen p-6 md:p-10 backdrop-blur-lg md:backdrop-blur-none"
        style={{ zIndex: 2 }}
      >
        <div className="flex h-1/4 w-full justify-end">
          <div className="flex flex-col gap-2 h-max w-max text-right text-lg md:text-xl">
            <a className="hover:italic hover:line-through" href="#about">
              about
            </a>
            <a className="hover:italic hover:line-through" href="#profile">
              profile
            </a>
            <a className="hover:italic hover:line-through" href="#projects">
              projects
            </a>
            <a className="hover:italic hover:line-through" href="#contact">
              contacts
            </a>
          </div>
        </div>

        <div className="flex flex-col h-3/4 w-full justify-between md:justify-end gap-16 md:gap-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-20 gap-10 md:w-auto w-full">
            <div className="flex flex-row items-start md:items-end border-b-[1px] pb-2 md:pb-3 border-black mb-4 md:mb-8">
              <div className="text-xl md:text-4xl">Hi, I’m&nbsp;</div>
              <div className="text-4xl md:text-8xl font-amsterdam-four">
                Dinesh Ram
              </div>
            </div>
            <div className="flex flex-col text-right justify-end md:w-auto w-full">
              <div className="border-black border-b-[1px] text-2xl md:text-4xl pb-2 md:pb-3">
                an AI Engineer
              </div>
              <div className="flex flex-col md:flex-row text-md md:text-xl pt-1 md:pt-2">
                <div>Currently Working for&nbsp;</div>
                <div className="md:text-gray-700 italic">
                  Edsols Innovations Private Limited
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="flex gap-6 md:gap-10 text-xl md:text-3xl">
              <a target="_blank"
                href="https://medium.com/@dineshramdsml"
                className="hover:italic hover:underline"
              >
                medium
              </a>
              <a target="_blank"
                href="https://www.linkedin.com/in/dineshram-r/"
                className="hover:italic hover:underline"
              >
                linkedin
              </a>
            </div>
            <div>
              <a target="_blank" href="https://drive.google.com/file/d/1hnfSKji71AFZOJn-NS-Aj_QsS7q1Z1tq/view?usp=sharing" className="text-lg md:text-2xl p-2 md:p-3 border-[1px] border-black hover:bg-black hover:text-white transition-all">
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
