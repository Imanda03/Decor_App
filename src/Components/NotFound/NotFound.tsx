import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-to-home-link">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
