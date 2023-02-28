/* 
- Logo-t kiszervezni egy kisebb komponensbe, hogy a responzív menübe is át tudjuk adni
- styles["header-right"] []-be kell rakni mert - jel van a stílus nevében
- const [showMenu, setShowMenu] = useState(false); haburger menü state-je, látszódjon vagy sem
- hidemenU() metódussal zárom be a mobilmenüt. A metódust meghívom a div-re való kattintásra és az ul-re és a logint és aregistert tartalmazó divre is
- NavLink kell a Link helyett, hogy jelezni tudjuk az aktív oldalt. Ha kilogoljuk a NavLink state tulajdonságát akkor kapunk egy isActive tulajdonságot, és ennek a true, fakse értékének a módosításával tudjuk elérni, hogy változzon a menüelem css class-ja
- activeLink() metódussal változtatkuj a linkek stílusát, kiszervezve egy függvénybe és ezt a függvénynevet adjuk meg a link-nél mint className

- ShowOnLogin közé kell tenni azokat a menüket amelyek látszódhatnak a bejelentkezés után
*/

import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
import { AdminOnlyLink } from "../adminOnlyRoute/AdminOnlyRoute";

import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";

//Firebase
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <h2>
          hepuka<span>Shop</span>.
        </h2>
      </Link>
    </div>
  );
};

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fixNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixNavbar);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, []);

  //monitor that user is login or logout
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user);

        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");

        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const Cart = () => {
    return (
      <span className={styles.cart}>
        <Link to="/cart">
          Cart
          <FaShoppingCart size={20} />
          <p>{cartTotalQuantity}</p>
        </Link>
      </span>
    );
  };

  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles.header}>
        <Logo />

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          >
            {" "}
          </div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              <Logo />
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <AdminOnlyLink>
                <Link to="/admin/home">
                  <button className="--btn --btn-primary">Admin</button>
                </Link>
              </AdminOnlyLink>
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>
                  Login
                </NavLink>
                <NavLink to="/register" className={activeLink}>
                  Register
                </NavLink>
              </ShowOnLogout>

              <ShowOnLogin>
                <a href="#home" style={{ color: "red" }}>
                  <FaUserCircle size={16} /> {displayName}
                </a>
                <NavLink to="/order-history" className={activeLink}>
                  My Orders
                </NavLink>
                <NavLink
                  to="/login"
                  className={activeLink}
                  onClick={logoutUser}
                >
                  Log Out
                </NavLink>
              </ShowOnLogin>
            </span>
            <ShowOnLogin>
              <Cart />
            </ShowOnLogin>
          </div>
        </nav>

        {/* responsive menü */}
        <div className={styles["menu-icon"]}>
          <Cart />
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
