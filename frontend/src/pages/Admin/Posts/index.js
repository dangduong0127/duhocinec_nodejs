import React, { useState, useEffect } from "react";
import { Button, Checkbox, Table } from "antd";
import { getAllPosts } from "../../../utils/api";
import { Link } from "react-router-dom";
import EditPost from "./Edit";

const Posts = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [postData, setPostData] = useState(null);

  const columns = [
    {
      title: (
        <>
          <Checkbox />
          <span> All</span>
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
                setSelectedPost(record.id);
              }}
            >
              {title}
            </span>
          </Link>
        );
      },
    },

    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 200,
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
        const res = await getAllPosts();
        setPostData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [selectedPost]);
  const dataSource = postData?.map((item, index) => {
    return {
      ...item,
      key: index,
      slug: item.slug,
      status: item.post_status,
      fullName: item.author_inf.firstName + " " + item.author_inf.lastName,
    };
  });

  return selectedPost ? (
    <EditPost
      onBack={() => setSelectedPost(null)}
      data={postData.find((item) => item.id === selectedPost)}
    />
  ) : (
    <>
      <Button type="primary" style={{ marginBottom: "20px" }}>
        Create Post
      </Button>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default Posts;
