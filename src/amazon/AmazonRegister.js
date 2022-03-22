import React, { useEffect, useState } from 'react';
import UserPool from './UserPool';

const AmazonRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Onsubmit = event => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if(err) console.log(err);
            console.log(data);            
        });
    }
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

            <button type="submit">Register</button>
        </form>
        </>
    )
}

export default AmazonRegister;