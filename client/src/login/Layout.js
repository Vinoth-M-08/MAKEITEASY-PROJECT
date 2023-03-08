import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import Signup from "./signup";
import Diss from "./Display/display";
import Deleteform from "./Display/Delete/delete";
import UpdateForm from "./update/update";
import "../Layout/Layout.css"
function Intro() {
    return (  
        <Router>
      <ul>
  <li>
    <Link to="/Signup" class="link">SignUp</Link>
  </li>
  <li>
    <Link to="/Diss" class="link">Datas</Link>
  </li>
   <li>
  <Link to="/Deleteform" class="link" >DeleteData</Link>
  </li> 
   <li>
  <Link to="/UpdateForm" class="link" >UpdateDate</Link>
  </li> 
</ul>
<Routes>
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/Diss" element={<Diss/>}/>
  <Route path="/Deleteform" element={<Deleteform/>}/>
  <Route path="/UpdateForm" element={<UpdateForm/>}/>
  
</Routes>
    </Router>
    );
}

export default Intro;