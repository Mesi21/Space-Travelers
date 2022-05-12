import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation, deleteReservation } from '../redux/rockets/rockets';

const Rocket = ({
  id, desc, name, img, reserv,
}) => {
  const dispatchAction = useDispatch();

  const reserve = () => dispatchAction(addReservation(id));
  const cancel = () => dispatchAction(deleteReservation(id));

  return (
    <div id={id} className="rocketInfo flex-row">
      <div className="rocketImg"><img src={img} alt="Rocket" /></div>
      <div className="details flex-col">
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>{String(reserv)}</p>
        <button type="button" className="reserveBtn" onClick={(reserv === false) ? reserve : cancel}>Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserv: PropTypes.bool.isRequired,
};

export default Rocket;
