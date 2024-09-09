import React from "react";
import github from "../assets/github.png";

const ProjectCard = ({ title, description, tags, bgClass, githubLink }) => (
  <div
    className={`flex flex-col relative justify-end ${bgClass} bg-cover group h-[300px] sm:h-[350px] lg:h-[500px]`}
  >
    <div className="flex absolute z-10 w-full h-[20%] top-[30%] lg:top-[60%] bg-white items-center justify-center font-darkergrotesque text-lg sm:text-2xl border-x-[1px] transition-all duration-500 ease-in-out group-hover:top-[0px] lg:group-hover:top-[10%]">
      {title}
    </div>
    <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-95 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 lg:p-6 text-sm sm:text-base lg:text-lg">
      <div className="flex flex-col gap-2 text-black font-darkergrotesque opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-2 text-justify text-xl">
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
          {tags.map((tag) => (
            <div key={tag} className="bg-black text-white p-1 px-2">
              {tag}
            </div>
          ))}
        </div>
        {description}
      </div>
      <a
        href={githubLink} target="_blank"
        className="absolute bottom-2 sm:bottom-4 flex items-center gap-2 font-darkergrotesque text-lg sm:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out hover:underline"
      >
        <div>View on GitHub</div>
        <img className="h-[16px] sm:h-[20px]" src={github} alt="GitHub" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div
      className="flex w-screen justify-center items-center bg-white"
      id="projects"
    >
      <div className="flex w-full max-w-[1920px] h-auto bg-black">
        <div className="flex flex-col h-full w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-auto">
            <ProjectCard
              title="Medical Equipment Detection in ICU"
              description="This project focuses on detecting medical equipment in ICU settings using advanced computer vision techniques to enhance patient care and operational efficiency."
              tags={["Industry Project", "YOLOv5", "Deep Learning"]}
              bgClass="bg-ge"
              githubLink="https://www.github.com/dineshram0212"
            />
            <ProjectCard
              title="AI-driven Robotic Arm for FrontDesk"
              description="This project features an AI-enhanced robotic arm designed for front desk operations, capable of automatically retrieving and returning luggage to customers based on facial recognition."
              tags={["Computer Vision", "ROS"]}
              bgClass="bg-robarm"
              githubLink="https://www.github.com/dineshram0212"
            />
            <ProjectCard
              title="Smart Cane for Visually Impaired"
              description="This project integrates a camera into a cane, using LSTM to capture and describe the environment for visually impaired individuals."
              tags={["NLP","Deep Learning"]}
              bgClass="bg-cane"
              githubLink="https://www.github.com/dineshram0212"
            />

            <div className="relative flex flex-row bg-white justify-between items-center font-roxborough text-4xl sm:text-5xl order-first lg:order-last p-5">
              {/* Navigation Links */}
              <div className="flex flex-col gap-2 text-right text-lg lg:text-xl order-last lg:order-first lg:absolute lg:top-10 lg:right-10">
                <a className="hover:italic transition-all" href="#about">
                  about
                </a>
                <a className="hover:italic transition-all" href="#profile">
                  profile
                </a>
                <a className="hover:italic transition-all" href="#contact">
                  contacts
                </a>
              </div>
              {/* Title Section */}
              <div className="lg:ml-0 ml-14 text-center flex-1">Projects</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-auto ">
            <ProjectCard
              title="ML Based Knowledge Graph Generator"
              description="This project uses NeuralCoref to analyze word relationships in a paragraph and generate an interactive knowledge graph that can be zoomed, panned, and dynamically explored."
              tags={["NLP", "Deep Learning",]}
              bgClass="bg-kgraph"
              githubLink="https://github.com/dineshram0212/LTTS-knowledge-graph"
            />
            <ProjectCard
              title="Hate Speech Detection in Twitter"
              description="This project scrapes tweets from a specified Twitter user ID or URL and analyzes each tweet. It uses a machine learning classifier to detect and categorize hate speech content."
              tags={["Machine Learning", "Web Scrapping"]}
              bgClass="bg-twitter"
              githubLink="https://github.com/dineshram0212/hateDetectectionApp"
            />
            <ProjectCard
              title="YouTube Channel Analysis"
              description="This project utilizes Pandas, Matplotlib, and the YouTube API to scrape channel statistics. It processes and visualizes the data, offering insights into the channel’s performance."
              tags={["Pandas", "Data Visualization"]}
              bgClass="bg-yta"
              githubLink="https://github.com/dineshram0212/youtube-analysis"
            />
            <ProjectCard
              title="Website Portfolio"
              description="This personal project is a website portfolio built using React and Tailwind CSS. It showcases skills, projects, and professional experience in a modern and responsive design."
              tags={["React", "Tailwind CSS"]}
              bgClass="bg-portfolio"
              githubLink="https://github.com/dineshram0212/portfoliov2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
