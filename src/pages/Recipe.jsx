import { useEffect, useState } from "react"
import styled from "styled-components"
import {useParams} from "react-router-dom"

const Recipe = () => {
  let params = useParams();
  const [fetchedDetails, setFetchedDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails= async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_APIKEY}`)
    const detaildata= await data.json();
    setFetchedDetails(detaildata);
  }

  useEffect(()=>{
    fetchDetails();
  },[params.name])
  return (
    <DetailedWrapper>
      <div>
        <h2>{fetchedDetails.title}</h2>
        <img src={fetchedDetails.image} alt=""/>
      </div>
      <Info>
        <Button onClick={()=>setActiveTab("instructions")}>Instructions</Button>
        <Button onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
      </Info>
      </DetailedWrapper>
  )
}
const DetailedWrapper= styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  

`
const Info = styled.div`
  margin-left: 10rem;

`

export default Recipe