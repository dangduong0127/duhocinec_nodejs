import React, { useState, useRef } from "react";
import { Button, Form, Input, Upload, Card, Row, Col, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import JoditEditor from "jodit-react";
import { uploadImage, updatePost } from "../../../../utils/api";

const EditPost = ({ onBack, data }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    id: data.id,
    title: data.title,
    content: data.content,
    slug: data.slug,
    thumbnail: data.image,
    fullName: data.author_inf.firstName + " " + data.author_inf.lastName,
    updatedAt: data.updatedAt,
  });

  const handleChange = (e) => {
    setFormData((item) => {
      return {
        ...item,
        [e.target.name]: e.target.value,
        updatedAt: new Date().toISOString(),
      };
    });
  };

  const handleOnchangeTxtEditor = (newContent) => {
    formData.content = newContent;
  };

  const handlePreviewImage = ({ file }) => {
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
    setSelectedFile(file);
  };

  const handleSave = async () => {
    try {
      let uploadedImageUrl = formData.thumbnail; // Mặc định giữ nguyên ảnh cũ
      // Nếu có ảnh mới, thực hiện upload lên server
      if (selectedFile) {
        const formDataUpload = new FormData();
        formDataUpload.append("image", selectedFile); // Key theo API
        const response = await uploadImage(formDataUpload);

        if (response.status === 200) {
          uploadedImageUrl = `${response.data.file.path}`;
          setFormData({ ...formData, image: uploadedImageUrl });
          setLoading(true);
        } else {
          message.error("Tải ảnh lên thất bại!");
        }
      }

      updatePost({ ...formData, image: uploadedImageUrl })
        .then(() => {
          message.success("Cập nhật bài viết thành công!");
          setLoading(false);
        })
        .catch(() => message.error("Cập nhật thất bại!"));
    } catch (err) {
      console.log(err);
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

            <Form.Item label="Nội dung bài viết">
              <JoditEditor
                editor={editor}
                value={formData.content}
                config={{
                  toolbarButtonSize: "medium",
                  minHeight: 300,
                  maxHeight: 600,
                }}
                onChange={handleOnchangeTxtEditor}
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
              <strong>Tác giả:</strong> {formData.fullName}
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
                objectFit: "contain",
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

export default EditPost;
