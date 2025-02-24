import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Checkbox, Table } from "antd";
import { getAllCountries } from "../../../utils/api";
import { Link } from "react-router-dom";
import CountryEdit from "./Edit";

const Countries = () => {
  const [selectedCountry, setSelectdCountry] = useState(null);
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
      title: "Title",
      dataIndex: "title",
      key: "Populattitleion",
      width: 100,
      render: (title, record) => {
        return (
          <Link>
            <span
              onClick={(e) => {
                e.preventDefault();
                setSelectdCountry(record.id);
              }}
            >
              {title}
            </span>
          </Link>
        );
      },
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
      checkbox: false,
    };
  });

  return (
    <>
      {selectedCountry ? (
        <CountryEdit
          onBack={() => setSelectdCountry(null)}
          data={data.find((e) => e.id === selectedCountry)}
        />
      ) : (
        <Table columns={columns} dataSource={dataSource} />
      )}
    </>
  );
};

export default Countries;
