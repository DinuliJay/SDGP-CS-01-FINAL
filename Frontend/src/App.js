import React from 'react';
import MainWebcam from './Components/Webcam/MainWebcam';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Form from './Components/Form';
import SignUp from './Components/Login/signup';
import Login from './Components/Login/login';
import Feedback from './Components/Feedback';
import AdditionalNav from './Components/AdditionalNav';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
  
      <Routes>
        {/* Render the Header component inside the Route for the home page */}
        <Route path='/' element={<>
          <Header />
          <HomePage />
          <Feature/>
          <Contact/>
          <Footer />
        </>} />

        <Route path='/ad-nav' element={<AdditionalNav/>}/>
        <Route path='/webcam' element={<MainWebcam />} />
        
        <Route path='/form' element={<Form />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feedback' element={<Feedback />} /> {/* New route for Feedback component */}
      </Routes>
    </>
  );
}
