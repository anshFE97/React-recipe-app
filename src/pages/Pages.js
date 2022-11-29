import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import RecipePage from './RecipePage'
import SearchRes from './SearchRes'

const Pages = () => {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:search" element={<SearchRes />} />
        <Route path='/recipe/:id' element={<RecipePage />} />
    </Routes>

  )
}

export default Pages