import "../assets/css/home.css";
import About from "./About";
import { cv, logo } from "../assets";
import Work from "./Work";

const Home = () => {
  return (
    <>
      <div className="content">
        <div className="contentrow">
          <div className="owndata">
            <div className="containers">
              <div className="typewriter">Full Stack Web Developer</div>
              <h4>
                I code to make a beautiful website & connect to data by using
                api.
              </h4>
              <div className="link">
                <a href="mailto:shashank.p.62824@gmail.com" title="Gmail">
                  <i className="fa-brands fa-google fa-shake"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-patel-018a48133/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/shashank.p.62824/"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/SHASHANKPA78290"
                  target="_blank"
                  rel="noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <a
                className="buttoncv"
                target="_blank"
                rel="noreferrer"
                download
                href={cv}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="image">
            <img src={logo} alt="Image Upload soon" />
          </div>
        </div>
        <Work />
        <About />
      </div>
    </>
  );
};

export default Home;
