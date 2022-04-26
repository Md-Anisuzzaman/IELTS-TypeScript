import React, { useState } from 'react';
import './Register.css'
import { NavLink } from 'react-router-dom';


const Register = () => {

  

    const [loginData, setLoginData] = useState({});


  
    return (
        <>
            <div className="register-body">
                <div className="container register-container ">
                    <div className='row'>
                        <div>
                            <h1 className='text-light mb-3 ms-2'>Register</h1>
                            <img className='w-25' src="https://e7.pngegg.com/pngimages/710/665/png-clipart-computer-icons-user-profile-symbol-register-button-miscellaneous-blue-thumbnail.png" alt="" />
                            <form >
                                <div className='register-input-filed'>
                                    <input className="form-control" type="text" name="email" required placeholder='User Email' autoComplete='off' />
                                </div>
                                <div className='register-input-filed'>
                                    <input  className="form-control" type="password" name="password" required placeholder='Password' autoComplete='off' />
                                </div>
                                <div className='register-input-filed'>
                                    <input className="form-control" type="password" name="password2" placeholder='Re-enter your password' required autoComplete='off' />
                                </div>
                                <button className='btn-style-register btn btn-primary' type="submit">Sign In</button>
                                <br />
                                <br />
                                <NavLink className="text-warning" style={{ textDecoration: 'none', fontSize: '25px' }} to='/login'>Already Registered? Go to Login</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;