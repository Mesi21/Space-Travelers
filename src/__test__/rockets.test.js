import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsPage from '../pages/RocketsPage';

const rockets = [
  {
    desc: 'Some description',
    key: '1',
    id: '1',
    name: 'Space Traveler 1',
    img: 'https://ahfkjgf.com',
    reserv: false,
  },
];

describe('Test the Rockets Component', () => {
  it('rockets section renders', () => {
    // act
    const { container } = render(
      <Provider store={store}>
        <RocketsPage key={rockets[0].id} rocket={rockets[0]} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});