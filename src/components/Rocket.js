import PropTypes from 'prop-types';

const Rocket = ({
  id, desc, name, img,
}) => (
  <div id={id}>
    <span>{id}</span>
    <span><p>{name}</p></span>
    <span>{desc}</span>
    <span>{img}</span>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
