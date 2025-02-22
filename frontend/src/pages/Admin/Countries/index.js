import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Table } from "antd";
import { getAllCountries } from "../../../utils/api";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: 20,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "Populattitleion",
    width: 100,
  },
  {
    title: "Excerpt",
    dataIndex: "excerpt",
    key: "Excerpt",
    width: 200,
  },
  {
    title: "Slug",
    dataIndex: "slug",
    key: "slug",
    width: 150,
  },
  {
    title: "Author",
    dataIndex: "fullName",
    key: "author",
    width: 100,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) => new Date(date).toLocaleString("vi-VN"),
    width: 150,
  },
];

const Countries = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllCountries();
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  const dataSource = data?.map((item, index) => {
    return {
      ...item,
      key: index,
      fullName: item.users.firstName + " " + item.users.lastName,
    };
  });

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default Countries;
