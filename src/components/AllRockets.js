import React, { Component } from 'react';
import Rocket from './Rocket';
import './AllRockets.css';

class AllRockets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: [{
        id: 1,
        rocket_name: 'Rocket1',
        description: 'descript 1',
        flickr_images: 'https://img1.jpg',
      },
      {
        id: 2,
        rocket_name: 'Rocket2',
        description: 'descript 2',
        flickr_images: 'https://img2.jpg',
      },
      {
        id: 3,
        rocket_name: 'Rocket3',
        description: 'descript 3',
        flickr_images: 'https://img3.jpg',
      }],
    };
  }

  render() {
    const { rockets } = this.state;
    return (
      rockets.map((r) => (
        <Rocket
          key={r.id}
          id={r.id}
          name={r.rocket_name}
          img={r.flickr_images}
          desc={r.description}
        />
      ))
    );
  }
}

export default AllRockets;
