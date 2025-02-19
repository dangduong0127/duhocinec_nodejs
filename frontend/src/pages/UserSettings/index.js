import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";
import { getUserProfile } from "../../utils/api";
import { Avatar, Button, Input, Select } from "antd";
import { AuthContext } from "../../hooks/Context/auth.context";

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const { auth } = useContext(AuthContext);

  // useEffect(() => {
  //   const userProfile = async () => {
  //     const response = await getUserProfile();
  //     setUserData(response.data);
  //   };
  //   userProfile();
  // }, []);
  console.log(auth);
  return (
    <>
      <div className="user-settings">
        <div className="user-settings__header container">
          <h1>User Settings</h1>
          {userData && (
            <p>
              Welcome, {userData.firstName} {userData.lastName}!
            </p>
          )}

          <Avatar className="avatar-user" src={userData.avatar}></Avatar>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
