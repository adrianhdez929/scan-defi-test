import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'


const AppRouter = () => {
    
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/:categorySlug" element={<CategoryPage />} />
        </Routes>
    )
}

export default AppRouter