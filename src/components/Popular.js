import { useState, useEffect } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";


const Popular = () => {

    const [popular, setPopular] = useState([''])


    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        // const check = localStorage.getItem('recipes')

        // if(check) {
        //     setPopular(JSON.parse(check))
        // } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPIE_API_KEY}&number=10`)
            const data = await api.json()

            // localStorage.setItem('recipes', JSON.stringify(data.recipes))
            setPopular(data.recipes)

        // }
    }




  return (
    <>
    <div className="cover-div">
        <h3>Popular Picks</h3>
    <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '2rem'
    }}>
        {popular.map((recipe) => (
        <SplideSlide key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
                <div className="card">
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="gradient"></div>
                </div>
            </Link>
        </SplideSlide>
        ))}     
    </Splide>
    </div>
    </>
  )
}

export default Popular