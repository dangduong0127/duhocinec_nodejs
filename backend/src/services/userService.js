const db = require("../models");
const { User, Category, SubMenu } = db;

const getAllUsers = async () => {
  try {
    const users = await User.findAll({ raw: true });
    return users;
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
    // const groupedMenus = Object.values(
    //   menus.reduce((acc, item) => {
    //     const { id, name, parent_id, path, position } = item;

    //     // Nếu menu cha chưa tồn tại trong `acc`, thêm vào
    //     if (!acc[id]) {
    //       acc[id] = {
    //         id,
    //         name,
    //         SubMenus: [],
    //       };
    //     }

    //     // Nếu có `parent_id`, tức là nó là SubMenu => Thêm vào danh sách `SubMenus` của cha
    //     if (parent_id && acc[parent_id]) {
    //       acc[parent_id].SubMenus.push({
    //         id,
    //         name,
    //         path,
    //         position,
    //         SubMenus: [],
    //       });
    //     }

    //     return acc;
    //   }, {})
    // );

    return groupedMenus;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllUsers, handleGetMenues };
