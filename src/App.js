import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from
'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Form from './Form';
import Courses from './Courses';
import Reservations from './Reservations';
import Chat from './Chat';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element ={<Navbar />} />
          <Route path="/sign-up" element ={<Form />} />
          <Route path="/courses" element ={<Courses />}/>
          <Route path="/reservations" element ={<Reservations />}/>
          <Route path="/chat" element ={<Chat />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
