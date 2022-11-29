import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Veg = () => {
  const [veg, setVeg] = useState([])


    useEffect(() => {
        getVeg()
    }, [])

    const getVeg = async () => {
        // const check = localStorage.getItem('veg')

        // if(check) {
        //     setVeg(JSON.parse(check))
        // } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPIE_API_KEY}&number=8&tags=vegetarian`)
            const data = await api.json()

            // localStorage.setItem('veg', JSON.stringify(data.recipes))
            setVeg(data.recipes)

        // }
    }
  return (
    <>
    <div className="cover-div">
        <h3>Vegetarian Picks</h3>
    <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '2rem'
    }}>
        {veg.map(recipe => (
        <SplideSlide  key={recipe.id}>
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

export default Veg