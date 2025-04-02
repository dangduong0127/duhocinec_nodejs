import React, { useEffect, useState } from "react";
import { Table, Checkbox, Button, Select } from "antd";
import { Link } from "react-router-dom";
import getImageUrl from "../../utils/getImage";
import { getOrderForUser, getPaymentInfo } from "../../utils/api";
import "./styles.scss";
import OrderDetails from "../OrderDetails";
const Orders = () => {
  const [cart, setCart] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [urlPayment, setUrlPayment] = useState(null);
  const columns = [
    {
      title: (
        <div style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <span> All</span>
        </div>
      ),
      dataIndex: "checkbox",
      key: "checkbox",
      fixed: "left",
      width: 10,
      render: (_, record) => <Checkbox />,
    },
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
      width: 20,
    },

    {
      title: "User Name",
      dataIndex: "user_name",
      key: "user_name",
      width: 100,
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 100,
    },
    {
      title: "Total Amount",
      dataIndex: "total_amount",
      key: "total_amount",
      width: 150,
      render: (total_amount) =>
        parseFloat(total_amount).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (status) => (
        <span
          style={{
            color:
              status === "pending"
                ? "orange"
                : status === "cancelled"
                  ? "red"
                  : "green",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (created_at) => new Date(created_at).toLocaleString("vi-VN"),
    },
    {
      title: "Actions",
      dataIndex: "orderDetails",
      key: "orderDetails",
      fixed: "right",
      width: 150,
      render: (_, record) => {
        const { status } = record;

        return status === "completed" ? (
          <Button type="primary" onClick={() => setSelectedOrder(record.id)}>
            Chi tiết đơn
          </Button>
        ) : status === "cancelled" ? (
          <div>
            <Button
              type="primary"
              style={{ marginBottom: "5px" }}
              onClick={() => setSelectedOrder(record.id)}
            >
              Chi tiết đơn
            </Button>
            <Button>Đặt lại đơn</Button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <Button type="primary" onClick={() => setSelectedOrder(record.id)}>
              Chi tiết đơn
            </Button>
            <Button
              type="primary"
              style={{ background: "#00CC00" }}
              onClick={() => (window.location.href = record.urlPayment)}
            >
              Thanh toán
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOrderForUser();
        const orders = res.data.orders;

        const updatedOrders = await Promise.all(
          orders.map(async (item) => {
            try {
              const paymentInfo = await getPaymentInfo(item.id);
              item.urlPayment = paymentInfo.data.urlPayment;
              return item;
            } catch (err) {
              console.log(err);
              return item;
            }
          })
        );
        setCart(updatedOrders);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const dataSourse = cart?.map((item) => {
    return {
      ...item,
      user_name: item.authorOrder.firstName + " " + item.authorOrder.lastName,
      email: item.authorOrder.email,
      phoneNumber: item.authorOrder.phoneNumber,
    };
  });

  return selectedOrder ? (
    <OrderDetails
      data={cart.filter((item) => item.id === selectedOrder)}
      onBack={() => setSelectedOrder(null)}
    />
  ) : (
    <section className="orders">
      <div className="container">
        <h3>Đơn hàng</h3>
        <Table columns={columns} dataSource={dataSourse} />
      </div>
    </section>
  );
};

export default Orders;
