
import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from '../src/pages/Home'
import Blog from './pages/Blog';
import Profiles from './pages/Profiles';
import NotFound from './pages/Notfound';
import Chats from './pages/Chats';
import Metric from './pages/Metric';

function App() {
  return (
    <>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/Profiles' element={<Profiles />} />
            <Route path='/Chats' element={<Chats />} />
            <Route path='/Metric' element={<Metric />} />
            <Route path='*' element={<NotFound />} />
          </Routes>   
        </main>
    </>
  );
}

export default App








