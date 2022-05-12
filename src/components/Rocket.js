import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation, deleteReservation } from '../redux/rockets/rockets';

const Rocket = ({
  id, desc, name, img, reserv,
}) => {
  const dispatchAction = useDispatch();

  const reserve = () => dispatchAction(addReservation(id));
  const cancel = () => dispatchAction(deleteReservation(id));

  const resBtn = (<button type="button" className="reserveBtn" onClick={reserve}>Reserve Rocket</button>);
  const delBtn = (<button type="button" className="reserveBtn" onClick={cancel}>Cancel Reservation</button>);
  const reserved = (<p id="reserved">Reserved</p>);

  return (
    <div id={id} className="rocketInfo flex-row">
      <div className="rocketImg"><img src={img} alt="Rocket" /></div>
      <div className="details flex-col">
        <h1>{name}</h1>
        <span className="res flex-row">
          {(reserv) ? reserved : null }
          <p>{desc}</p>
        </span>
        {(reserv === false) ? resBtn : delBtn }
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
