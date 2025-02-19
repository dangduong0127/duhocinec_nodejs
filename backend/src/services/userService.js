const db = require("../models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User, Category, SubMenu, Role, Token } = db;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getAllUsers = async (req, res) => {
  try {
    const checkToken = await Token.findAll({
      where: {
        token: req.headers.authorization?.split(" ")[1],
      },
    });
    // console.log(checkToken);
    if (checkToken.length > 0) {
      const users = await User.findAll({
        raw: true,
        nest: true,
        attributes: { exclude: ["password"] },
        include: [
          {
            model: Role,
            as: "role",
            attributes: ["name"],
          },
        ],
      });
      return users;
    } else {
      return {
        success: false,
        message: "Invalid token",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const createUserService = async (data) => {
  try {
    //Check if user already exists
    const existingUser = await User.findOne({ where: { email: data.email } });
    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    } else {
      //hash password
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);

      await User.create({
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender,
        roleId: 2,
        phoneNumber: data.phoneNumber,
        image: data.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return {
        success: true,
        message: "User created successfully",
        // data: result,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const handleGetMenues = async () => {
  try {
    const menus = await Category.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: SubMenu,
          as: "SubMenus",
          attributes: ["id", "name", "parent_id", "path", "position"],
        },
      ],
    });

    const groupedMenus = Object.values(
      menus.reduce((acc, item) => {
        const { id, name, path, position, SubMenus } = item;

        if (!acc[id]) {
          acc[id] = {
            id,
            name,
            path,
            position,
            SubMenus: [],
          };
        }

        // Kiểm tra nếu SubMenus không null thì thêm vào danh sách
        if (SubMenus && SubMenus.id) {
          acc[id].SubMenus.push(SubMenus);
        }

        return acc;
      }, {})
    );
    return groupedMenus;
  } catch (err) {
    console.log(err);
  }
};

const handleLogin = async (email, password) => {
  try {
    const user = await User.findOne({
      where: [{ email: email }],
    });

    if (user) {
      const comparePass = await bcrypt.compare(password, user.password);
      if (comparePass) {
        // create token
        const payload = {
          email: user.email || "",
          userId: user.id || "",
          roleId: user.roleId || "",
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES,
        });

        await Token.destroy({ where: { user_id: user.id } });
        await Token.create({ user_id: user.id, token: access_token });
        // const fullName = user.firstName + user.lastName;
        return {
          success: true,
          message: "Login success",
          accessToken: access_token,
          // user: {
          //   email: user.email,
          //   userId: user.id,
          //   fullName: fullName,
          //   avatarUrl: user.image,
          // },
        };
      } else {
        return { success: false, message: "Invalid password" };
      }
    } else {
      return { success: false, message: "User not found" };
    }
  } catch (err) {
    console.log(err);
  }
};

const hanldeLogout = async (userId) => {
  try {
    await Token.destroy({ where: { user_id: userId } });
    return { success: true, message: "Logout success" };
  } catch (err) {
    console.log(err);
  }
};

const getUserInfo = async (userId) => {
  try {
    const userData = await User.findOne({
      raw: true,
      nest: true,
      where: { id: userId },
      attributes: { exclude: ["password"] },
    });
    return userData;
  } catch (err) {
    console.log(err);
  }
};

const handleUpdateUser = async (data) => {
  try {
    if (!data.id) {
      return {
        success: false,
        message: "User ID is required",
      };
    }

    let user = await User.findOne({
      raw: false,
      attributes: { exclude: ["password"] },
      where: { id: data.id },
    });

    if (user) {
      (user.firstName = data.lastName),
        (user.lastName = data.firstName),
        (user.address = data.address),
        (user.gender = data.gender),
        (user.phoneNumber = data.phoneNumber),
        (user.image = data.image),
        (user.roleId = data.roleId);
      user.updatedAt = new Date();
      await user.save();
      return {
        success: true,
        message: "User updated successfully",
      };
    } else {
      return {
        success: false,
        message: "User not found",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const handleDeleteUser = async (userId) => {
  try {
    if (!userId.id) {
      return {
        success: false,
        message: "User ID is required",
      };
    }

    const deleteUser = await User.destroy({
      where: { id: userId.id },
    });

    if (deleteUser) {
      return { success: true, message: "User deleted successfully" };
    } else {
      return { success: false, message: "User not found" };
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
  handleGetMenues,
  createUserService,
  handleLogin,
  hanldeLogout,
  getUserInfo,
  handleUpdateUser,
  handleDeleteUser,
};
