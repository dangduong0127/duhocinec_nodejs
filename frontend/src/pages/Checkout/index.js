import React, { useEffect } from "react";
import "./styles.scss";
import { getPaymentInfo } from "../../utils/api";
import { useLocation } from "react-router-dom";
const Checkout = () => {
  const location = useLocation();
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = getPaymentInfo(location?.state.orderId);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAPI();
  }, []);

  return (
    <section className="checkout-wrapper">
      <div className="container">Checkout</div>
    </section>
  );
};

export default Checkout;
