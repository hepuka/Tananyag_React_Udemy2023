import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

//pages
import Home from "./components/Home.component";
import Blogs from "./components/Blogs.component";
import About from "./components/About.component";

//component
import Navbar from "./components/navbar/Navbar.component";
import NotFound from "./components/NotFound.component";
import BlogDetails from "./components/BlogDetails.component";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* element hogy melyik oldalt akarom hozzárendelni */}
        <Route path="/" element={<Home />} />

        {/* info oldal megjelenítése about/info oldalra */}
        <Route path="/about/*" element={<About />} />
        <Route path="/blogs/*" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route
          path="/view"
          element={
            isLoggedIn ? <Navigate to="/blogs" /> : <h4>Please log in!</h4>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
