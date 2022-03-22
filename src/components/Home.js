import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import CardHooks from "../CardHooks";
// import ShoppingItems from "./ShoppingList/ShoppingItems";
import ShoppingItems from "../ShoppingList/ShoppingItems";
import Parent from "./Filedata";
import MyApi from "./MyApi";

const Home = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  return (
  
    <div className="container">
      <h2>Hello New Home!</h2>
      {/* <header className="jumbotron">
        <h3>{content}</h3>
      </header> */}
      {/* <div className="vehicles">
        {films.map((film, index) => {
          const id = film.url.split('/')[5];
          return (
            <li key={film.title}>
              <Link 
                to={`/film/${id}`}>
                {film.title}
              </Link>
            </li>
          )
        })}
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={""}>
            <Route path="film/4" element={{Parent}}/>
          </Route>
        </Routes>
      </div> */}
        {/* <CardHooks />  
        <ShoppingItems />
        <Parent /> */}
    </div>
  );
};
export default Home;