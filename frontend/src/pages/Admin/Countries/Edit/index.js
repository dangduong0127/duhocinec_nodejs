import React, { useEffect, useState } from "react";
import { Button, Form, Input, Upload, Card, Row, Col, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { uploadImage, updateCountry } from "../../../../utils/api";

const { TextArea } = Input;
const CountryEdit = ({ onBack, data }) => {
  const [formData, setFormData] = useState({
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    slug: data.slug,
    thumbnail: data.thumbnail,
  });

  const [previewImage, setPreviewImage] = useState(null); // Lưu ảnh tạm thời
  const [selectedFile, setSelectedFile] = useState(null); // Lưu file trước khi upload
  const [loading, setLoading] = useState(false);

  const fullName = data.users.firstName + " " + data.users.lastName;

  // Xử lý thay đổi input form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý chọn ảnh để preview
  const handlePreviewImage = ({ file }) => {
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
    setSelectedFile(file);
  };

  // Xử lý upload ảnh khi bấm "Cập nhật"
  const handleSave = async () => {
    try {
      let uploadedImageUrl = formData.thumbnail; // Mặc định giữ nguyên ảnh cũ

      // Nếu có ảnh mới, thực hiện upload lên server
      if (selectedFile) {
        const formDataUpload = new FormData();
        formDataUpload.append("image", selectedFile); // ✅ Key theo API

        const response = await uploadImage(formDataUpload);
        console.log(response);
        if (response.status === 200) {
          uploadedImageUrl = `${response.data.file.path}`;
          setFormData({ ...formData, thumbnail: uploadedImageUrl });
          setLoading(true);
        } else {
          message.error("Tải ảnh lên thất bại!");
        }
      }

      updateCountry({ ...formData, thumbnail: uploadedImageUrl })
        .then(() => {
          message.success("Cập nhật bài viết thành công!");
          setLoading(false);
        })
        .catch(() => message.error("Cập nhật thất bại!"));
    } catch (error) {
      message.error("Lỗi khi tải ảnh lên!");
      return;
    }
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

          {previewImage ? (
            <img
              src={previewImage}
              alt="thumbnail preview"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                overflowY: "auto",
                marginTop: 10,
                borderRadius: 4,
              }}
            />
          ) : (
            <img
              src={
                formData.thumbnail
                  ? process.env.REACT_APP_SERVER_BASE_URL + formData.thumbnail
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
              alt="thumbnail preview"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                overflowY: "auto",
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
