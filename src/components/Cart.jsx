import "../assets/css/cart.css";
import { Anchor } from "../components";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const Cart = ({ cartImg, cartHeading, URL, cartDescription }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={cartImg} alt="image upload soon" />
        </div>
        <div className="flip-card-back">
          <h1>{cartHeading}</h1>
          <p>{cartDescription}</p>
          <div className="flip-card-back__link">
            <Anchor
              URL={URL}
              title="Live"
              name="Live Demo"
              // icons={<FaGithub />}
            />
            <Anchor
              URL={URL}
              title="See Code"
              name="code"
              icons={<FaGithub />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartImg: PropTypes.string.isRequired,
  cartHeading: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  cartDescription: PropTypes.string.isRequired,
};

export default Cart;
