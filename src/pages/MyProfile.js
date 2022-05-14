import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rocketsReducer);

  const myMissions = missions.filter((mission) => mission.joined);
  const myRockets = rockets.filter((rocket) => rocket.reserv);

  return (
    <div className="contained page">
      <div className="my-missions">
        <h2>My Missions</h2>
        {myMissions.length === 0
          ? <h4>No mission Joined</h4>
          : myMissions.map((mission) => <h3 key={mission.mission_id}>{mission.mission_name}</h3>) }
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        {myRockets.length === 0
          ? <h4>No rocket Reserved</h4>
          : (myRockets.map((rocket) => <h3 key={rocket.rocket_id}>{rocket.name}</h3>)) }
      </div>
    </div>
  );
};

export default MyProfile;
