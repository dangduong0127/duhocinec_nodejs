import React, { useState } from "react";
import { Modal, Input, Select, notification, Button } from "antd";
import { updatedUser } from "../../../../utils/api";

const ModalEditUser = ({ record, setRefresh }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const hanldeOnSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(selectedUser.gender);
      await updatedUser(selectedUser);
      setModalOpen(false);
      setRefresh((prev) => !prev);
      notification.success({
        message: "Update Successful",
      });
    } catch (e) {
      notification.error({
        message: "Error updating user",
        description: e.message,
      });
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setSelectedUser(record);
          setModalOpen(true);
        }}
        style={{ marginBottom: "5px" }}
      >
        Edit
      </Button>

      <Modal
        title="Update User"
        open={isModalOpen}
        onOk={hanldeOnSubmit}
        onCancel={() => {
          setModalOpen(false);
          setSelectedUser(null);
        }}
      >
        <form onSubmit={hanldeOnSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <Input
            name="firstName"
            placeholder="Enter your first name"
            value={selectedUser?.firstName || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                firstName: e.target.value,
              })
            }
          />
          <label htmlFor="lastName">Last Name:</label>
          <Input
            name="lastName"
            placeholder="Enter your last name"
            value={selectedUser?.lastName || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                lastName: e.target.value,
              })
            }
          />
          <label htmlFor="address">Address:</label>
          <Input
            name="address"
            placeholder="Enter your address"
            value={selectedUser?.address || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                address: e.target.value,
              })
            }
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Input
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={selectedUser?.phoneNumber || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                phoneNumber: e.target.value,
              })
            }
          />
          <label htmlFor="gender">Gender:</label>
          <Select
            name="gender"
            value={selectedUser?.gender ?? ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                gender: e,
              })
            }
          >
            <Select.Option value={0}>Female</Select.Option>
            <Select.Option value={1}>Male</Select.Option>
            <Select.Option value={2}>Other</Select.Option>
          </Select>
          <label htmlFor="role">Role:</label>
          <Select
            name="role"
            value={selectedUser?.role?.name || ""}
            style={{ width: "100px" }}
            onChange={(value) =>
              setSelectedUser({
                ...selectedUser,
                roleId: value,
                role: { name: value === 1 ? "Admin" : "User" },
              })
            }
          >
            <Select.Option value={1}>Admin</Select.Option>
            <Select.Option value={2}>User</Select.Option>
          </Select>
          <label htmlFor="avatar">Avatar:</label>
          <Input type="file" name="avatar" />
        </form>
      </Modal>
    </>
  );
};

export default ModalEditUser;
