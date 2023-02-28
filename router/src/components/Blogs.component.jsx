import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data.js";

function Blogs() {
  return (
    <div className="container">
      <div className="--center-all">
        <h1>Blogs</h1>
        <p>
          Welcome to the <b>Blogs</b> page
        </p>
      </div>

      <article>
        {blogs.map((item) => {
          const { id, title, author } = item;

          return (
            <div className="--card --m --p">
              <h4>{title}</h4>
              <p>By {author}</p>
              <Link to={`/blog/${id}`}>Read More</Link>
            </div>
          );
        })}
      </article>
    </div>
  );
}

export default Blogs;
