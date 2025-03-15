import React, { useEffect, useState } from "react";
import { getAllCategory } from "../../../utils/api";
import { Table, Checkbox } from "antd";
const Categories = () => {
  const [data, setData] = useState(null);
  const columns = [
    {
      title: (
        <>
          <Checkbox />
          <span> Select All</span>
        </>
      ),
      dataIndex: "checkbox",
      key: "checkbox",
      fixed: "left",
      width: 50,
      render: (_, record) => <Checkbox />,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 20,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Path",
      dataIndex: "path",
      key: "path",
      width: 150,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategory();
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const dataSourse = data?.map((item) => {
    return { ...item };
  });

  return (
    data !== null && (
      <>
        <Table columns={columns} dataSource={data} />
      </>
    )
  );
};

export default Categories;
