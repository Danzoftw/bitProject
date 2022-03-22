import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";

const MyApi = () => {
    
    const [films, setFilms] = useState({ name: {} });

    const { id } = useParams();

    const fetchDetails = () => {
        fetch(`http://acnhapi.com/v1/sea/${id}`)
        .then(res => res.json())
        .then(data => setFilms(data))
    };
    
    useEffect(()=> {
        fetchDetails();
        console.log(films)
    }, []);

    return (
        <>

        </>
    )
}

export default MyApi;
