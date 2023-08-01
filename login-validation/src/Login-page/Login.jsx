import React, { useState } from 'react'
import CreateAccount from '../CreateAccount/CreateAccount';
import '../Login-page/Login.css'
import { Link, useNavigate } from 'react-router-dom';



function Login() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [passwordvisibility, setpasswordvisibility] = useState(false);


    const handleLogin = (e) => {
        console.log("Username", username);
        console.log("Password", password);
    }

    return (

        <div className="login-container">

            <div className="login-form">
                <h2>
                    Login Here
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="form-login">
                        <label htmlFor='username'>User Name:</label>
                        <input type='text' id='username' value={username}
                            onChange={(e) => setusername(e.target.value)} required />

                    </div>
                </form>


                <form onSubmit={handleLogin}>
                    <div className="form-login">
                        <label htmlFor='password'>Password:</label>
                        <div className="password-field">
                            <input type='password' id='password' value={username}
                                onChange={(e) => setusername(e.target.value)} required />
                            <span class="material-symbols-outlined">
                                visibility
                            </span>
                        </div>

                    </div>
                </form>
                <form onSubmit={handleLogin}>
                    <div className="form-login">
                        <button type='submit'>Login</button>

                    </div>

                </form>

                <form onSubmit={handleLogin}>
                    <div className="login-links">
                        <Link to='/' className='animated-link'>Don't Have an account?</Link>
                        <a href='#123'>Forgot Account?</a>
                    </div>

                </form>
            </div>
        </div>


    )
}

export default Login