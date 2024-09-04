import React from "react";
import github from "../assets/github.png";

const Projects = () => {
  return (
    <div
      className="flex w-screen justify-center items-center bg-white"
      id="projects"
    >
      <div className="flex w-[1920px] h-[1000px] bg-black">
        <div className="flex flex-col h-full w-full">
          <div className="grid grid-cols-4 w-full h-1/2">
            <div className="flex flex-col relative justify-end bg-ge bg-cover group ">
              <div className="flex absolute z-10 w-full h-1/5 bottom-20 bg-white items-center justify-center font-roxborough text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:bottom-[350px]">
                Medical Equipment Detection in ICU
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 p-10 text-2xl ">
                <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-justify">
                  <div className="flex gap-2 text-sm">
                    <div className="bg-black text-white p-1 px-2">YOLOv5</div>
                    <div className="bg-black text-white p-1 px-2">Deep Learning</div>
                  </div>
                  This project focuses on detecting medical equipment in ICU
                  settings using advanced computer vision techniques to enhance
                  patient care and operational efficiency.
                </div>
                <a
                  href="https://www.github.com/dineshram0212"
                  className="absolute bottom-10 flex items-center gap-2 font-darkergrotesque text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <div>View on GitHub</div>
                  <img className="h-[20px]" src={github} alt="GitHub" />
                </a>
              </div>
            </div>

            <div className="flex flex-col relative justify-end bg-robarm bg-cover group ">
              <div className="flex absolute z-10 w-full h-1/5 bottom-20 bg-white items-center justify-center font-roxborough text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:bottom-[350px]">
              AI-driven Robotic Arm for FrontDesk 
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 p-10 text-2xl ">
                <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-justify">
                  <div className="flex gap-2 text-sm">
                    <div className="bg-black text-white p-1 px-2">YOLOv5</div>
                    <div className="bg-black text-white p-1 px-2">Deep Learning</div>
                  </div>
                  This project focuses on detecting medical equipment in ICU
                  settings using advanced computer vision techniques to enhance
                  patient care and operational efficiency.
                </div>
                <a
                  href="https://www.github.com/dineshram0212"
                  className="absolute bottom-10 flex items-center gap-2 font-darkergrotesque text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <div>View on GitHub</div>
                  <img className="h-[20px]" src={github} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="flex flex-col relative justify-end bg-cane bg-cover group ">
              <div className="flex absolute z-10 w-full h-1/5 bottom-20 bg-white items-center justify-center font-roxborough text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:bottom-[350px]">
              Smart Cane for Visually Impaired
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 p-10 text-2xl ">
                <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-justify">
                  <div className="flex gap-2 text-sm">
                    <div className="bg-black text-white p-1 px-2">YOLOv5</div>
                    <div className="bg-black text-white p-1 px-2">Deep Learning</div>
                  </div>
                  This project focuses on detecting medical equipment in ICU
                  settings using advanced computer vision techniques to enhance
                  patient care and operational efficiency.
                </div>
                <a
                  href="https://www.github.com/dineshram0212"
                  className="absolute bottom-10 flex items-center gap-2 font-darkergrotesque text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <div>View on GitHub</div>
                  <img className="h-[20px]" src={github} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="flex bg-white justify-center items-center font-roxborough text-5xl">
              <div className="text-5xl">Projects</div>
            </div>
          </div>
          <div className="grid grid-cols-4 w-full h-1/2">
          <div className="flex flex-col relative justify-end bg-kgraph bg-cover group ">
              <div className="flex absolute z-10 w-full h-1/5 bottom-20 bg-white items-center justify-center font-roxborough text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:bottom-[350px]">
                ML Based Knowledge Graph Generator
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 p-10 text-2xl ">
                <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-justify">
                  <div className="flex gap-2 text-sm">
                    <div className="bg-black text-white p-1 px-2">YOLOv5</div>
                    <div className="bg-black text-white p-1 px-2">Deep Learning</div>
                  </div>
                  This project focuses on detecting medical equipment in ICU
                  settings using advanced computer vision techniques to enhance
                  patient care and operational efficiency.
                </div>
                <a
                  href="https://www.github.com/dineshram0212"
                  className="absolute bottom-10 flex items-center gap-2 font-darkergrotesque text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <div>View on GitHub</div>
                  <img className="h-[20px]" src={github} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="flex flex-col relative justify-end bg-twitter bg-cover group ">
              <div className="flex absolute z-10 w-full h-1/5 bottom-20 bg-white items-center justify-center font-roxborough text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:bottom-[350px]">
              Hate Speech Detection in Twitter
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 p-10 text-2xl ">
                <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-justify">
                  <div className="flex gap-2 text-sm">
                    <div className="bg-black text-white p-1 px-2">YOLOv5</div>
                    <div className="bg-black text-white p-1 px-2">Deep Learning</div>
                  </div>
                  This project focuses on detecting medical equipment in ICU
                  settings using advanced computer vision techniques to enhance
                  patient care and operational efficiency.
                </div>
                <a
                  href="https://www.github.com/dineshram0212"
                  className="absolute bottom-10 flex items-center gap-2 font-darkergrotesque text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <div>View on GitHub</div>
                  <img className="h-[20px]" src={github} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="flex flex-col relative justify-end bg-yta bg-cover group ">
              <div className="flex absolute z-10 w-full h-1/5 bottom-20 bg-white items-center justify-center font-roxborough text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:bottom-[350px]">
              YouTube Channel Analysis
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 p-10 text-2xl ">
                <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-justify">
                  <div className="flex gap-2 text-sm">
                    <div className="bg-black text-white p-1 px-2">YOLOv5</div>
                    <div className="bg-black text-white p-1 px-2">Deep Learning</div>
                  </div>
                  This project focuses on detecting medical equipment in ICU
                  settings using advanced computer vision techniques to enhance
                  patient care and operational efficiency.
                </div>
                <a
                  href="https://www.github.com/dineshram0212"
                  className="absolute bottom-10 flex items-center gap-2 font-darkergrotesque text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <div>View on GitHub</div>
                  <img className="h-[20px]" src={github} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="flex flex-col relative justify-end bg-portfolio bg-cover group ">
              <div className="flex absolute z-10 w-full h-1/5 bottom-20 bg-white items-center justify-center font-roxborough text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:bottom-[350px]">
              Website Portfolio
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 p-10 text-2xl ">
                <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4 text-justify">
                  <div className="flex gap-2 text-sm">
                    <div className="bg-black text-white p-1 px-2">YOLOv5</div>
                    <div className="bg-black text-white p-1 px-2">Deep Learning</div>
                  </div>
                  This project focuses on detecting medical equipment in ICU
                  settings using advanced computer vision techniques to enhance
                  patient care and operational efficiency.
                </div>
                <a
                  href="https://www.github.com/dineshram0212"
                  className="absolute bottom-10 flex items-center gap-2 font-darkergrotesque text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <div>View on GitHub</div>
                  <img className="h-[20px]" src={github} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
