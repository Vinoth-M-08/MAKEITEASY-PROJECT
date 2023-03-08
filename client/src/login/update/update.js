import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect} from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function UpdateForm() {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mydata, setMyData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/hi/get")
          .then((response) => {
              console.log(response.data)
              setMyData(response.data)
          })
          // .catch((error) => setIsError(error.message));
  }, []);
    async function save(event) {
      let length=Object.keys(mydata).length;
      let f=0;
        event.preventDefault();
        for(let i=0;i<length;i++){
                  if(Number(id)===mydata[i].id){
                          f=1;
                  
        
        try {
            await axios.put("http://localhost:8080/hi/put",

                { id:id,
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password

                });
            alert("Updation Successfully Completed");
            setId("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");


        }
        catch (err) {
            alert("User Updation Failed");
        }
      }
      if(f==0){
        alert("Id is not found");
      }
      else{
        alert("enter valid")
      }
    }
  }

    return (
        <div>
    <div class="clr">
    <div class="main-container">
        <h1 class="title">Updation</h1>
      
        <div class="main-container__content">
          <div class="content__inputs">

            <form class="content__input--form">
            <label for="First-name"></label>
            <label for="id">
            <input type="number" placeholder='Enter ID Number' value={id} onChange={(e) => setId(e.target.value)}/>
          <div class="content__submit">
            
            <button type="button" class="button"  onClick={save}>Search</button>
            </div>
            </label>
              <label for="First-name">
                <input type="text" placeholder="First Name"
                 value={firstName}
                 onChange={(event) => {
                   setFirstName(event.target.value);
                 }}
                />
              </label>
              <label for="Last-name">
                <input type="text" placeholder="Last Name"
                  value={lastName}
                  onChange={(event) =>
                    {
                      setLastName(event.target.value);      
                    }}
                />
              </label>
              <label for="email">
                <input type="email" placeholder="Email"
                 value={email}
                 onChange={(event) =>
                   {
                     setEmail(event.target.value);      
                   }}
                />
              </label>
              <label for="password">
                <input type="password" placeholder="Password"
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
            
            <button type="button" class="button"  onClick={save}>UPDATE</button>
            </div>
          </div>
        </div>
      </div>
      </div> 
    );
}
