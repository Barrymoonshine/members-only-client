import './MainRouter.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SignUp from '../../pages/SignUp/SignUp';
import JoinUs from '../../pages/JoinUs/JoinUs';

const MainRouter = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/join-us' element={<JoinUs />} />
    </Routes>
  </main>
);

export default MainRouter;
