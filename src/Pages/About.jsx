import React from "react";
import "../assets/css/about.css";
import {
  Html,
  Css,
  Bootstrap,
  react,
  node,
  express,
  javascript,
  mongo,
  git,
  github,
} from "../assets";

const About = () => {
  return (
    <div className="main">
      <section className="intro">
        <p>
          I'm <strong>Shashank Patel</strong>, As a self-taught developer, I
          have dedicated over one year to learning various web technologies such
          as <strong>HTML, CSS, and JavaScript</strong>. Additionally, I have
          gained valuable experience working with the{" "}
          <strong>React JS, Node JS, Express JS and Mongo DB</strong>.
        </p>
        <p>
          I am passionate about technology and always eager to embrace new
          opportunities that contribute to my growth and expertise in the field.
          I believe that continuous learning is essential in the ever-evolving
          world of technology, and I am open to any opportunity that allows me
          to further enhance my technical abilities.
        </p>
      </section>
      <section className="technologies">
        <h3>
          So, I am currently working with these technologies, actively exploring
          new technologies along the way
        </h3>
        <ul>
          <li>
            <img src={Html} alt="image Upload soon" />
            <p>HTML</p>
          </li>
          <li>
            <img src={Css} alt="image Upload soon" />
            <p>CSS</p>
          </li>
          <li>
            <img src={javascript} alt="image Upload soon" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={Bootstrap} alt="image Upload soon" />
            <p>BootStrap</p>
          </li>
          <li>
            <img src={react} alt="image Upload soon" />
            <p>React JS</p>
          </li>
          <li>
            <img src={node} alt="image Upload soon" />
            <p>Node JS</p>
          </li>
          <li>
            <img src={express} alt="image Upload soon" />
            <p>Express JS</p>
          </li>
          <li>
            <img src={mongo} alt="" />
            <p>Mongo DB</p>
          </li>
          <li>
            <img src={git} alt="" />
            <p>GIT</p>
          </li>
          <li>
            <img src={github} alt="" />
            <p>GitHub</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
