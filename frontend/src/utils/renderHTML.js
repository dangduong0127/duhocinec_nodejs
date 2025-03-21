import React, { useState } from "react";
import { Input, Select, Upload, Button, Card } from "antd";
import JoditEditor from "jodit-react";
import { UploadOutlined } from "@ant-design/icons";
// import DOMPurify from "dompurify";
const RenderHTML = ({ fields, change }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const data = JSON.parse(fields.field_value);
  const [value, setValue] = useState(data.value || "");
  const handleChange = (e) => {
    setValue(e.target.value);
    change(e);
  };

  const handleChangeTxtEditor = (id, value) => {
    change(id, value);
  };

  const handleInputFile = ({ file }) => {
    const imgUrlTemp = URL.createObjectURL(file);
    setPreviewImage(imgUrlTemp);
    setSelectedFile(file);
    change(selectedFile);
  };

  // const handleUploadImage = (e) => {
  //   change(e);
  // };

  return (
    <>
      {data.tag === "input" ? (
        <Input
          style={{ width: "100%" }}
          id={fields.id}
          type={data.type || ""}
          name={data.name || ""}
          placeholder={data.placeholder || ""}
          value={value}
          onChange={handleChange}
        />
      ) : data.tag === "textarea" ? (
        <textarea
          id={fields.id}
          name={data.name || ""}
          placeholder={data.placeholder || ""}
          value={data.value}
          onChange={handleChange}
        />
      ) : data.tag === "select" ? (
        <Select name={data.name || ""} onChange={handleChange}>
          {/* {data.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
        </Select>
      ) : data.tag === "JoditEditor" ? (
        <JoditEditor
          id={fields.id}
          placeholder={data.placeholder || ""}
          value={data.value}
          onChange={(value) => handleChangeTxtEditor(fields.id, value)}
        />
      ) : data.tag === "file" ? (
        <Card>
          <Upload
            showUploadList={false}
            beforeUpload={(file) => {
              handleInputFile({ file });
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>

          {previewImage && (
            <img
              src={previewImage}
              alt="thumbnail preview"
              style={{
                width: "200px",
                maxHeight: "150px",
                objectFit: "fill",
                overflowY: "auto",
                marginLeft: 10,
                borderRadius: 4,
              }}
            />
          )}
        </Card>
      ) : //
      null}
    </>
  );
};

export default RenderHTML;
