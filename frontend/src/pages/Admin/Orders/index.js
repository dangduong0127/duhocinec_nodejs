import React, { useEffect, useState } from "react";
import { Table, Checkbox, Button, Select } from "antd";
import { getAllOrders } from "../../../utils/api";
import OrderDetails from "./OrderDetails";
import { CheckOutlined } from "@ant-design/icons";
const Orders = () => {
  const [data, setData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState(null);
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
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
      width: 10,
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
      render: (status) =>
        edit ? (
          <Select value={values} onChange={handleOnchange}>
            <option value={"pending"}>pending</option>
            <option value={"processing"}>processing</option>
            <option value={"completed"}>completed</option>
            <option value={"cancelled"}>cancelled</option>
          </Select>
        ) : (
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
      render: (item) => (
        <div style={{ display: "flex", gap: "10px" }}>
          {edit ? (
            <Button
              type="primary"
              style={{ background: "#389e0d" }}
              onClick={() => setEdit(false)}
            >
              <CheckOutlined />
            </Button>
          ) : (
            <Button danger onClick={() => setEdit(true)}>
              Edit status
            </Button>
          )}
          <Button type="primary" onClick={() => setSelectedOrder(item)}>
            View details
          </Button>
        </div>
      ),
    },
  ];

  const handleOnchange = (e) => {
    setValues(e);
  };

  const fetchData = async () => {
    try {
      const response = await getAllOrders();
      setData(response.data.orders);
      setValues(response.data.orders.status);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();

    const checkDataChanged = setInterval(fetchData, 5000);
    return () => clearInterval(checkDataChanged);
  }, []);

  const dataSourse = data?.map((item) => {
    return {
      ...item,
      user_name: item.authorOrder.firstName + " " + item.authorOrder.lastName,
      email: item.authorOrder.email,
      phoneNumber: item.authorOrder.phoneNumber,
    };
  });

  return selectedOrder ? (
    <OrderDetails
      orderDetails={selectedOrder}
      onBack={() => setSelectedOrder(null)}
    />
  ) : (
    data !== null && (
      <>
        <Table columns={columns} dataSource={dataSourse} />
      </>
    )
  );
};

export default Orders;
