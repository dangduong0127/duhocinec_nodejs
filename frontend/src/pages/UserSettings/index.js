import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";
import { getUserProfile, uploadImage, updatedUser } from "../../utils/api";
import { Avatar, Input, Select, Button } from "antd";
// import { EditFilled, UserOutlined } from "@ant-design/icons";
import { AuthContext } from "../../hooks/Context/auth.context";

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const [imageUrlTemp, setImageUrlTemp] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const userProfile = async () => {
      const response = await getUserProfile();
      setUserData(response.data);
    };
    userProfile();
  }, [refresh]);

  const handleOnChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const hanldeOnChangeSelection = (e) => {
    setUserData({
      ...userData,
      gender: e,
    });
  };

  const hanldeOnChangeAvatar = (e) => {
    const file = e.target.files[0];
    const imageUrlTemp = URL.createObjectURL(file);
    setImageUrlTemp(imageUrlTemp);
    setUserData({
      ...userData,
      image: file,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", userData.image);

    try {
      // Chờ tải ảnh lên xong
      const resImage = await uploadImage(formData);
      if (resImage.data) {
        const updatedUserData = { ...userData, image: resImage.data.file.path };
        setUserData(updatedUserData);

        // Sau khi cập nhật ảnh, gọi API cập nhật người dùng
        await updatedUser(updatedUserData);
        setRefresh(true);
      }
    } catch (error) {
      console.error("Lỗi trong quá trình cập nhật:", error);
    }
  };

  console.log(userData);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>User Settings</h1>
      <div className="user-settings container">
        <div className="user-settings_inner ">
          {userData && (
            <>
              <p>
                Welcome, {userData.firstName} {userData.lastName}!
              </p>
              <form id="edit-user" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="Avatar-wrapper">
                  {imageUrlTemp === null ? (
                    <Avatar
                      className="avatar-user"
                      src={`http://localhost:1988/${userData.image}`}
                      // src={imageUrlTemp}
                    >
                      <span className="upload">Upload image</span>
                    </Avatar>
                  ) : (
                    <Avatar className="avatar-user" src={imageUrlTemp}>
                      <span className="upload">Upload image</span>
                    </Avatar>
                  )}
                  <Input
                    type="file"
                    className="avatar"
                    name="avatar"
                    allowClear
                    accept="image/*"
                    onChange={hanldeOnChangeAvatar}
                  />
                </div>

                <div className="email-wrapper">
                  <p>Email: {userData.email || "Chưa có"}</p>
                </div>

                <div className="address-wrapper">
                  <p>Address:</p>
                  <Input
                    name="address"
                    value={userData.address || "Chưa có"}
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div className="phone-wrapper">
                  <p>Phone:</p>
                  <Input
                    name="phoneNumber"
                    value={userData.phoneNumber || "Chưa có"}
                    onChange={handleOnChangeInput}
                  />
                </div>

                <div className="gender-wrapper">
                  <p style={{ marginRight: "10px" }}>Gender: </p>
                  <Select
                    name="gender"
                    value={
                      userData.gender === 1
                        ? "Male"
                        : userData.gender === 2
                          ? "FeMale"
                          : "Other"
                    }
                    onChange={hanldeOnChangeSelection}
                  >
                    <Select.Option value={1}>Male</Select.Option>
                    <Select.Option value={0}>FeMale</Select.Option>
                    <Select.Option value={2}>Others</Select.Option>
                  </Select>
                </div>

                <div className="actions">
                  <Button
                    className="btn-update"
                    htmlType="submit"
                    type="primary"
                  >
                    Update
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserSettings;
