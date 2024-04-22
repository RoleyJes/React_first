import React from "react";
import Err404 from "../asset/error404.jpg";
import { useRouteError, Link } from "react-router-dom";
import "../App.css";

function Error404() {
  /* 404 error page return when a non primary route is entered */
  const error = useRouteError();
  console.error(error);

  return (
    <div className="section404">
      <figure className="errImgCont">
        <img src={Err404} alt="404" className="errorimg" />
      </figure>
      <h2 className="text404">404</h2>
      <p className="wahala">Wahala Wahala Wahala!!!</p>
      <p className="address">You've entered a wrong address</p>
      <Link to="/">
        <button className="viewBtn">Show Me Road</button>
      </Link>
    </div>
  );
}

export default Error404;
