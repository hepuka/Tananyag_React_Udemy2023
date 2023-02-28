import React, { useEffect } from "react";
import Product from "../../components/admin/product/Product.component";
import { AdminOnlyLink } from "../../components/adminOnlyRoute/AdminOnlyRoute";
import Slider from "../../components/slider/Slider.component";

const Home = () => {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProductSection = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 920,
          behavior: "smooth",
        });

        return;
      }
    };

    scrollToProductSection();
  }, [url]);

  return (
    <div>
      <Slider />
      <AdminOnlyLink />
      <Product />
    </div>
  );
};

export default Home;
