import React from "react";
import { Routes, Route } from "react-router-dom";
import Info from "./Info.component";

function About() {
  return (
    <div className="--center-all">
      <h1>About</h1>
      <p>
        Welcome to the <b>About</b> page
      </p>

      {/* nested route 
        az about oldalról nyílik beágyazva: /about/info
      */}
      <Routes>
        <Route path="info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default About;
