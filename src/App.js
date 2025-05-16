
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Pricingpage from './pages/Pricingpage';
import Quarterlypage from './pages/Quarterlypage';
import Headshotpage from './pages/Headshotpage';
import Videopages from './pages/Videopages';
import Photographypage from './pages/Photographypage';



const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/pricing' element={<Pricingpage />} />
        <Route path='/packages' element={<Quarterlypage />} />
        <Route path='/headshot' element={<Headshotpage />} />
        <Route path='/video' element={<Videopages />} />
        <Route path='/photography' element={<Photographypage />} />

      </Routes>
    </>
  );
};

export default App;
