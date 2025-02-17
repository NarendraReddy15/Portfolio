import { useState } from "react";
import userimg from "./assets/image.png";
import "./App.css";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import userimg1 from "./assets/image2.png";

function App() {
  return (
    <>
      <section className="overflow-y-auto  main">
        <section className="mt-10 p-4 max-w-4xl mx-auto">
          <div className="flex gap-10 items-center">
            <div>
              <h2 className="font-black text-4xl">
                Hey, I am Narendra Reddy 👋
              </h2>
              <p className="mt-2 font-light">
                Passionate frontend developer with a focus on creating intuitive
                and responsive user experiences using modern web technologies.
              </p>
              <div className="mt-3 gap-2 flex">
                <a
                  href="https://www.linkedin.com/in/narendrareddymula/"
                  className="text-2xl"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://github.com/NarendraReddy15"
                  className="text-2xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <img
              src={userimg}
              alt=""
              className="h-40 w-48 object-cover rounded-full"
            />
          </div>
        </section>

        <section className="mt-10 p-4  max-w-4xl mx-auto">
          <h1 className="font-black text-2xl">About me</h1>
          <p className="font-light text-gray-500 mt-3">
            I am a passionate Frontend Developer with experience in building
            responsive and user-friendly web applications. I have worked as a
            Frontend Developer Intern at Wallero Technologies, where I
            contributed to developing high-performance user interfaces and
            integrating APIs. I hold a Bachelor of Technology in Computer
            Science from Malla Reddy Engineering College and have certifications
            in Java and Python. With a keen interest in modern web technologies,
            I continuously strive to enhance my knowledge and skills. I am eager
            to contribute to innovative projects and create seamless digital
            experiences.
          </p>
        </section>

        <section className="mt-10  max-w-4xl p-4 mx-auto">
          <h1 className="text-2xl font-black">Projects</h1>
          <div className="flex justify-between items-center">
            <h2 className="text-l mt-2.5 font-black">Chatbot</h2>
            <div>
              <p className="text-neutral-500 text-sm font-light">
                Aug 2024 – Dec 2024
              </p>
            </div>
          </div>

          <p className="font-light text-neutral-500 mt-2">
            Full Stack | JavaScript, React.js, Node.js
            <br />
            * Integrated Gemini AI for intelligent chatbot interactions. <br />*
            Developed an intuitive React-based <br />* front-end for a smooth
            user experience. Designed a Node.js & Express backend with API
            endpoints for dynamic responses.
          </p>
        </section>

        <section className="mt-10 p-4  max-w-4xl mx-auto">
          <h1 className="font-black text-2xl">Work Experiance</h1>
          <p className="font-light text-neutral-500 mt-3">
            Hands-on experience
          </p>

          <div className="mt-2">
            <div className="flex justify-between  items-center">
              <div className="flex gap-3 items-center ">
                <img
                  src="https://media.licdn.com/dms/image/v2/D560BAQFdJHEHzZb-kg/company-logo_200_200/company-logo_200_200/0/1688363724605/wallero_inc_logo?e=2147483647&v=beta&t=BMgpMyxLUufHy5LDtgmpIgjLZhukpmSLL_vaHx60mvg"
                  alt=""
                  className="h-4 w-8 object-cover  rounded-full"
                />
                <div>
                  <p className=" text-m">Wallero Technology</p>
                  <p className=" font-light text-xs">
                    Frontend Developer intern
                  </p>
                </div>
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-light">
                  Nov 2024-present
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" mt-10 p-4  max-w-4xl mx-auto ">
          <h1 className="font-black text-2xl">Techs and Tools</h1>
          <p className="font-light text-gray-500 mt-3">
            I've been recently working with
          </p>

          <div class="cards-section">
            <div class="dribble-cards">
              <div class="card">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5612AQGHR-FEVGwWFQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693497056904?e=2147483647&v=beta&t=FRAYmju0yddmAge4oZDd3KQroonU7oeiLM8CN18sHuM"
                  alt=""
                />
              </div>

              <div class="card">
                <img
                  src="https://blog.logrocket.com/wp-content/uploads/2024/06/responsive-image-gallery-css-flexbox.png"
                  alt=""
                />
              </div>

              <div class="card">
                <img
                  src="https://img.freepik.com/premium-photo/javascript-programming-code-abstract-technology-background_272306-155.jpg"
                  alt=""
                />
              </div>

              <div class="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g_TuoXUV2sIhcN758guyV1RfXad7Zhv3Iw&s"
                  alt=""
                />
              </div>

              <div class="card">
                <img
                  src="https://www.smartsight.in/wp-content/uploads/2021/09/NodeJS.jpg"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://www.oracle.com/img/tech/cb88-java-logo-001.jpg"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://blog.hyperiondev.com/wp-content/uploads/2017/12/py_machine.jpg"
                  alt=""
                />
              </div>

              <div class="card">
                <img
                  src="https://lh4.googleusercontent.com/proxy/raooDRde-kpUbv-dik4wnpPT9ne3d7DBOWYAu4mcjVCgJPpijrtQv2xd60w7x9KSIbCIBYhistT0PScms0kc7cUo"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://www.macworld.com/wp-content/uploads/2023/01/setup_learn_sql_mac.jpg?quality=50&strip=all&w=800"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="cards-section">
            <div class="dribble-cardss">
              <div class="card">
                <img
                  src="https://ubuntu.com/wp-content/uploads/c9f4/visualstudio_code-card.png"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://img-c.udemycdn.com/course/750x422/2560844_4dbe.jpg"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://cdn.intuji.com/2022/06/Logo_Vercel-1.jpg"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://miro.medium.com/v2/resize:fit:500/0*WfpntgxfqxCdCpl4.png"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg"
                  alt=""
                />
              </div>
              <div class="card">
                <img
                  src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 mb-12 max-w-4xl p-4 mx-auto">
          <h1 className="text-2xl font-black">Get in Touch</h1>
          <p className="font-light text-neutral-500 mt-3">
            Want to chat? Just shoot me a dm with a direct question on mail or
            whatsapp and I'll respond whenever I can. I will ignore all
            unneccesary messages.
          </p>
          <a href="tel:+919014612778 " className="mt-4">
            <button className="  p-3 rounded-2xl hover:bg-black hover:text-neutral-50 ">
              Call me
            </button>
          </a>
          <br />
          <a href="mailto:mulanarendrareddy@gmail.com">
            <button className="  p-3 rounded-2xl hover:bg-black hover:text-neutral-50 ">
              Mail me
            </button>
          </a>
          <br />
          <a
            href="https://wa.me/919014612778?text=this is a dummy msg"
            target="_blank"
          >
            <button className="  p-3 rounded-2xl hover:bg-black hover:text-neutral-50 ">
              Whatsapp me
            </button>
          </a>
        </section>
      </section>
    </>
  );
}

export default App;
