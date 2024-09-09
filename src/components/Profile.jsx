import React from "react";
import bubble from "../assets/bubble.png";

const Profile = () => {
  return (
    <div
      className="flex items-center justify-center h-max w-screen lg:h-screen bg-white z-10 bg-cover overflow-hidden p-2 py-5"
      id="profile"
    >
      <div className="flex flex-col max-w-[1880px]  w-full h-full bg-gradbg bg-cover rounded-3xl overflow-hidden">
        <div className="flex h-[18%] font-roxborough text-2xl md:text-3xl lg:text-4xl items-center justify-between p-4 lg:p-10">
          <div className="text-white">Profile</div>
          <div className="flex flex-col gap-2 h-max w-max text-right text-lg lg:text-xl text-white">
            <a className="hover:italic transition-all" href="#about">
              about
            </a>
            <a className="hover:italic transition-all" href="#projects">
              projects
            </a>
            <a className="hover:italic transition-all" href="#contact">
              contacts
            </a>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col h-[80%] justify-center p-3 lg:p-10 gap-10">
          <div className="group relative flex flex-col lg:w-2/5 rounded-3xl p-5 lg:p-10 lg:pt-10 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-grad1 bg-cover transition-transform duration-500 ease-in-out group-hover:scale-150 rounded-3xl"></div>
            <div className="flex flex-col gap-3 relative z-10">
              <div className="font-darkergrotesque text-3xl">Experience</div>
              <div className="flex flex-col gap-5">
                <div className="font-roxborough text-2xl md:text-3xl lg:text-4xl">
                  Edsols Innovations Private Limited
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col font-lora gap-2">
                    <div className="flex lg:flex-row flex-col lg:gap-2 text-sm lg:text-xl items-baseline">
                      <div className="font-bold">Student Intern</div>{" "}
                      <div className="text-sm lg:text-lg"> October 2022</div>
                    </div>
                    <div className="flex text-sm lg:text-lg">
                      <ul className="list-disc list-inside">
                        <li>Created Data Science projects for students.</li>
                        <li>
                          Programmed AI projects on JetBot and Robotic arm to
                          execute diverse tasks.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col font-lora gap-2">
                    <div className="flex lg:flex-row flex-col lg:gap-2 text-sm lg:text-xl items-baseline">
                      <div className="font-bold">AI Developer Intern</div>{" "}
                      <div className="text-sm lg:text-lg"> July 2023 to August 2024</div>
                    </div>
                    <div className="flex text-sm lg:text-lg">
                      <ul className="list-disc list-inside">
                        <li>
                          Developed a sophisticated big data application for a
                          key mutual fund client, processing hundreds of
                          thousands of data points to automate and enhance
                          financial reporting.
                        </li>
                        <li>
                          Developed a Python-based chatbot for Discord, deployed
                          on AWS, tailored for a mutual fund company’s clients
                          to access real-time stock data and financial insights
                          efficiently.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col font-lora gap-2">
                    <div className="flex lg:flex-row flex-col lg:gap-2 text-sm lg:text-xl items-baseline">
                      <div className="font-bold">AI Developer</div>
                      <div className="text-sm lg:text-lg">September 2024 till Present</div>
                    </div>
                    <div className="flex text-sm lg:text-lg">
                      <ul className="list-disc list-inside">
                        <li>Sample</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/5 gap-10">
            <div className="group relative flex flex-col h-1/2 rounded-3xl p-5 justify-center shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-grad2 bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="font-darkergrotesque text-3xl">Education</div>
                <div className="flex flex-col gap-1">
                  <div className="font-roxborough text-2xl lg:text-3xl">
                    Sri Ramakrishna Engineering College
                  </div>
                  <div className="font-lora text-lg lg:text-xl">
                    Bachelors of Technology
                  </div>
                  <div className="font-lora font-semibold text-lg lg:text-xl">AI and Data Science</div>
                  <div className="font-lora text-md lg:text-lg">2020 - 2024</div>
                  <div className="flex justify-end items-baseline gap-1">
                    <div className="text-5xl lg:text-7xl font-extrabold font-darkergrotesque">9.11</div>
                    <div className="font-lora">CGPA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative flex flex-col h-1/2 rounded-3xl p-5 justify-center shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-grad3 bg-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-3xl"></div>
              <div className="relative flex flex-col z-10 gap-3">
                <div className="font-darkergrotesque text-3xl">Skills</div>
                <div className="flex flex-col font-lora text-lg lg:text-xl">
                  <div>Data Analytics</div>
                  <div>Machine Learning</div>
                  <div>Deep Learning</div>
                  <div>Problem Solving</div>
                  <div>PostgreSQL</div>
                  <div>Python (Proficient)</div>
                  <div>SQL (Proficient)</div>
                  <div>C++ (Intermediate)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-[26%] gap-10 justify-between">
            <div className="group relative flex flex-col rounded-3xl h-2/5 p-5 shadow-lg overflow-hidden justify-center">
              <div className="absolute inset-0 bg-grad14 bg-cover bg-top transition-transform duration-500 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="relative flex flex-col gap-3 z-10">
                <div className="flex w-full font-darkergrotesque text-3xl">
                  Achievements
                </div>
                <div className="grid grid-cols-2 w-max gap-x-2 text-md lg:text-lg font-lora font-light">
                  <div>IEEE EuReka (National)</div>
                  <div className="w-max">-&nbsp; Second</div>
                  <div>LTTS Techgium (National)</div>
                  <div className="w-max">-&nbsp; Finalist</div>
                  <div>Innotech (Intra-college)</div>
                  <div className="w-max">-&nbsp; First</div>
                  <div>HackerRank Python</div>
                  <div className="w-max">-&nbsp; 5 Stars</div>
                  <div className="w-max">HackerRank Problem Solving</div>
                  <div className="w-max">-&nbsp; 5 Stars</div>
                </div>
              </div>
            </div>

            <div className="group relative flex flex-col rounded-3xl h-2/5 p-5 gap-3 shadow-lg overflow-hidden justify-center">
              <div className="absolute inset-0 bg-grad6 bg-cover transition-transform duration-300 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="relative flex flex-col gap-3 z-10">
                <div className="flex w-full font-darkergrotesque text-3xl">
                  Certification
                </div>
                <div className="grid grid-cols-2 w-max gap-x-2 text-md lg:text-lg font-lora font-light">
                  <div>IEEE EuReka (National)</div>
                  <div className="w-max">-&nbsp; Second</div>
                  <div>LTTS Techgium (National)</div>
                  <div className="w-max">-&nbsp; Finalist</div>
                  <div>Innotech (Intra-college)</div>
                  <div className="w-max">-&nbsp; First</div>
                  <div>HackerRank Python</div>
                  <div className="w-max">-&nbsp; 5 Stars</div>
                  <div className="w-max">HackerRank Problem Solving</div>
                  <div className="w-max">-&nbsp; 5 Stars</div>
                </div>
              </div>
            </div>

            <div className="group relative flex flex-col rounded-3xl h-1/5 p-5 shadow-lg overflow-hidden justify-center">
              <div className="absolute inset-0 bg-grad15 bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="flex flex-col relative gap-3 z-10">
                <div className="text-3xl font-darkergrotesque">
                  Languages Known
                </div>
                <div className="flex font-lora w-2/3 text-lg lg:text-xl gap-10">
                  <div className="flex gap-1">
                    <div>English</div>
                    <div>(Fluent)</div>
                  </div>
                  <div className="flex gap-1">
                    <div>Tamil</div>
                    <div>(Native)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
