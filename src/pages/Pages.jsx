import Home from "./Home"
import {Route, Routes} from 'react-router-dom';
import Cousine from "./Cousine";

const Pages = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cousine/:type" element={<Cousine />}/>
    </Routes>
    
  )
}

export default Pages