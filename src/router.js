import React from 'react'
import { Routes, Route } from 'react-router-dom'


const AppRouter = () => {
    
    return (
        <Routes>
            <Route exact path="/" render={() => {<h1>Hello world</h1>}} />
        </Routes>
    )
}

export default AppRouter