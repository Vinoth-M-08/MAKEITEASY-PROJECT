import axios from 'axios';
import {useState } from "react";
import "../login/login.css"
function Signup() {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function save(event)
    {
        event.preventDefault();
        try{
    
         await axios.post("http://localhost:8080/hi/save",
        {
        
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password

        });
          alert("Registration Done Successfully");
          setId("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
        
        }
    
          catch(err)
          {
            alert("User Registation Failed");
          }
        }
   
    return ( 
    <div>
    <div class="clr">
    <div class="main-container">
        <h1 class="title">Sign up</h1>
      
        <div class="main-container__content">
          <div class="content__inputs">
            <form class="content__input--form">
              <label for="First-name">
                <input type="text" placeholder="First Name"
                 value={firstName}
                 onChange={(event) => {
                   setFirstName(event.target.value);
                 }}
                 required/>
              </label>
              <label for="Last-name">
                <input type="text" placeholder="Last Name"
                  value={lastName}
                  onChange={(event) =>
                    {
                      setLastName(event.target.value);      
                    }}
               required/>
              </label>
              <label for="email">
                <input type="email" placeholder="Email"
                 value={email}
                 onChange={(event) =>
                   {
                     setEmail(event.target.value);      
                   }}
               required />
              </label>
              <label for="password">
                <input type="password" placeholder="Password" required
                 value={password}
                 onChange={(event) =>
                   {
                     setPassword(event.target.value);      
                   }}
               />
              </label>
            </form>
          </div>
      
          <div class="content__submit">
            
            <button type="button" class="button"  onClick={save}>Sign up</button>
            <div class="content__submit--line"></div>
            <p class="alr">
              Already have an account? 
              <a href="indexs.html">
                <strong>Sign in</strong>
              </a>
            </p>
            <div class="content__footer">
              <p>
                By clicking "Sign up" button above you agree to our
                </p>
                <a href="/">
                  <p>
                  <strong>terms of use</strong>
                  </p>
                  
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div> 
    );
}
export default Signup;