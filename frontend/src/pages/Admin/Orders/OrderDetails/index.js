import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Table,
  Space,
  Statistic,
  Popconfirm,
  notification,
} from "antd";
import { CreditCardOutlined, DeleteOutlined } from "@ant-design/icons";
import getImageUrl from "../../../../utils/getImage";
import { Link } from "react-router-dom";

const OrderDetails = ({ orderDetails, onBack }) => {
  const [cart, setCart] = useState(orderDetails);
  const columns = [
    {
      title: "STT",
      dataIndex: "itemId",
      key: "itemId",
      render: (text) => <span>{text + 1}</span>,
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
      dataIndex: "itemSlug",
      key: "action",
      fixed: "right",
      width: 100,
      render: (slug) => {
        const linkPost = "khoa-hoc" + slug;
        return (
          <a href={linkPost}>
            <Button>View</Button>
          </a>
        );
      },
    },
  ];

  const dataSource = cart?.map((prev, index) => {
    return {
      key: prev.id,
      itemId: index,
      itemName: prev.courseDetails.title,
      itemImage: prev.courseDetails.thumbnail,
      itemSlug: prev.courseDetails.slug,
      itemPrice: `${prev.price}`,
    };
  });

  let totalPrice = cart?.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0);

  return (
    <>
      <div>
        <h2>
          Total Items <strong>{cart.length}</strong>
        </h2>
        <br></br>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
        <Row justify="end">
          <Col>
            <Statistic
              title="Total"
              value={totalPrice?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
              precision={2}
            />
          </Col>
        </Row>
      </div>
      <Button type="primary" onClick={onBack}>
        return
      </Button>
    </>
  );
};

export default OrderDetails;
