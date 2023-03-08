import React from 'react';
import axios from 'axios';
import { useState,useEffect} from 'react';
import "../Delete/delete.css"
import Signup from '../../signup';
function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    const [mydata, setMyData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/hi/get")
          .then((response) => {
              console.log(response.data)
              setMyData(response.data)
          })
          // .catch((error) => setIsError(error.message));
  }, []);
    function del() {
        // useEffect(() => {
            let length=Object.keys(mydata).length;
            let f=0;
              //event.preventDefault();
              for(let i=0;i<length;i++){
                        if(Number(id)===mydata[i].id){
                                f=1;
                        
              
              try {
        axios
            .delete('http://localhost:8080/hi/del?id=' + id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
              }
              catch(err){
                alert("Registration failed");
              }
            }
            if(f==0){
                alert("Id not found");
            }
            else{

            }
    }
}
    return (
        <>
            
        <div className='panel'> 
       
        <div class="state"><br/><i class="fa fa-unlock-"></i><br/><h1>Delete</h1></div>
            <div>
            <div className='form'>
                <input type="number" placeholder='Enter Your ID' value={id} onChange={(e) => setId(e.target.value)}>
                </input>
                </div>
            </div>

            <button type="Submit" class="login" onClick
                ={del}>Submit</button>
                
           
            <h2>
                {error}
            </h2>
            

            </div>
    
        </>
    );
}

export default Deleteform;
