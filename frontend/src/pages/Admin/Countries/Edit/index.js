import React, { useState } from "react";
import { Button, Form, Input, Upload, Card, Row, Col, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;

const uploadImage = (data) => {
  return axios.post("/api/upload", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const CountryEdit = ({ onBack, data }) => {
  const [formData, setFormData] = useState({
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    slug: data.slug,
    thumbnail: data.thumbnail, // URL ảnh trên server
  });

  const [previewImage, setPreviewImage] = useState(data.thumbnail); // Lưu ảnh tạm thời
  const [selectedFile, setSelectedFile] = useState(null); // Lưu file trước khi upload
  const [loading, setLoading] = useState(false);

  const fullName = data.users.firstName + " " + data.users.lastName;

  // Xử lý thay đổi input form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý chọn ảnh để preview
  const handlePreviewImage = ({ file }) => {
    // const imageUrl = URL.createObjectURL(file); // Tạo URL tạm thời
    const imageUrl = `http://localhost:1988/${file}`;
    setPreviewImage(imageUrl);
    setSelectedFile(file); // Lưu file để upload sau
  };

  // Xử lý upload ảnh khi bấm "Cập nhật"
  const handleSave = async () => {
    setLoading(true);
    let uploadedImageUrl = formData.thumbnail; // Mặc định giữ nguyên ảnh cũ

    // Nếu có ảnh mới, thực hiện upload lên server
    if (selectedFile) {
      const formDataUpload = new FormData();
      formDataUpload.append("profilePic", selectedFile); // ✅ Key theo API

      try {
        const response = await uploadImage(formDataUpload);
        if (response.status === 200) {
          uploadedImageUrl = `/uploads/${response.data.filename}`; // ✅ Lấy URL từ API
        } else {
          message.error("Tải ảnh lên thất bại!");
        }
      } catch (error) {
        message.error("Lỗi khi tải ảnh lên!");
        return;
      }
    }

    // Cập nhật dữ liệu bài viết
    setFormData((prev) => ({ ...prev, thumbnail: uploadedImageUrl }));
    console.log("Updated Data:", { ...formData, thumbnail: uploadedImageUrl });

    message.success("Cập nhật bài viết thành công!");
    setLoading(false);
  };

  return (
    <Row gutter={16}>
      {/* Nội dung chính */}
      <Col span={16}>
        <Card>
          <Form layout="vertical">
            <Form.Item label="Tiêu đề">
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Mô tả ngắn">
              <TextArea
                name="excerpt"
                rows={2}
                value={formData.excerpt}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Nội dung">
              <TextArea
                name="content"
                rows={6}
                value={formData.content}
                onChange={handleChange}
              />
            </Form.Item>
          </Form>
        </Card>
      </Col>

      {/* Sidebar */}
      <Col span={8}>
        <Card title="Thông tin bài viết">
          <Form layout="vertical">
            <Form.Item label="Slug">
              <Input
                name="slug"
                value={formData.slug}
                onChange={handleChange}
              />
            </Form.Item>
            <p>
              <strong>Tác giả:</strong> {fullName}
            </p>
            <p>
              <strong>Ngày tạo:</strong>{" "}
              {new Date(data.createdAt).toLocaleString("vi-VN")}
            </p>
          </Form>
        </Card>

        {/* Upload & Preview ảnh */}
        <Card title="Ảnh đại diện" style={{ marginTop: 16 }}>
          <Upload
            showUploadList={false}
            beforeUpload={(file) => {
              handlePreviewImage({ file });
              return false; // Không upload ngay
            }}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>

          {previewImage && (
            <img
              src={previewImage}
              alt="thumbnail preview"
              style={{
                width: "100%",
                marginTop: 10,
                borderRadius: 4,
              }}
            />
          )}
        </Card>

        <div style={{ marginTop: 16 }}>
          <Button
            type="primary"
            onClick={handleSave}
            loading={loading}
            style={{ marginRight: 8 }}
          >
            Cập nhật
          </Button>
          <Button onClick={onBack}>Quay lại</Button>
        </div>
      </Col>
    </Row>
  );
};

export default CountryEdit;
