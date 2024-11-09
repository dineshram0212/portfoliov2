import React from "react";
import bubble from "../assets/bubble.png"; // Optional if used elsewhere

const Profile = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-white p-5"
      id="profile"
    >
      <div className="flex flex-col w-full max-w-screen bg-gradbg bg-cover rounded-3xl overflow-hidden shadow-lg">
        
        {/* Header */}
        <div className="flex h-auto font-roxborough text-xl md:text-2xl lg:text-3xl items-center justify-between p-4 lg:p-10">
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
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between p-3 lg:px-10 lg:py-5 gap-10">
          
          {/* Experience Section */}
          <div className="group relative flex flex-col w-full lg:w-2/5 rounded-3xl p-5 lg:p-10 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-grad1 bg-cover transition-transform duration-500 ease-in-out group-hover:scale-150 rounded-3xl"></div>
            <div className="flex flex-col gap-3 relative z-10 text-black">
              <div className="font-darkergrotesque text-2xl lg:text-3xl">Experience</div>
              <div className="flex flex-col gap-5">
                <div className="font-roxborough text-lg md:text-xl lg:text-2xl">Edsols Innovations Pvt. Ltd., Bengaluru, India</div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col font-lora gap-2">
                    <div className="flex lg:flex-row flex-col lg:gap-2 text-sm lg:text-xl items-baseline">
                      <div className="font-bold">Associate AI Engineer</div>
                      <div className="text-sm lg:text-lg">September 2024 - Present</div>
                    </div>
                    <ul className="list-disc list-inside text-sm lg:text-lg">
                      <li>Developed an interactive app for children with disabilities, using ReactJS and FastAPI to create a responsive, accessible platform.</li>
                      <li>Implemented AI phoneme matching to analyze and rate children’s speech, enhancing tool accuracy and providing real-time feedback.</li>
                      <li>Integrated an EMR module for data management and reporting, supporting compliant access to therapy insights.</li>
                    </ul>
                  </div>
                  <div className="flex flex-col font-lora gap-2">
                    <div className="flex lg:flex-row flex-col lg:gap-2 text-sm lg:text-xl items-baseline">
                      <div className="font-bold">Graduate Engineering Trainee</div>
                      <div className="text-sm lg:text-lg">July 2023 - August 2024</div>
                    </div>
                    <ul className="list-disc list-inside text-sm lg:text-lg">
                      <li>Developed a Flask-based software for a mutual fund company to process large datasets, generate reports in PostgreSQL, and visualize insights through Power BI dashboards.</li>
                      <li>Deployed AWS chatbots for real-time stock data, enhancing client engagement and providing instant support.</li>
                      <li>Programmed robotic arm and vehicle functions with PyTorch, computer vision, and ROS, expanding automation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Skills Section */}
          <div className="flex flex-col w-full lg:w-1/5 gap-10">
            {/* Education */}
            <div className="group relative flex flex-col h-full rounded-3xl p-5 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-grad2 bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="flex flex-col gap-3 relative z-10 text-black">
                <div className="font-darkergrotesque text-2xl lg:text-3xl">Education</div>
                <div className="flex flex-col gap-1">
                  <div className="font-roxborough text-lg lg:text-2xl">Sri Ramakrishna Engineering College</div>
                  <div className="font-lora text-md lg:text-lg">Bachelor of Technology</div>
                  <div className="font-lora font-semibold text-md lg:text-lg">AI and Data Science</div>
                  <div className="font-lora text-sm lg:text-md">2020 - 2024</div>
                  <div className="flex justify-end items-baseline gap-1">
                    <div className="text-4xl lg:text-6xl font-extrabold font-darkergrotesque">9.11</div>
                    <div className="font-lora">CGPA</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="group relative flex flex-col h-full rounded-3xl p-5 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-grad3 bg-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-3xl"></div>
              <div className="relative flex flex-col z-10 gap-3 text-black">
                <div className="font-darkergrotesque text-2xl lg:text-3xl">Skills</div>
                <div className="flex flex-col font-lora text-sm lg:text-lg">
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

          {/* Achievements & Certification Section */}
          <div className="flex flex-col w-full lg:w-2/5 gap-10">
            
            {/* Achievements */}
            <div className="group relative flex flex-col rounded-3xl p-5 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-grad14 bg-cover bg-top transition-transform duration-500 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="relative flex flex-col gap-3 z-10 text-black">
                <div className="font-darkergrotesque text-2xl lg:text-3xl">Achievements</div>
                <div className="grid grid-cols-2 gap-x-2 text-sm lg:text-lg font-lora font-light">
                  <div>IEEE EuReka (National)</div><div>- Second</div>
                  <div>LTTS Techgium (National)</div><div>- Finalist</div>
                  <div>Innotech (Intra-college)</div><div>- First</div>
                  <div>HackerRank Python</div><div>- 5 Stars</div>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="group relative flex flex-col rounded-3xl p-5 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-grad6 bg-cover transition-transform duration-300 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="relative flex flex-col gap-3 z-10 text-black">
                <div className="font-darkergrotesque text-2xl lg:text-3xl">Certifications</div>
                <div className="grid grid-cols-2 gap-x-2 text-sm lg:text-lg font-lora font-light">
                  <div>Fundamentals of Deep Learning</div><div>- NVIDIA</div>
                  <div>Deep Learning with Keras</div><div>- EdX</div>
                  <div>Business English Certification (B2)</div><div>- Cambridge UP</div>
                  <div>AI on Jetson Nano</div><div>- NVIDIA</div>
                  <div>AWS Machine Learning</div><div>- LinkedIn</div>
                  <div>MLOps Essentials</div><div>- LinkedIn</div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="group relative flex flex-col rounded-3xl p-5 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-grad15 bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125 rounded-3xl"></div>
              <div className="flex flex-col relative gap-3 z-10 text-black">
                <div className="font-darkergrotesque text-2xl lg:text-3xl">Languages Known</div>
                <div className="flex flex-col font-lora text-sm lg:text-lg gap-1">
                  <div>English (Fluent)</div>
                  <div>Tamil (Native)</div>
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
