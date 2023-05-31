import './App.css';
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Feed from '../src/components/Feed.js';
import Login from './components/Login';
import Signup from './components/Signup';
import MyProfile from './components/Profile';
import Messages from './components/Messages';


import Root from './components/Root';

const router = createBrowserRouter( createRoutesFromElements (
  <Route path='/' element={ <Root/> }>
    <Route path='' element={ <Feed /> } />
    <Route path='signup' element={ <Signup /> } />
    <Route path='login' element={ <Login /> } />
    <Route path='myprofile' element={ <MyProfile /> } />  
    <Route path='messages' element={ <Messages /> } />  
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={ router } />
  );
}
