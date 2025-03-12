import React, { useState } from "react";
import { Input, Select } from "antd";
import JoditEditor from "jodit-react";
// import DOMPurify from "dompurify";
const RenderHTML = ({ fields, change }) => {
  // const data = JSON.parse(fields.field_value.replace(/(\w+):/g, '"$1":'));
  const data = JSON.parse(fields.field_value);
  const [value, setValue] = useState(data.value || "");
  const handleChange = (e) => {
    setValue(e.target.value);
    change(e);
  };

  const handleChangeTxtEditor = (id, value) => {
    change(id, value);
  };

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
      ) : null}
    </>
  );
};

export default RenderHTML;
