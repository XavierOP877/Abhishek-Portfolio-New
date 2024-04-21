import React from 'react';
import abhishek from "../assets/img/meandme.jpg"

function About() {
  return (
    <div id="about">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 items-start">
            <div className="lg:w-1/2 w-full  mb-6 lg:mb-0 pr-3">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Me</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"> </div>
              <p className=" leading-relaxed text-base mt-5" >A <span className="text-black-500 font-medium"> Frontend Developer <span role="img" aria-label="Man juggling">🤹‍♂️</span></span> by Passion and Engineer<span role="img" aria-label="Man student">👨‍🎓</span> by Degree, I love to show my empathy
                towards users and audience by variety of things (Designing a good UI, Building Dapps) for a start. <br /> I am currently pursuing a Computer Science degree at United Institute of Technology, with an expected graduation date of June 2024. My passion for web development and blockchain technology is not just academic; it is a driving force behind my career. I have acquired numerous skills and certifications in these domains, showcasing my dedication and expertise. <br />Later in my 2nd Semester I discovered Web Development which led
                me to<span className="text-black-500 font-medium"> Frontend Development </span>and ever since then I have not stopped building, designing and
                exploring. <br /> <br />If you are interested in my coding skills  <span className="text-black-500 underline font-medium">
                  <a
                    href="https://github.com/XavierOP877"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github{" "}
                  </a>{" "}
                </span>
                . </p>

            </div>
            <img className="lg:w-1/2 w-full rounded" src={abhishek} alt="meee" />
          </div>

        </div>
      </section>
    </div>
  )
}

export default About
