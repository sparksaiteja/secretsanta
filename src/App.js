
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';
import Reveal from './components/pages/Reveal';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path:'/reveal',
    element : <Reveal></Reveal>
  }

])

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  );
}

export default App;
