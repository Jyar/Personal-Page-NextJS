import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { ContactForm } from "./sections/contact-form";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { DrawSVGPlugin } from "gsap-trial/dist/DrawSVGPlugin";
// import MotionPathPlugin from "gsap-trial/dist/MotionPathPlugin";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import confetti from "../../public/lottie/confetti.json";
import robotWelcomeAnimation from "../../public/lottie/robotWelcomeAnimation.json";
import { Card } from "./card";
import Image from "next/image";
import cnuCampus from "../../public/images/cnuCampus.jpeg";
import pittsburgh from "../../public/images/pittsburgh.jpeg";
import yosemite from "../../public/images/yosemite.jpeg";
import { MdSchool } from "react-icons/md";
import { GiSoccerKick, GiRocket, GiSpartanHelmet } from "react-icons/gi";
import { FaRaspberryPi } from "react-icons/fa";
import { SiAdp, SiFreelancer } from "react-icons/si";
import IsotopeTable from "./items/isotope-table";

export const Content = () => {
  let strokeColor = "blue";
  useLayoutEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });

    // let ctx = gsap.context(() => {
    //   gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    //   gsap.defaults({ ease: "none" });

    //   const pulses = gsap
    //     .timeline({
    //       defaults: {
    //         duration: 0.05,
    //         autoAlpha: 1,
    //         scale: 2,
    //         transformOrigin: "center",
    //         ease: "elastic(2.5, 1)",
    //       },
    //     })
    //     .to(".ball02, .text01", {}, 0.2)
    //     .to(".ball03, .text02", {}, 0.33)
    //     .to(".ball04, .text03", {}, 0.46);

    //   const main = gsap
    //     .timeline({
    //       defaults: { duration: 1 },
    //       scrollTrigger: {
    //         trigger: "#svg",
    //         scrub: true,
    //         start: "top center",
    //         end: "bottom center",
    //       },
    //     })
    //     .to(".ball01", { duration: 0.01, autoAlpha: 1 })
    //     .from(".theLine", { drawSVG: 0 }, 0)
    //     .to(
    //       ".ball01",
    //       {
    //         motionPath: {
    //           path: ".theLine",
    //           align: ".theLine",
    //           alignOrigin: [0.5, 0.5],
    //         },
    //       },
    //       0
    //     )
    //     .add(pulses, 0);
    // }
    // );

    // return () => ctx.revert(); // <-- CLEANUP!
  }, []);

  return (
    <>
      {/* ------------------- */}
      <div className="bg-sky-200 flex items-center w-full">
        <div className=" w-full ">
          <div className="max-w-screen-xl m-auto">
            <div className="flex flex-col sm:flex-row sm:justify-evenly text-blue-500 p-20">
              {/* <Lottie
                className="absolute top-16"
                animationData={confetti}
                loop={false}
              /> */}
              <div className="flex justify-center items-start sm:mr-5 sm:ml-5 flex-col sm:w-1/2 sm:p-0 p-5 sm:h-screen">
                <h1>Welcome,</h1>
                <h2>I&apos;m Jordan Yarros! </h2>
                <h2>I am a Software Developer.</h2>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  className="drop-shadow-lg rounded-lg justify-center"
                  src={yosemite}
                  alt="Picture of Jordan and yosemite"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------- */}
      {/* <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 3200">
        <path
          className="theLine"
          d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200
           T 160 1500
           t 200 300
           t -200 200 
           t 200 200
           t -100 500
           t -10 400
           t 10 300"
          fill="none"
          stroke={strokeColor}
          strokeWidth="10px"
        />

        <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
        {/* <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
        <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
        <circle className="ball ball04" r="20" cx="203" cy="601"></circle> */}
      {/* </svg> */}

      {/* -------------- */}
      <div className="max-w-screen-xl m-auto">
        {/* -------------- */}
        <div className="flex flex-col gap-y-10 ">
          {/* --------------------------- */}
          <div className="flex flex-col p-8">
            <div
              className="section flex items-center"
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="area-title">About</h1>
              <Lottie
                className="w-40 h-40 absolute left-64"
                animationData={robotWelcomeAnimation}
                loop={false}
              />
            </div>
            <div className=" section-body rounded-md p-5 w-full align-middle content-center justify-center flex flex-col sm:flex-row min-h-[50%] ">
              <div className="flex items-center">
                <Image
                  className="drop-shadow-lg rounded-lg  justify-center p-2"
                  src={pittsburgh}
                  alt="Picture of Jordan"
                  width={350}
                  height={250}
                />
              </div>
              <div className="flex flex-col justify-evenly w-full m-5 text-md">
                <div className="text-body p-5">
                  Hello, My name is Jordan Yarros. I am currently a Sofware
                  Developer for ADP, where I do mostly frontend work with
                  Angular and Drupal. I went to Christopher Newport University
                  for my Bachelors, where I majored in Computer Science and a
                  minored in leadership. There I learned fundamental computer
                  science concepts, data structures, and algorithms. I also
                  learned leadership skills and the importance of the first
                  follower and servant leadership.
                </div>
                <div className="flex sm:flex-row gap-y-5 flex-col justify-around">
                  <ul className="aboutMe flex flex-col gap-y-5 ">
                    <li className="flex">
                      <GiRocket className="mr-2" /> Birthday: 02/07/1997
                    </li>
                    <li className="flex">
                      <GiRocket className="mr-2" /> Age: 26
                    </li>
                    <li className="flex">
                      <GiRocket className="mr-2" /> Location: Virginia Beach, VA
                    </li>
                  </ul>
                  <ul className="aboutMe  flex flex-col gap-y-5">
                    <li className="flex">
                      <GiRocket className="mr-2" /> Phone: 540-449-9992
                    </li>
                    <li className="flex">
                      <GiRocket className="mr-2" /> Email: jyar27@gmail.com
                    </li>
                    <li className="flex">
                      <GiRocket className="mr-2" /> Degree: Bachelors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------- */}
          <div className="flex  flex-col p-8 bg-slate-100">
            <div
              className="section  flex items-center"
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="area-title">Experience</h1>
            </div>
            <div className="   rounded-md p-5 section-body w-full align-middle content-center justify-center flex-col  flex-wrap min-h-[50%] ">
              <div className="pb-2 justify-center flex">
                <SiAdp className="text-8xl" />
              </div>
              <ul className="list-disc">
                <b> Drupal Application Development: </b>
                <li>
                  Worked with JQuery and AJAX to implement a chatbot so 50,000
                  users could get speedy responses to their IT and HR questions{" "}
                </li>
                <li>
                  Fixed 20+ existing bugs to reduce user complaints and provide
                  reliable functionality
                </li>
                <li>
                  Reduced manual input of forms by 75% by securely sending form
                  data via an API and then saved in an external system
                </li>
                <li>
                  Followed a CICD process with Bitbucket and Jenkins to merge
                  and deploy code
                </li>
              </ul>
              <ul className="list-disc pt-5">
                <b>Angular Project: </b>
                <li>
                  Implemented Services and APIs to gather and present employee
                  data within a search component
                </li>
                <li>
                  To emphasize a congruent user experience, incorporated search
                  components into existing applications
                </li>
                <li>
                  Used SCSS and Typescript to create new components so users
                  could seamlessly navigate HR cases
                </li>
                <li>
                  Implemented test cases using shallow render to ensure
                  reliability ● Worked with metadata driven form templates
                </li>
              </ul>
              <div className="flex-col">
                <div className="p-2 pt-5 justify-center flex">
                  <SiFreelancer className="text-8xl"></SiFreelancer>
                  <div className="flex items-center">Freelance</div>
                </div>
                <div className="text-sm flex justify-center">
                  Coming Soon...
                </div>
              </div>
            </div>
          </div>
          {/* ------------------- */}
          {/* ------------------- */}
          <div className="flex flex-col p-8">
            <div
              className="section  flex items-center"
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="area-title">Portfolio</h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              className="section-body p-5 w-full align-middle content-center justify-center flex flex-wrap min-h-[50%]"
            >
              <div className="flex gap-6 sm:flex-nowrap flex-wrap">
                <Card
                  title="React Native Application"
                  content="Check out my react native app on the app store. It's called ..."
                />
                <Card
                  title="Netflix Clone"
                  content="Created with React. Looks like netlfix. I am even pulling in information with a movie api"
                />
                <Card
                  title="AWS Load Balancing with Kubernetes "
                  content="Check out this application here"
                />
              </div>
            </div>
          </div>
          {/* ------------------- */}
          {/* ------------------- */}
          <div className="flex  flex-col p-8 bg-slate-100">
            <div
              className="section  flex items-center"
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="area-title">Education</h1>
            </div>
            <div className="section-body p-5 w-full align-middle content-center justify-center flex flex-wrap min-h-[50%]">
              <div
                className=" rounded-md p-5 flex md:flex-nowrap flex-wrap justify-evenly"
                data-aos="fade-down-right"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className=" md:w-1/3 w-full flex flex-col items-center gap-y-5 p-5">
                  <MdSchool className="text-8xl" />
                  Christopher Newport University. Presidential Leadership
                  program - GPA 3.4 - Major In Computer Science and Minor in
                  leadership.
                </div>
                <Image
                  className="drop-shadow-lg rounded-lg"
                  src={cnuCampus}
                  alt="Picture of CNU"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
          {/* ------------------- */}
          {/* ------------------- */}
          <div className="cert-section"></div>
          <div className="flex flex-col p-8">
            <div
              className="section  flex items-center"
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="area-title">Certifications</h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              className="section-body p-5 pt-10 certification-body w-full align-middle content-center justify-start flex flex-wrap min-h-[50%] "
            >
              <IsotopeTable />
            </div>
          </div>
          {/* ------------------- */}
          {/* ------------------- */}
          <div className="flex  flex-col p-8 bg-slate-100">
            <div
              className="section  flex items-center"
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="area-title">Hobbies</h1>
            </div>
            <div className="section-body p-5 w-full align-middle content-center justify-center flex flex-wrap min-h-[50%] ">
              <div className="flex sm:flex-nowrap flex-wrap gap-2">
                <div
                  className="flex flex-col w-full bg-green-300 rounded-md "
                  data-aos="zoom-in-down"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <GiSoccerKick className="text-8xl mr-auto ml-auto pt-5" />
                  <div className="p-5">
                    I love soccer. I was a collegiate d3 soccer player! My
                    favorite soccer team is liverpool. YNWA!
                  </div>
                </div>
                <div
                  className="flex flex-col w-full bg-green-300 rounded-md "
                  data-aos="flip-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <GiSpartanHelmet className="text-8xl mr-auto ml-auto pt-5" />
                  <div className="p-5">
                    Working out and doing spartan races! Ive done the trifecta:
                    beast, spartan, ultra. However, not in the same year.
                  </div>
                </div>
                <div
                  className="flex flex-col w-full bg-green-300 rounded-md"
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <FaRaspberryPi className="text-8xl  mr-auto ml-auto pt-5" />
                  <div className="p-5">
                    I like to expiriment with technology. I have made my own
                    retro gaming pi and I have also built my own computer.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------- */}
          {/* ------------------- */}
          <div className="flex flex-col p-8">
            <div
              className="section  flex items-center"
              data-aos="fade-down-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="area-title">Blogs</h1>
            </div>
            <div
              data-aos="fade-left"
              className="section-body p-5 w-full align-middle content-center justify-center flex flex-wrap min-h-[50%] "
            >
              <span className="">medium posts</span>
            </div>
          </div>
        </div>
        <div className=" w-full mt-4 p-8">
          <div className="flex">Please fill out the form to contact me...</div>
          <ContactForm />
        </div>
        {/* ------------------- */}
      </div>
    </>
  );
};
