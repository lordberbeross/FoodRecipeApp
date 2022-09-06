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
    <Grid>
        {cousine.map((item)=>{
           return(
            <Card key={item.id}>
              <img src={item.image}/>
              <h4>{item.title}</h4>
            </Card>
           )
        })}
    </Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card= styled.div`
  img{
    width:100%;
    border-radius:2rem;
  }
  a{
    text-decoration:none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Cousine