const db = require("../models");
const { User, Category, SubMenu } = db;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getAllUsers = async () => {
  try {
    const users = await User.findAll({ raw: true });
    return users;
  } catch (err) {
    console.log(err);
  }
};

const createUserService = async (data) => {
  try {
    //hash password
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const result = await User.create({
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
    return result;
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

module.exports = { getAllUsers, handleGetMenues, createUserService };
