import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Cursos from '../components/pages/Cursos';
import Docentes from '../components/pages/Docentes';

export default function MenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/docentes" element={<Docentes />} />
        </Routes>
    )
}