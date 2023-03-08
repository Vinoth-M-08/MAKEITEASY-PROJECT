import { useState, useEffect } from "react";
import "../Display/display.css"
import axios from "axios";

const Diss = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8080/hi/get")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    

    return (
        <>
            <h1 className="head">All users</h1>
            {isError !== "" && <h2>{isError}</h2>}
              
            <div className="grid">
                        <table className="table caption-top vino">
                            
                                <thead>
                                    
                                    <th scope="col">Id</th>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    
                                </thead>
                               <tbody>
                                
                {myData.slice(0, 8).map((post) => {
                    return (
                                <tr key={(post.id)} className="tr">
                                    <td>{post.id}</td>
                                    <td>{post.firstName}</td>
                                    <td>{post.lastName}</td>
                                    <td>{post.email}</td>
                                    <td>{post.password}</td>
                                    
                                </tr>
                    )
                })
            }
                                </tbody>
                            </table>
                        
            </div>
                    
        </>
    );
};

export default Diss;