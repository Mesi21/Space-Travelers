import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsPage from '../pages/RocketsPage';
import MissionsPage from '../pages/MissionsPage';
import MyProfile from '../pages/MyProfile';

describe('Testing if all pages renders correctly', () => {
  it('Testing Rockets page', () => {
    const tree = render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing Missions page', () => {
    const tree = render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing My Profile Page', () => {
    const tree = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
