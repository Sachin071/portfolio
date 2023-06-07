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
          As a self-taught developer with over one year of experience in the
          MERN Stack, I am passionate about technology. I embrace new
          opportunities for continuous learning and growth. I stay updated with
          the ever-evolving world of technology and open to any opportunity that
          enhances my technical abilities.
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
