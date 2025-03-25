import React, { useEffect, useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { useCart } from "../../hooks/Context/cart.context";
import { Link } from "react-router-dom";
const BtnCart = () => {
  const { cart } = useCart();

  return (
    <Link to={"/cart"}>
      <Button className="btn-cart" type="primary">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="quantity-cart">{cart.length}</span>
      </Button>
    </Link>
  );
};

export default BtnCart;
