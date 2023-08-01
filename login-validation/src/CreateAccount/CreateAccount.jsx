import React, { useState } from 'react';
import '../CreateAccount/CreateAccount.css';
import CurrentDate from '../DateandTime/CurrentDate';
import { Link, useNavigate } from 'react-router-dom';



function CreateAccount() {
    const [name, setname] = useState('')
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [passwordvisibility, setpasswordvisibility] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log('formSubmitted');
        console.log("Full Name", name);
        console.log("Email", email);
        console.log("Username", username);
        console.log("Password", password);
    }


    return (
        <div className='create-account'>
            <div className="create-container">
                <div className="left">
                    <h2>Create Account</h2>
                    <div className="input-area">

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='name'>Full Name:</label>
                                <input type='text' id='name' value={name}
                                    onChange={(e) => setname(e.target.value)} required />


                            </div>
                        </form>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='username'>User Name:</label>
                                <input type='text' id='username' value={username}
                                    onChange={(e) => setusername(e.target.value)} required />


                            </div>
                        </form>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='email'>E-mail</label>
                                <input type='email' id='email' value={email}
                                    onChange={(e) => setemail(e.target.value)} required />


                            </div>
                        </form>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='password'>Password:  </label>
                                <div className="password-field">
                                    <input type='password' id='password' value={password}
                                        onChange={(e) => setpassword(e.target.value)} required />
                                    <span class="material-symbols-outlined">
                                        visibility
                                    </span>
                                </div>


                            </div>
                        </form>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <button type='submit'>Create Account</button>

                            </div>

                        </form>

                        <form onSubmit={handleSubmit}>
                            <div className="links">
                                <Link to='/Login-page' className='animated-link'>Already Have an account</Link>
                                <a href='#123'>Forgot Account?</a>
                            </div>

                        </form>

                    </div>
                </div>
                <div className="right">
                    <div className="time-div">
                        <CurrentDate />
                    </div>
                    <div className="bottom">

                        <div className="other-account">
                            <div className="image-div">
                                <img src='data:image/jpeg;base64,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'
                                    className='apple' alt='png'></img>
                                <p>sign-in with Apple</p>
                            </div>
                            <div className="image-div">
                                <img className='google' id='google' src='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png' alt='png'></img>
                                <p>sign-in with Google</p>
                            </div>

                            <div className="image-div">
                                <img src='https://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png'
                                    className='facebook' alt='png'></img>
                                <p>Sign-in with Facebook</p>
                            </div>
                            <div className="image-div">
                                <img src='data:image/png;base64,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'
                                    className='twitter' id='twitter' alt='png'></img>
                                <p>Sign-in with twitter</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
