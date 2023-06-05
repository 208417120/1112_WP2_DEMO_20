import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home_20 from './pages/Home_20';
import About_20 from './pages/About_20';
import SingleCocktail_20 from './pages/SingleCocktail_20';
import Error_20 from './pages/Error_20';
// import components
import Navbar_20 from './components/Navbar_20';
function App_20() {
  return (
<Router>
  <Navbar_20 />
  <Routes>
    <Route path='/' element={<Home_20 />} />
    <Route path='/about' element={<About_20 />} />
    <Route path='/cocktail/:id' element={<SingleCocktail_20 />} />
    <Route path='*' element={<Error_20 />} />
  </Routes>
</Router>
  );
}

export default App_20;
