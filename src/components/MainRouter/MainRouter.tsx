import './MainRouter.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';

const MainRouter = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </main>
);

export default MainRouter;
