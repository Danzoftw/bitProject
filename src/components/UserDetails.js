// import { useParams } from "react-router-dom"
// import axios from 'axios';
// import React, { useState, useEffect } from "react";
// export const UserDetails = () => {
    
//     const params = useParams();
//     const userId = params.userId
//     const [items, setItems] = useState([]); 
//     console.log(userId);

//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//             setItems(response.data);
//         });
//       }, []);


//     return (
//         <div>
//             Details about user {userId}
//         </div>
//     )
// }