import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [input, setInput] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        navigate('/search/' + input)
    }

  return (
    <div className='form-div'>
        <form onSubmit={handleSubmit}>
        <input 
        className='search-now' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        type="text" />
    </form>
    </div>
  )
}

export default Search