import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserv);

  return (
    <div className="allReserv">
      <h1>My Rocket Reservations</h1>
      <div>
        {reservedRockets.length ? (
          reservedRockets.map((r) => (
            <Rocket
              key={r.id}
              id={r.id}
              name={r.name}
              desc={r.desc}
              img={r.img}
            />
          ))
        ) : (
          <tr className="noReserv"><td>No Rreserved rockets</td></tr>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
