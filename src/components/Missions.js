import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionStatus from './MissionStatus';
import './Missions.css';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  let content = null;
  if (loading) {
    content = <h2>Loading ...</h2>;
  } else {
    content = (
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          { missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <MissionStatus active />
              </td>
              <td>
                <button className="join-mission-btn" type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    );
  }

  return (
    <div className="missions">
      {content}
    </div>
  );
};

export default Missions;
