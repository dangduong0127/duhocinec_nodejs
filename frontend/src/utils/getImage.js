import React from "react";

const getImageUrl = (path) => {
  const serverUrl = process.env.REACT_APP_SERVER_BASE_URL;

  return `${serverUrl}${path}`;
};

export default getImageUrl;
