import { createContext, useContext, useState, useEffect } from "react";
import { getAllCart } from "../../utils/api";
import { AuthContext } from "./auth.context";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("shoppingCart")) || []
  );

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCart();
        const data = result.data.cart;
        const orderDetails = data.map((item) => item.orderDetails);
        const courses = orderDetails.flat();
        // setCart(courses.flat());
        console.log("cart from user", courses);
        console.log("cart local", cart);

        let currentCourse = courses.map((item) => {
          return { id: item.course_id };
        });

        const uniqueCourse = cart.filter(
          (item2) => !currentCourse.some((item1) => item1.id === item2.id)
        );
        if (uniqueCourse.length > 0) {
          currentCourse = [...currentCourse, ...uniqueCourse];
        }
        console.log("find", currentCourse);
        setCart(currentCourse);
      } catch (e) {
        console.log(e);
      }
    };
    if (auth.isAuthenticated) {
      fetchData();
    } else {
      setCart([]);
    }
  }, [auth.isAuthenticated]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
