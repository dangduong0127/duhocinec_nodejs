import React from "react";
// import DOMPurify from "dompurify";
const RenderHTML = ({ value, change }) => {
  console.log(value);
  const handleChange = (e) => {
    change(e);
  };
  return (
    <>
      {value.map((item) => {
        const data = JSON.parse(item.field_value.replace(/(\w+):/g, '"$1":'));
        if (data.tag === "input") {
          return (
            <input
              type={data.type || ""}
              name={data.name || ""}
              placeholder={data.placeholder || ""}
              value={data.value || ""}
              onChange={handleChange}
            />
          );
        }

        if (data.tag === "textarea") {
          return (
            <textarea
              name={data.name || ""}
              placeholder={data.placeholder || ""}
              value={data.value || ""}
              onChange={handleChange}
            />
          );
        }

        if (data.tag === "select") {
          return (
            <select name={data.name || ""} onChange={handleChange}>
              {/* {data.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))} */}
            </select>
          );
        }
      })}
    </>
  );
};

export default RenderHTML;
