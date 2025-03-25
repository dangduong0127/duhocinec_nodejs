import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Table } from "antd";
import { getAllCourses } from "../../../utils/api";
import Editor from "./Edit";
import Create from "./Create";

const Courses = () => {
  const [courseData, setCourseData] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCreator, setSelectedCreator] = useState(false);
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
        const result = await getAllCourses();
        setCourseData(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [selectedPost]);

  const courses = courseData?.map((item) => {
    return {
      ...item,
    };
  });

  return selectedCreator ? (
    <Create onBack={() => setSelectedCreator(false)} />
  ) : selectedPost ? (
    <Editor
      data={courseData.find((item) => item.id === selectedPost)}
      onBack={() => setSelectedPost(null)}
    />
  ) : (
    courseData && (
      <>
        <Button type="primary" onClick={() => setSelectedCreator(true)}>
          Create Course
        </Button>
        <Table columns={columns} dataSource={courses}></Table>
      </>
    )
  );
};

export default Courses;
