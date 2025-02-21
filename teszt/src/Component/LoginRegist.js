import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function LoginRegist() {

    const [username,setUsername] = useState('');
    
    const [password,setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3001/#/loginpage',{username,password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return ( 
        <div className="d-flex vh-100 justify-content-center align-items-center bg-dark">
            <div className="p-3 bg-white w-40">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username"></label>
                        <input type="text" placeholder="Enter your username..." className="form-control" onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"></label>
                        <input type="password" placeholder="Enter your password..." className="form-control" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginRegist;