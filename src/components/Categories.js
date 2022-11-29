import Pizza from '../images/pizza.png'
import Sweets from '../images/sweet.png'
import Hambur from '../images/hambur.png'
import Noodles from '../images/noodles.png'

import { NavLink } from "react-router-dom"

const Categories = () => {
  return (
    <div className='category'>
        <NavLink to={'/cuisine/italian'}>
        <div>
            <img src={Pizza} alt="pizza"/>
            <p>Italian</p>
        </div>
        </NavLink>
        <NavLink to={'/cuisine/american'}>
        <div>
            <img src={Hambur} alt="hamburger"/>
            <p>American</p>
        </div>
        </NavLink>
        <NavLink to={'/cuisine/desserts'}>
        <div>
            <img src={Sweets} alt="Sweet"/>
            <p>Desserts</p>
        </div>
        </NavLink>
        <NavLink to={'/cuisine/noodles'}>
        <div>
            <img src={Noodles} alt="Noodles"/>
            <p>Noodles</p>
        </div>
        </NavLink>
    </div>
  )
}

export default Categories