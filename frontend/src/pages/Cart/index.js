import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/Context/cart.context";
import {
  getCourseToCart,
  createOrder,
  deleteProduct,
  createPaymentLink,
  getPaymentInfo,
} from "../../utils/api";
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
import randomString from "../../utils/randomString";
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
            onConfirm={() => hanldeDelete([{ id: record.key }])}
          >
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  const hanldeDelete = (id) => {
    if (id) {
      const callAPIDel = async () => {
        try {
          const res = await deleteProduct(id);
          if (res.data.success) {
            const deleted = cart.filter(
              (item1) => !res.data.del.some((item2) => item1.id === item2.id)
            );
            setCart(deleted);
          }
        } catch (err) {
          console.log(err);
        }
      };
      callAPIDel();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCourseToCart(cart);
        setCartData(result.data);
        // await getPaymentInfo("65");
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [cart]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const result = await getAllCart();
  //         console.log(result);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     fetchData();
  //   });

  const handleCreateOrder = async () => {
    try {
      const result = await createOrder(cartData.courses, totalPrice);
      const response = result.data;
      console.log("Created order: " + response);
      if (response.success) {
        const payment = await createPaymentLink(
          cartData.courses,
          response.order_id
        );
        let checkoutUrl = payment.data.checkoutUrl;
        // navigate("/checkout", { state: { orderId: response.order_id } });
        window.location.href = checkoutUrl;

        setCartData(cartData.courses);
        notification.success({
          message: "Tạo đơn hàng thành công",
          description: "Hãy tiến hành thanh toán",
        });
      } else {
        // const courses = cartData.courses.filter(
        //   (item1) =>
        //     !response.courses.some((item2) => item2.course_id === item1.id)
        // );
        notification.error({
          //   message: `Khoá học ${ courses.map((item) => item.title)} bạn đã đăng ký rồi!!`,
          message: "error",
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
                  <Button
                    type="default"
                    danger
                    onClick={() => hanldeDelete(cart)}
                  >
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
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png?f=webp"
              alt="cart-empty"
            />
            <h1>Chưa có sản phẩm nào trong giỏ hàng</h1>
            <Link to="/khoa-hoc">
              <Button type="primary">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
