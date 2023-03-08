import logo from './logo.svg';
import './App.css';
import Signin from './dummy';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function Nee() {
  return (

<>
<BrowserRouter>
<Routes>
<Route exact path="/" element={<Signin/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default Nee;
