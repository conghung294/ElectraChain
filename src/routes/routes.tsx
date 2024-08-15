import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import News from '../components/News/News';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import Profile1 from '../components/Profile1/Profile1';
import Register from '../components/Register/Register';
import Statistical from '../components/Statistical/Statistical';
import Verify from '../components/Verify/Verify';
import Vote from '../components/Vote/Vote';

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} />
        <Route path="/vote" Component={Vote} />
        <Route path="/personalInfo" Component={PersonalInfo} />
        <Route path="/news" Component={News} />
        <Route path="/register" Component={Register} />
        <Route path="/verify" Component={Verify} />
        <Route path="/profile1" Component={Profile1} />
        <Route path="/statistical" Component={Statistical} />
      </Routes>
    </>
  );
}

export default AppRoutes;
