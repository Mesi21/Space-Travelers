import AllRockets from './components/AllRockets';
import Missions from './components/Missions';
import MyProfile from './pages/MyProfile';

const routes = [
  {
    id: 0,
    path: '/',
    title: 'Rockets',
    element: <AllRockets />,
  },
  {
    id: 1,
    path: '/missions',
    title: 'Missions',
    element: <Missions />,
  },
  {
    id: 2,
    path: '/profile',
    title: 'My Profile',
    element: <MyProfile />,
  },
];

export default routes;
