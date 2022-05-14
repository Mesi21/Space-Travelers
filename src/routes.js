import MissionsPage from './pages/MissionsPage';
import MyProfile from './pages/MyProfile';
import RocketsPage from './pages/RocketsPage';

const routes = [
  {
    id: 0,
    path: '/',
    title: 'Rockets',
    element: <RocketsPage />,
  },
  {
    id: 1,
    path: '/missions',
    title: 'Missions',
    element: <MissionsPage />,
  },
  {
    id: 2,
    path: '/profile',
    title: 'My Profile',
    element: <MyProfile />,
  },
];

export default routes;
