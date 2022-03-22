import React, { Component, useState, useEffect } from "react";
import Card from "../Card";

import './addressBook.css';

export default function ShippingList() {

        const [contacts, setContacts] = useState([
            {
                name: 'Jane sins',
                initials: 'JS',
                favorite: true,
                phone: '122-122-332',
                email: 'janesmith@gmail.com'
            },
            {
                name: 'pew pew',
                initials: 'PP',
                favorite: false,
                phone: '442-132-232',
                email: 'pewpew@gmail.com'
            },
            {
                name: 'Jane Smith',
                initials: 'JS',
                favorite: false,
                phone: '122-122-332',
                email: 'janesmith@gmail.com'
            }
        ])
        
        function handleFavToggle(contactIndex){
            const newContactsState = [...contacts];
            console.log(newContactsState)
            newContactsState[contactIndex] = {
                ...newContactsState[contactIndex], favorite: !newContactsState[contactIndex].favorite
            }
            localStorage.setItem("contacts", JSON.stringify(newContactsState));
            setContacts(newContactsState);
        }

        const newContacts = contacts;

        useEffect(() => {
            setContacts(JSON.parse(localStorage.getItem("contacts")));
        }, []);

        return (
            <>
            <h3>Address Book</h3>
            {/* { !contacts.length && <p>No Contacts!</p> } */}

            {contacts.map((contact, index) => {
                return (
                    <Card
                        contact={contact}
                        handleFavToggle={handleFavToggle}
                        index={index}
                        key={index}
                    />
                )
            })}
            </>
        )
    
}
