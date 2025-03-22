import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/user';
import Error from './components/Error'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Layout = () =>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },  
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"user/:id",
          element:<User/>
        },
      ]
    }
  ])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;