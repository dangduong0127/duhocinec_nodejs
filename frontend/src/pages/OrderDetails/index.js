import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Row,
  Col,
  Table,
  Space,
  Statistic,
  Popconfirm,
  notification,
  Modal,
} from "antd";
import getImageUrl from "../../utils/getImage";
import { Link } from "react-router-dom";
import "./styles.scss";
import { getPaymentInfo, cancelOrder } from "../../utils/api";
const OrderDetails = ({ data, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const order_details = data[0].orderDetails;
  const [cart, setCart] = useState(order_details);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const textareaRef = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const cancelReason = textareaRef.current.value;
    callApiCancelOrder(data[0].id, cancelReason);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const callApiCancelOrder = async (id, reason) => {
    try {
      const res = await cancelOrder(id, reason);
      if (res.data.status === "CANCELLED") {
        notification.success({
          message: "Huỷ đơn hàng thành công",
          description: "Đơn hàng đã bị hủy do: " + reason,
        });
        onBack();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await getPaymentInfo(data[0].id);
        setPaymentUrl(res.data.urlPayment);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAPI();
  }, []);

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
    <section className="OrderDetails-wrapper">
      <div className="container">
        <Modal
          title="Bạn có chắc chắn muốn huỷ đơn?"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <form id="cancelForm">
            <p>Hãy cho chúng tôi biết lý do huỷ đơn nhé</p>
            <textarea
              ref={textareaRef}
              name="cancelReason"
              placeholder="Thay đổi thổng tin thanh toán, sửa thông tin cá nhân, đổi khoá học, lý do khác,..."
              rows={10}
              style={{ width: "100%" }}
            ></textarea>
          </form>
        </Modal>
        <h2>
          Tổng số đơn hàng: <strong>{cart.length}</strong>
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
        <Button type="primary" onClick={onBack}>
          Quay lại
        </Button>
        {data[0].status && data[0].status === "pending" ? (
          <div style={{ float: "right", display: "flex", gap: "10px" }}>
            <Button type="primary" danger onClick={showModal}>
              Huỷ đơn
            </Button>
            <Button
              type="primary"
              onClick={() => (window.location.href = paymentUrl)}
            >
              Thanh toán
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default OrderDetails;
