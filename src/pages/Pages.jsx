import Home from "./Home"
import {Route, Routes} from 'react-router-dom';
import Cousine from "./Cousine";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Pages = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/couisine/:type" element={<Cousine />}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
    </Routes>
    
  )
}

export default Pages