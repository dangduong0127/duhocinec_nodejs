import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "../Chatbot";
import BtnCart from "../ButtonCart";
import { CartProvider } from "../../hooks/Context/cart.context";
const Layout = ({ children }) => {
  return (
    <CartProvider>
      <Header />
      <main>
        {children}
        <Chatbot />
        <BtnCart />
      </main>
      <Footer />
    </CartProvider>
  );
};

export default Layout;
