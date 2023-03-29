import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import BlogsStaticPage_20 from './pages/BlogsStaticPage_20';
import HomePage_20 from './pages/HomePage_20';
import BlogsLocalJsonPage_20 from './pages/BlogsLocalJsonPage_20';
import BlogsNodeServerPage_20 from './pages/BlogsNodeServerPage_20';
import BlogsSupabasePage_20 from './pages/BlogsSupabasePage_20';

function App_20() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='card_20' element={<BlogsStaticPage_20 />} />
        <Route path='card2_local_20' element={<BlogsLocalJsonPage_20 />} />
        <Route path='card2_node_20' element={<BlogsNodeServerPage_20 />} />
        <Route path='card2_supabase_20' element={<BlogsSupabasePage_20 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_20;
