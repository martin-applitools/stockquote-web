import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Notif } from '../Notifications/Notif';

export const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmitHandler = (event) => {
      event.preventDefault();
      props.loginHandler(username, password);
    }
  
    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }
  
    return (
        <main>
            <section id={"side-menu-solid"}></section>
            <section id={"login-content"}>
                <Logo />
                <h1> Log In To Your Account</h1>
                <Notif message={props.notif.message} style={props.notif.style} />
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username"></label>
                    <input id="username" placeholder={"Please Enter Your Username"} autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
                    <label htmlFor="password"></label>
                    <input id="password" placeholder={"Please Enter Your Password"} autoComplete="off" onChange={onChangePassword} value={password} type="password" />
                    <button id="submit-button" type="submit" className="btn">Submit</button>
                </form>
            </section>
        </main>
    )
}
