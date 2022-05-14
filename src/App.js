import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        { routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
