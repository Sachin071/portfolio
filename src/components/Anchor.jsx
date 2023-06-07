import PropTypes from "prop-types";

const Anchor = ({ URL, title, name, icons }) => {
  return (
    <>
      <a href={URL} title={title}>
        {name} {icons}
      </a>
    </>
  );
};

Anchor.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
};

export default Anchor;
