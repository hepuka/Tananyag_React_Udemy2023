import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data.js";

const BlogDetails = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [author, setAuthor] = useState("");

  const { id } = useParams();

  useEffect(() => {
    //megkeressük a blogot az id alapján amire kattintottunk
    const thisBlog = blogs.find((item) => item.id === parseInt(id));

    //thisblog alapján beállítjuk a state-eket
    setTitle(thisBlog.title);
    setAuthor(thisBlog.author);
    setDetails(thisBlog.details);
  });

  return (
    <div className="container">
      <h1 className="--text-center">{title}</h1>
      <hr />
      <p>
        <b>Author: {author}</b>
      </p>
      <br />
      <p>{details}</p>
      <div className="--my2">
        <Link to="/blogs">{`<<< Back to Blogs`}</Link>
      </div>
    </div>
  );
};

export default BlogDetails;
