import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';

function App() {

    return (
        <BrowserRouter>
        <Routes >
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
        </Routes >
        </BrowserRouter>

    );
}

export default App;
