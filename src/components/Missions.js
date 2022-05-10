import React from 'react';
import MissionStatus from './MissionStatus';
import './Missions.css';

const Missions = () => {
  const missions = [
    {
      mission_id: '9D1B7E0',
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    },
    {
      mission_id: '6C42550',
      mission_name: 'SES',
      description: 'SES S.A. is a communications satellite owner and operator providing video and data connectivity worldwide to broadcasters, content and internet service providers, mobile and fixed network operators, governments and institutions, with a mission to “connect, enable, and enrich”. SES operates more than 50 geostationary orbit satellites and 16 medium Earth orbit satellites. These comprise the well-known European Astra TV satellites, the O3b data satellites and others with names including AMC, Ciel, NSS, Quetzsat, YahSat and SES.',
    },
  ];
  return (
    <div className="missions">
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
                <button type="button">Join a Mission</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Missions;
