import React, { Component, useState } from "react";

const Card = (props) => {
    const {
        contact,
        index
    } = props

    const activeClass = contact.favorite ? 'active' : ''

    return (
        <section className="card-container">
            <header className="card-header">
            <span initials={contact.initials}></span>
            <h1>{contact.name}</h1>
            <div className={`favorite ${activeClass}`}
            onClick={() => { props.handleFavToggle(index) }}
            >
             ☆
            </div>
            </header>

            <main>
                <ul>
                    <li>
                        <span>Phone</span>
                        {contact.phone ? contact.phone : 'n/a'}
                    </li>
                    <li>
                        <span>Email</span>
                        {contact.email ? contact.email : 'n/a'}
                    </li>
                </ul>
            </main>
        </section>
    )
}
export default Card;