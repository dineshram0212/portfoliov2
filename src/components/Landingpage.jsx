import React, {useState, useEffect} from "react";
import name from "../assets/name.svg";

const Landingpage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dimmingOpacity = Math.min(scrollPosition / 300, 1); // Gradual opacity change



  return (
    <div className="flex items-center justify-center w-screen h-screen font-roxborough" id="landing">
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
  
      <div className="relative flex flex-col  w-[1920px] h-[1000px] p-10 overflow-y-auto" style={{ zIndex: 2 }}>
        <div className="flex h-1/4 w-full justify-end">
          <div className="flex flex-col gap-2 h-max w-max text-right text-xl">
            <a className="hover:italic transition-all" href="#about">about</a>
            <a className="hover:italic transition-all" href="#profile">profile</a>
            <a className="hover:italic transition-all" href="#projects">projects</a>
            <a className="hover:italic transition-all" href="#contact">contacts</a>
          </div>
        </div>

        <div className="flex flex-col h-3/4 w-full justify-end gap-28">
          <div className="flex justify-between">
            <div className="flex items-end border-b-[1px] pb-3 border-black mb-8">
              <div className="text-4xl">Hi, I’m&nbsp;</div>
              <div className="text-8xl font-amsterdam-four">Dinesh Ram</div>
            </div>
            <div className="flex flex-col text-right justify-end">
              <div className="border-black border-b-[1px] text-4xl pb-3">
                an AI Engineer
              </div>
              <div className="flex text-xl pt-2">
                <div>Currently Working for&nbsp;</div>
                <div className="text-gray-700">Edsols Innovations Private Limited</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-10 text-3xl">
              <a href="https://www.medium.com" className="hover:italic hover:underline">medium</a>
              <a href="https://www.linkedin.com" className="hover:italic hover:underline">linkedin</a>
            </div>
            <div>
              <button className="text-2xl p-3 border-[1px] border-black hover:bg-black hover:text-white transition-all">
                resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
