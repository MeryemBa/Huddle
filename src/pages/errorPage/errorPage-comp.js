import React from "react";
import { Link } from "react-router-dom";
import "./errorPage-styles.scss";

function ErrorPage() {
  return (
    <div className="errorContainer">
      <div>
        <h1>
          4<span>0</span>4
        </h1>

        <h2>we are sorry, but the page you requested was not found</h2>
        <Link to="/" className="link">
          Go Home
        </Link>
      </div>
    </div>
  );
}
export default ErrorPage;
