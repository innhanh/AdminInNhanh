import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from '../../pages/dashboard/Dashboard';
import Register from '../../pages/register/Register';
import Authen from '../../pages/authen/Authen';

function Router(props) {
    return (
        <Routes>
            <Route exact path='/' element={<Authen />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
}

export default Router;