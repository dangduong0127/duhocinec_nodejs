import React, { useState, useEffect, useContext, useRef } from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Row,
  Col,
  Upload,
  Select,
  message,
} from "antd";
import { AuthContext } from "../../../../hooks/Context/auth.context";
import JoditEditor from "jodit-react";
import { UploadOutlined } from "@ant-design/icons";
import { createPost, getAllCategory, uploadImage } from "../../../../utils/api";

const CreatePost = ({ onBack }) => {
  const { auth } = useContext(AuthContext);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "",
    image: "",
    category_id: "",
    author: auth.user.name,
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategory();
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

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

  const handleSelectedCategory = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        category_id: e,
      };
    });
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

      createPost({ ...formData, image: uploadedImageUrl })
        .then(() => {
          message.success("Tạo bài viết thành công!");
          setLoading(false);
        })
        .catch(() => message.error("Tạo bài viết thất bại!"));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Row gutter={16}>
        {/* Nội dung chính */}
        <Col span={16}>
          <Card>
            <Form layout="vertical">
              <Form.Item label="Tiêu đề">
                <Input
                  name="title"
                  value={formData.title}
                  placeholder="Nhập tiêu đề bài viết"
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
                <Form.Item label="Danh mục">
                  <Select
                    name="categories"
                    placeholder="-Chọn danh mục-"
                    onChange={handleSelectedCategory}
                  >
                    {categories &&
                      categories.map((item) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </p>
              <p>
                <strong>Ngày tạo:</strong> {new Date().toLocaleString("vi-VN")}
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
    </>
  );
};

export default CreatePost;
