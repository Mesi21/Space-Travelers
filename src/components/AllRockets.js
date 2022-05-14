import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import './AllRockets.css';

const AllRockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className="contained">
      {rockets.map((r) => (
        <div key={r.id}>
          <Rocket
            id={r.id}
            name={r.name}
            img={r.img}
            desc={r.desc}
            reserv={r.reserv}
          />
        </div>
      ))}
    </div>
  );
};

export default AllRockets;
