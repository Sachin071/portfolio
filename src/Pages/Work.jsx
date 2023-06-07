import { Cart } from "../components";
import "../assets/css/work.css";
import { portfolio, deshbook } from "../assets";

const Work = () => {
  return (
    <div className="work">
      <Cart
        cartImg={deshbook}
        cartHeading="DeshBook"
        cartDescription="Deshbook aims to provide a user-friendly interface, resembling the popular social media platform, and offers various features for seamless navigation and content viewing."
        URL="https://github.com/Sachin071/deshbook"
        // LIVE_URL = ""
      />
      <Cart
        cartImg={portfolio}
        cartHeading="My Portfolio"
        cartDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            blanditiis cupiditate odit distinctio quibusdam molestias ex quae
            temporibus autem quod, culpa perferendis nesciunt dignissimos
            aspernatur, aut repellendus, velit eos tempora."
        URL="https://github.com/Sachin071/deshbook"
      />
      <Cart
        cartImg={portfolio}
        cartHeading="My Portfolio"
        cartDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            blanditiis cupiditate odit distinctio quibusdam molestias ex quae
            temporibus autem quod, culpa perferendis nesciunt dignissimos
            aspernatur, aut repellendus, velit eos tempora."
        URL="https://github.com/Sachin071/deshbook"
      />
    </div>
  );
};

export default Work;
