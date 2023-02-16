import React from 'react';

import { useGlobalContext_20 } from './Context_20';

// components
import Navbar_20 from './components/Navbar_20';
import CartContainer_20 from './components/CartContainer_20';
// items

const App_20 = () => {
  const { loading, cart } = useGlobalContext_20();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar_20 />
      <CartContainer_20 />
    </main>
  );
};

export default App_20;
