import React, { useEffect, useState, useContext } from 'react';
import  { AccountContext }  from "./Accounts";


const AmazonLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext);
    
    const Onsubmit = event => {
        event.preventDefault();

        authenticate(email, password)
        .then(data => {
            console.log('Logged in!', data);
        })
        .catch(err => {
            console.error('Failed to login!', err);
        })
    };

    const onEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onPasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    return (
        <>
        <form onSubmit={Onsubmit}>
            <input 
                value={email}
                onChange={onEmailChange}
            />
            <input 
                value={password}
                onChange={onPasswordChange}
            />

            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default AmazonLogin;