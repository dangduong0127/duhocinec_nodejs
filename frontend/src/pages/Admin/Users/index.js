import React, { useState, useEffect } from "react";
import { Switch, Table, Button, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../../utils/api";
import { notification, Modal } from "antd";
import { updatedUser } from "../../../utils/api";
import ModalEditUser from "./Modal Edit";
import ModalDeleteUser from "./Modal Delete";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [fixedTop, setFixedTop] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Numbers",
      width: 100,
      dataIndex: "num",
      fixed: "left",
      key: "num",
    },

    {
      title: "Email",
      width: 350,
      dataIndex: "email",
      key: "email",
      fixed: "left",
    },

    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 150,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 150,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 150,
      render: (gender) =>
        gender === 0 ? "Female" : gender === 1 ? "Male" : "Other",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: 150,
      render: (role) => (role.name ? role.name : "Null"),
    },
    {
      title: "Id",
      width: 100,
      dataIndex: "id",
      fixed: "left",
      key: "id",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
      },
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (updatedAt) => {
        const date = new Date(updatedAt);
        return date.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
      },
    },
    {
      title: "Actions",
      key: "operation",
      fixed: "right",
      width: 120,
      render: (text, record) => (
        <>
          <ModalEditUser setRefresh={setRefresh} record={record} />

          <ModalDeleteUser setRefresh={setRefresh} record={record} />
        </>
      ),
    },
  ];

  useEffect(() => {
    const getUserDatas = async () => {
      try {
        const response = await getAllUsers();

        if (response?.message) {
          notification.error({
            message: response.message,
          });
          navigate("/login");
        } else {
          setUserData(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getUserDatas();
  }, [refresh]);

  const dataSource = userData?.map((item, index) => {
    return {
      ...item,
      key: index,
      num: index + 1,
      fullName: item.firstName + " " + item.lastName,
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{
        x: 1500,
      }}
      summary={() => (
        <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={8}>
              Scroll Context
            </Table.Summary.Cell>
            <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      // antd site header height
      sticky={{
        offsetHeader: 64,
      }}
    />
  );
};
export default Users;
