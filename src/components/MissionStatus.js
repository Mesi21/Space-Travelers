import React from 'react';
import PropTypes from 'prop-types';

const MissionStatus = (props) => {
  const { active } = props;

  const statusStyle = {
    backgroundColor: active ? 'var(--green)' : 'var(--black-1)',
    borderRadius: '2px',
    fontSize: '12px',
    padding: '2px 4px',
    whiteSpace: 'nowrap',
    color: 'white',
  };

  return (
    <h2 style={statusStyle}>
      { active ? 'Active Member' : 'NOT A MEMBER' }
    </h2>
  );
};

MissionStatus.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default MissionStatus;
