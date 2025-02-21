import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function LoginRegist() {
    return ( 
        <div className="d-felx justify-content-center align-item-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="username"></label>
                        <input type="text" placeholder="Enter your username..." className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"></label>
                        <input type="password" placeholder="Enter your pasword..." className="form-control"/>
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginRegist;