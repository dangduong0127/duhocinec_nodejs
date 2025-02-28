const delay = (req, res, next) => {
  // if (req.path === "/api/v1/login" || req.path === "/api/v1/getallmenus") {
  //   next();
  // }
  console.log(req.cookies.access_token);
  // setTimeout(() => {
  //   // if (req.headers.authorization) {
  //   //   let token = req.headers.authorization.split(" ")[1];
  //   //   console.log(token);
  //   // }

  //   next();
  // }, 3000);
};

module.exports = delay;
