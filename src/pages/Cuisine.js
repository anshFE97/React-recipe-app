import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Cuisine = () => {

    

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPIE_API_KEY}&query=${name}&number=8`)
        const recipies = await data.json()
        setCuisine(recipies.results)
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])


  return (
    <>
    <div className='grid'>
        {cuisine.map((item) => (
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

export default Cuisine