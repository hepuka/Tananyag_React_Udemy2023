/* 
- Header, Footer komponensnek meghívása, itt központilag hívom meg, nem oldalanként
- Header és a Footer között a router és egyéb más megjelenítendő tartalom
- pages könyvtárban lévő index.js fájlba szerveztem ki az összes oldal elérését 
- components könyvtárba lévő index.js-be szerveztem ki az összes komponens elérését.Egyszerűsítve lettek, így egy fájból elérhető az összes oldal és a komponens

*/

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages
import { Home, Contact, Login, Register, Reset, Admin } from "./pages/index.js";

//Components
import { Header, Footer } from "./components/index.js";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/admin/product/productDetails/ProductDetails.component";
import Cart from "./pages/cart/Cart.";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import ReviewProducts from "./components/reviewProducts/ReviewProducts.component";
import Orders from "./components/admin/orders/Orders.component";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<Reset />}></Route>

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout-details" element={<CheckoutDetails />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/checkout-success" element={<CheckoutSuccess />}></Route>
          <Route path="/order-history" element={<OrderHistory />}></Route>
          <Route path="/order-details/:id" element={<OrderDetails />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route
            path="/review-product/:id"
            element={<ReviewProducts />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
