import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/Context/cart.context";
import { getCourseToCart, createOrder } from "../../utils/api";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Table,
  Space,
  Statistic,
  Button,
  Popconfirm,
  notification,
} from "antd";
import { CreditCardOutlined, DeleteOutlined } from "@ant-design/icons";
import getImageUrl from "../../utils/getImage";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const columns = [
    {
      title: "STT",
      dataIndex: "itemId",
      key: "itemId",
      render: (text) => <span>{text}</span>,
    },

    {
      title: "Product",
      dataIndex: "itemName",
      key: "itemName",
      render: (text, record) => {
        return (
          <div className="product-item">
            <img
              className="thumbnail-product"
              src={getImageUrl(record.itemImage)}
              alt={text}
            />
            <Link to={`/khoa-hoc${record.itemSlug}`}>{text}</Link>
          </div>
        );
      },
    },

    {
      title: "Price",
      key: "itemPrice",
      dataIndex: "itemPrice",
      render: (text, record) => (
        <Space size="middle">
          <p>
            {parseFloat(text).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </Space>
      ),
    },

    {
      title: "action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => {
        return (
          <Popconfirm
            placement="topLeft"
            title="Are you sure you want to delete"
            okText="Yes"
            cancelText="No"
            onConfirm={() => hanldeDelete(record.key)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  const hanldeDelete = (id) => {
    if (id) {
      const deleted = cart.filter((item) => item.id !== id);

      setCart(deleted);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCourseToCart(cart);
        setCartData(result.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [cart]);

  const handleCreateOrder = async () => {
    try {
      const result = await createOrder(cartData.courses, totalPrice);
      const response = result.data;

      if (response.success) {
        setCart([]);
        notification.success({
          message: "Tạo đơn hàng thành công",
          description: "Hãy tiến hành thanh toán",
        });
        navigate("/checkout");
      } else {
        const courses = cartData.courses.map((item) => item.title);
        notification.error({
          message: `Khoá học ${courses.join(", ")} bạn đã đăng ký rồi!!`,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dataSource = cartData?.courses?.map((prev, index) => {
    return {
      key: prev.id,
      itemId: index,
      itemName: prev.title,
      itemImage: prev.thumbnail,
      itemSlug: prev.slug,
      itemPrice: `${prev.price}`,
    };
  });

  let totalPrice = cartData?.courses?.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0);

  return (
    <section className="cart-wrapper">
      <div className="container">
        {cart.length > 0 ? (
          <div>
            <Layout>
              <Breadcrumb>Cart</Breadcrumb>
              <br></br>
              <Row justify="end">
                <Col>
                  <Button type="default" danger>
                    <DeleteOutlined />
                    &nbsp;
                    <span>Delete Cart</span>
                  </Button>
                </Col>
              </Row>
              <h2>
                Total Items <strong>{cart.length}</strong>
              </h2>
              <br></br>
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
              />
              <Row justify="end">
                <Col>
                  <Statistic
                    title="Total (tax incl)."
                    value={totalPrice?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                    precision={2}
                  />
                  <Button
                    style={{ marginTop: 16 }}
                    type="primary"
                    onClick={handleCreateOrder}
                  >
                    Pay now <CreditCardOutlined />
                  </Button>
                </Col>
              </Row>
            </Layout>
          </div>
        ) : (
          "Null"
        )}
      </div>
    </section>
  );
};

export default Cart;
