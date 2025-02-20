import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";
import { getUserProfile } from "../../utils/api";
import { Avatar } from "antd";
import { AuthContext } from "../../hooks/Context/auth.context";

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const userProfile = async () => {
      const response = await getUserProfile();
      setUserData(response.data);
    };
    userProfile();
  }, []);
  // console.log(userData);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>User Settings</h1>
      <div className="user-settings">
        <div className="user-settings_inner container">
          {userData && (
            <>
              <p>
                Welcome, {userData.firstName} {userData.lastName}!
              </p>
              <Avatar
                className="avatar-user"
                src={userData.image || auth.user.avatar}
              ></Avatar>
              <p>Address: {userData.address || "Chưa có"}</p>
              <p>Phone: {userData.phoneNumber || "Chưa có"}</p>
              <p>Email: {userData.email}</p>
              <p>
                Gender:{" "}
                {userData.gender === 1
                  ? "Male"
                  : userData.gender === 2
                    ? "FeMale"
                    : "Other"}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserSettings;
