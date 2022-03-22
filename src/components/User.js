import { Link, Outlet, useParams, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import { UserDetails } from "./UserDetails";
import axios from 'axios';
import React from "react";
const NewUser = () => {

}

function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [newitems, setNewItems] = useState([]);
    const params = useParams();
    const userId = params.userId;

    useEffect(() => {
        let myFirstApi;
        const savedItems = localStorage.getItem("currentApi");
        console.log(JSON.parse(savedItems));
        const savedNewItems = localStorage.getItem(`firstapi-${userId}`);
        const currentApi = localStorage.getItem("currentApi");
        setItems(JSON.parse(currentApi));
        if(savedNewItems){
            setNewItems(JSON.parse(savedNewItems));
            return;
        }
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            setItems(response.data);
            myFirstApi = JSON.stringify(response.data);
            localStorage.setItem(`firstapi-${userId}`, myFirstApi);
            localStorage.setItem("currentApi", JSON.stringify(response.data));
        });
        
      }, []);

    useEffect(() => {
        let getMyApi,myFirstApi;
        getMyApi = localStorage.getItem('firstapi');
        getMyApi = JSON.parse(getMyApi);
        const savedNewItems = localStorage.getItem(`firstapi-${userId}`);
        const currentApi = localStorage.getItem("currentApi");
        setItems(JSON.parse(currentApi));
        if(savedNewItems){
            setNewItems(JSON.parse(savedNewItems));
            return;
        }
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => {
                myFirstApi = JSON.stringify(response.data);
                localStorage.setItem(`firstapi-${userId}`, myFirstApi);
                setNewItems(response.data);
            });
        
      }, [userId]);

      return (
        <ul>
            <div className="contents">
                {items.map((item, index) =>
                <div key={item.id}>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                </div> 
                )}
            </div>
            <div>Details about user {userId}</div>
            <div>
                {newitems.id}
                {newitems.name}
                {newitems.email}
                {newitems.website}
            </div>
        </ul>
      );
    // }
  }

  export {Users, NewUser};

 