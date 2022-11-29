import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
    let params = useParams()
    const [detail, setDetail] = useState({})

    const [activeTab, setActiveTab] = useState('instructions')

    


    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_RECIPIE_API_KEY}`)
        const info = await data.json()
        setDetail(info)
    }

    useEffect(() => {
        fetchDetails()
    }, [params.id]);

  return (
    <>
    <div className='details'>
        <div className='container-div'>
            <h4>{detail.title}</h4>
            <img src={detail.image} alt={detail.title} />
        </div>
        <div className='info'>
            <button onClick={() => setActiveTab('instructions')} className={activeTab === 'instructions'? 'button active' : 'button'}>
                Instructions
                </button>
            <button onClick={() => setActiveTab('ingredients')} className={activeTab === 'ingredients'? 'button active' : 'button'}>
                Ingredients
                </button>
                {activeTab === 'instructions' && (
                     <div>
                        <h2>Summary:</h2>
                     <h3 dangerouslySetInnerHTML={{__html : detail.summary}}></h3>
                     <h2>Instructions:</h2>
                     <h3 dangerouslySetInnerHTML={{__html : detail.instructions}}></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                    {detail.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
                )}
        </div>
    </div>
    </>
  )
}

export default RecipePage