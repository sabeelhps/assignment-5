import React,{useEffect, useRef} from 'react';
import styles from './Login.module.css';
import users from '../data/users.json';
import { useNavigate,Navigate } from 'react-router-dom';


const Login = () => {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    const currentUser = JSON.parse(window.localStorage.getItem('currentUser')) || null;


    const formSubmitHandler = (e) => {
        e.preventDefault();
        const username =  usernameInputRef.current.value;
        const password = passwordInputRef.current.value;

        const foundUser = users.find((user) => user.username === username);
        
        if (foundUser && foundUser.password === password) {
            console.log(`Logging the user in...`);
            window.localStorage.setItem('currentUser', JSON.stringify(foundUser));
            navigate('/dishes');
        } else {
            alert('You Entered the wrong credentials!');
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate('/dishes');
        }
    }, []);
   

    return (
        <div>
            <div>
                { !currentUser &&  
                    <form onSubmit={formSubmitHandler}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                placeholder="username"
                                id="username"
                                ref={usernameInputRef}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Username</label>
                            <input
                                type="password"
                                placeholder="password"
                                id="password"
                                ref={passwordInputRef}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                }
            </div>
      </div>
    )
}

export default Login;