import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'


const Cousine = () => {

    const [cousine, setCouisine]= useState([]);
    let params= useParams();

    const getCousine = async (name) =>{
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCouisine(recipes.results);
    }

    useEffect(()=>{
        getCousine(params.type)
    },[params.type])
  return (
    <div>Cuisine</div>
  )
}

export default Cousine