import { faV } from "@fortawesome/free-solid-svg-icons";
import { red } from "@mui/material/colors";
import React, { Component, useState, useEffect } from "react";

const CardHooks = () => {

    const [initials, setInitials] = useState("LK");
    const [name, setName] = useState("Vaibhav Nagvenkar");
    const [phone, setPhone] = useState("9511689403");
    const [email, setEmail] = useState("danzo.ftw15@gmail.com");
    const [favorite, setFavourite] = useState(false);


    const myFavourite = () => {
        const myFav = !favorite;
        setFavourite(myFav);
        localStorage.setItem('ourchoice', JSON.stringify(myFav));
    }

    useEffect(() => {
        const gotItems = localStorage.getItem('ourchoice');
        setFavourite(JSON.parse(gotItems));
    }, []);

    const activeClass = favorite ? 'active' : ''
    
    return (
        <section className="card-container">
            <header className="card-header">
                <span initials={initials}></span>
                <h1>{name}</h1>
                <div className={`favorite ${activeClass}`}
                onClick={myFavourite}
                >
                ☆
                </div>
                </header>

            <main>
                <ul>
                    <li>
                        <span>Phone</span>
                        {phone ? phone : 'n/a'}
                    </li>
                    <li>
                        <span>Email</span>
                        {email ? email : 'n/a'}
                    </li>
                </ul>
            </main>
        </section>
    )
}
export default CardHooks;