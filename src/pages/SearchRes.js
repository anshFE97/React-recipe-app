import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SearchRes = () => {

    const [searched, setSearched] = useState([])

    let params = useParams()


    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPIE_API_KEY}&query=${name}&number=10`)
        const recipies = await data.json()
        setSearched(recipies.results)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])
  return (
    <>  
    <div className='grid'>
        {searched.map((item) => (
            <Link to={"/recipe/" + item.id}>
            <div className='grid-cards' key={item.id}>
                <img src={item.image} alt="dish" />
                <h4>{item.title}</h4>
            </div>
            </Link>
        ))}
    </div>
    </>
  )
}

export default SearchRes