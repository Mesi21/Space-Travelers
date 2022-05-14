import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionStatus from './MissionStatus';
import './Missions.css';
import { getMissions, joinMission, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  const joinAMission = (id) => {
    dispatch(joinMission(id));
  };

  const leaveAMission = (id) => {
    dispatch(leaveMission(id));
  };

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
                <MissionStatus active={mission.joined} />
              </td>
              <td>
                { mission.joined
                  ? <button className="leave-mission btn" type="button" onClick={() => leaveAMission(mission.mission_id)}>Leave Mission</button>
                  : <button className="join-mission btn" type="button" onClick={() => joinAMission(mission.mission_id)}>Join Mission</button>}
              </td>
            </tr>
          ))}
        </thead>
      </table>
    );
  }

  return (
    <div className="contained missions">
      {content}
    </div>
  );
};

export default Missions;
