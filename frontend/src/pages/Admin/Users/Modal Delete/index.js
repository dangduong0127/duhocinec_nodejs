import React, { useState, useEffect } from "react";
import { Button, notification, Modal } from "antd";
import { deleteUser } from "../../../../utils/api";

const ModalDeleteUser = ({ setRefresh, record }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      setSelectedUser(record);
      console.log("Set value", selectedUser);
    }
  }, [isModalOpen, record]);

  const handleDeleteUser = async () => {
    const res = await deleteUser(selectedUser.id);
    if (res.data.success) {
      notification.success({
        message: "User deleted successfully",
        description: res.data.message,
      });
      setModalOpen(false);
      setRefresh((pre) => !pre);
    } else {
      notification.error({
        message: "Error deleting user",
        description: res.data.message,
      });
    }
  };

  return (
    <>
      <Button
        type="primary"
        danger
        onClick={() => {
          setModalOpen(true);
          setSelectedUser(record);
        }}
      >
        Delete
      </Button>

      <Modal
        title="Delete User"
        open={isModalOpen}
        onCancel={() => {
          setModalOpen(false);
          setSelectedUser(null);
        }}
        onOk={handleDeleteUser}
      >
        <p>
          Are you sure about deleting this user:{" "}
          <span style={{ color: "red" }}>{record.email}</span> ?
        </p>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
