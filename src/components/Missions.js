import React from 'react';
import './Missions.css';

const Missions = () => {
  const missions = [
    {
      mission_id: '9D1B7E0',
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',

    },
  ];
  return (
    <div className="missions">
      <table>
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
                <h2>Not A member</h2>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Missions;
