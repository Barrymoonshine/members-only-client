import './MainRouter.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SignUp from '../../pages/SignUp/SignUp';

const MainRouter = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  </main>
);

export default MainRouter;
