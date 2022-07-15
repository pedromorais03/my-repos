import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import Repos from './pages/Repos'

export default function RoutesC(){
    return(
        <BrowserRouter>
            <Routes> 
                <Route exact path="/" element={<Main />} />=
            </Routes>
            <Routes>
                <Route path="/repositorio/:repositorio" element={<Repos />} />
            </Routes>
        </BrowserRouter>
    )
}