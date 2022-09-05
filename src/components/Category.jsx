import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Category = () => {
  return (
    <List>
     
        <NavLink to={'/couisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
       
        <NavLink to={'/couisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
      
        <NavLink to={'/couisine/Thai Food'}>
            <GiNoodles/>
            <h4>Thai Food</h4>
        </NavLink>
      
        <NavLink to={'/couisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </NavLink>
    </List>
  )
}
const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
    
`;
export default Category