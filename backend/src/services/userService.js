const db = require("../models");
const { Op } = require("sequelize");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const {
  User,
  SubMenu,
  Role,
  Token,
  Menu,
  Country,
  PostMeta,
  Category,
  Post,
  Course,
  Order,
  OrderDetail,
} = db;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const PayOS = require("@payos/node");
const payos = new PayOS(
  process.env.YOUR_PAYOS_CLIENT_ID,
  process.env.YOUR_PAYOS_API_KEY,
  process.env.YOUR_PAYOS_CHECKSUM_KEY
);

const getAllUsers = async (req, res) => {
  try {
    const checkToken = await Token.findAll({
      where: {
        token: req.cookies?.access_token,
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
    if (!data.email || !data.password || !data.username) {
      return {
        success: false,
        message: "Missing required fields",
      };
    } else {
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
    }
  } catch (err) {
    console.log(err);
  }
};

const handleGetMenues = async () => {
  try {
    const menus = await Menu.findAll({
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
      where: { email: email },
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
    if (!userId) {
      return {
        success: false,
        message: "User ID is required",
      };
    } else {
      const userData = await User.findOne({
        raw: true,
        nest: true,
        where: { id: userId },
        attributes: { exclude: ["password"] },
      });
      return userData;
    }
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

const hanldeGetAllCountries = async () => {
  try {
    const countries = await Country.findAll({
      raw: false,
      nest: true,
      include: [
        {
          model: User,
          as: "users",
          attributes: ["firstName", "lastName"],
        },
        {
          model: PostMeta,
          as: "postMeta",
        },
      ],
    });
    return countries;
  } catch (err) {
    console.log(err);
  }
};

// const hanldeUpdateCountry = async (data) => {
//   try {
//     const country = await Country.findOne({
//       raw: false,
//       include: {
//         model: PostMeta,
//         as: "postMeta",
//       },
//       where: { id: data.id },
//     });
//     if (country) {
//       country.title = data.title;
//       country.excerpt = data.excerpt;
//       country.content = data.content;
//       country.thumbnail = data.thumbnail;
//       country.author = data.author;
//       country.slug = data.slug;
//       await country.save();
//       return {
//         success: true,
//         message: "Country updated successfully",
//       };
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const hanldeUpdateCountry = async (data) => {
  try {
    const country = await Country.findOne({
      raw: false,
      include: {
        model: PostMeta,
        as: "postMeta",
      },
      where: { id: data.id },
    });

    if (!country) {
      return {
        success: false,
        message: "Country not found",
      };
    }

    // console.log(country.dataValues);
    // // Cập nhật các thuộc tính chính của Country
    country.title = data.title;
    country.excerpt = data.excerpt;
    country.content = data.content;
    country.thumbnail = data.thumbnail;
    country.author = data.author;
    country.slug = data.slug;
    if (data.postMeta) {
      for (let i = 0; i < data.postMeta.length; i++) {
        const postMetaData = data.postMeta[i];
        const postMetaItem = await PostMeta.findOne({
          raw: false,
          where: { post_id: country.id, field_name: postMetaData.field_name },
        });

        if (postMetaItem) {
          // Cập nhật trường field_value của PostMeta
          postMetaItem.field_value = postMetaData.field_value;
          await postMetaItem.save();
        }
      }
    }

    await country.save();
    return {
      success: true,
      message: "Country updated successfully",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "An error occurred while updating the country",
    };
  }
};

const hanldeGetCountryDetails = async (postID) => {
  try {
    if (!postID) {
      return {
        success: false,
        message: "Post ID is required",
      };
    }
    const country = await Country.findOne({
      raw: false,
      include: {
        model: PostMeta,
        as: "postMeta",
      },
      where: {
        id: postID,
      },
    });

    if (country) {
      return {
        success: true,
        message: "Country fetched successfully",
        details: country,
      };
    } else {
      return {
        success: false,
        message: "Country not found",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const handleGetAllCategory = async () => {
  try {
    const categories = await Category.findAll({
      raw: false,
      nest: true,
      attributes: ["id", "name", "path", "position"],
      include: [
        {
          model: Post,
          as: "postsCategory",
        },
        {
          model: Course,
          as: "coursesCate",
        },
        {
          model: Country,
          as: "countriesCate",
        },
      ],
    });

    return categories;
  } catch (err) {
    console.log(err);
  }
};

const hanldeGetAllPosts = async () => {
  try {
    const posts = await Post.findAll({
      raw: false,
      nest: true,
      include: {
        model: User,
        as: "author_inf",
        attributes: ["firstName", "lastName"],
      },
    });

    return posts;
  } catch (err) {
    console.log(err);
  }
};

const handleUpdatePost = async (data) => {
  try {
    const post = await Post.findOne({
      raw: false,
      where: { id: data.id },
    });

    if (!post) {
      return {
        success: false,
        message: "Post not found",
      };
    }

    // console.log(country.dataValues);
    // // Cập nhật các thuộc tính chính của Country
    post.title = data.title;
    post.content = data.content;
    post.image = data.image;
    // post.author = data.fullName;
    post.slug = data.slug;

    await post.save();
    return {
      success: true,
      message: "Post updated successfully",
    };
  } catch (err) {
    console.log(err);
  }
};

const hanldeCreatePost = async (data) => {
  try {
    if (data) {
      console.log(data);
      const post = await Post.create({
        // author: data.author,
        category_id: data.category_id,
        slug: data.slug,
        title: data.title,
        content: data.content,
        image: data.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return {
        success: true,
        message: "Post created successfully",
        post_id: post.id,
      };
    } else {
      return {
        success: false,
        message: "Data is required",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const handleSearchPosts = async (key) => {
  try {
    if (key) {
      const posts = await Post.findAll({
        raw: false,
        nest: true,
        where: {
          title: { [Op.like]: `%${key}%` },
        },
        include: [
          {
            model: Category,
            as: "postsCategory",
            attributes: ["name", "path"],
          },
        ],
      });

      const countries = await Country.findAll({
        raw: false,
        nest: true,
        where: {
          title: { [Op.like]: `%${key}%` },
        },
        include: [
          {
            model: Category,
            as: "countriesCate",
            attributes: ["name", "path"],
          },
        ],
      });

      const courses = await Course.findAll({
        raw: false,
        nest: true,
        where: {
          title: { [Op.like]: `%${key}%` },
        },
        include: [
          {
            model: Category,
            as: "coursesCate",
            attributes: ["name", "path"],
          },
        ],
      });

      if (posts.length > 0 || countries.length > 0 || courses.length > 0) {
        return {
          success: true,
          message: "post found successfully",
          keywords: key,
          posts,
          countries,
          courses,
        };
      } else if (
        posts.length === 0 &&
        countries.length === 0 &&
        courses.length === 0
      ) {
        return {
          success: false,
          message: "No post found",
          keywords: key,
        };
      }
    } else {
      return {
        success: false,
        message: "Key is required",
        keywords: key,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const handleGetAllCourses = async () => {
  try {
    const courses = await Course.findAll({
      raw: false,
      nest: true,
      include: [
        {
          model: Category,
          as: "coursesCate",
        },
        {
          model: User,
          as: "authorCourse",
          attributes: ["firstName", "lastName"],
        },
      ],
    });

    return courses;
  } catch (err) {
    console.log(err);
  }
};

const handleUpdateCourse = async (data) => {
  try {
    const course = await Course.findOne({
      raw: false,
      where: { id: data.id },
    });

    if (!course) {
      return {
        success: false,
        message: "Course not found",
      };
    }
    course.title = data.title;
    course.excerpt = data.excerpt;
    course.content = data.content;
    course.price = data.price;
    course.stock = data.stock;
    course.thumbnail = data.thumbnail;
    course.slug = data.slug;

    await course.save();
    return {
      success: true,
      message: "Course updated successfully",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "An error occurred while updating the country",
    };
  }
};

const hanldeCreateCourse = async (data) => {
  try {
    if (data) {
      await Course.create({
        // author: data.author,
        category_id: 30,
        slug: data.slug,
        title: data.title,
        content: data.content,
        thumbnail: data.thumbnail,
        excerpt: data.excerpt,
        price: data.price,
        stock: data.stock,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return {
        success: true,
        message: "Course created successfully",
      };
    } else {
      return {
        success: false,
        message: "Data is required",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const handleGetCourseToCart = async (data) => {
  try {
    if (data.length > 0) {
      const courses = await Course.findAll({
        raw: false,
        nest: true,
        where: {
          id: data.map((item) => item.id),
        },
      });
      return {
        success: true,
        message: "Courses fetched successfully",
        courses,
      };
    } else {
      return {
        success: false,
        message: "cart is empty",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const handleCreateOrder = async (data) => {
  try {
    let totalAmout = data.body.reduce((total, item) => {
      return total + parseFloat(item.price);
    }, 0);
    // Kiểm tra xem có đơn hàng nào của user đang pending không
    const idCourse = data.body.map((item) => item.id);

    const checkOrder = await Order.findAll({
      raw: false,
      nest: true,
      where: {
        user_id: data.user.userId,
        status: "completed",
      },
      include: [
        {
          model: OrderDetail,
          as: "orderDetails",
          where: {
            course_id: {
              [Op.in]: idCourse,
            },
          },
        },
      ],
      // logging: console.log,
    });

    const checkPendingOrder = await Order.findAll({
      raw: false,
      nest: true,
      where: {
        user_id: data.user.userId,
        status: "pending",
      },
      include: [
        {
          model: OrderDetail,
          as: "orderDetails",
          where: {
            course_id: {
              [Op.in]: idCourse,
            },
          },
        },
      ],
    });
    // console.log(checkPendingOrder);
    if (checkPendingOrder.length > 0) {
      const orderDetailIds = [];
      checkPendingOrder[0].dataValues.orderDetails.forEach((orderDetail) => {
        orderDetailIds.push({ course_id: orderDetail.course_id });
      });
      const orderID = checkPendingOrder[0].dataValues.id;
      const uniqueCourse = data.body.filter(
        (item1) => !orderDetailIds.some((item2) => item2.course_id === item1.id)
      );
      if (uniqueCourse.length > 0) {
        for (const item of uniqueCourse) {
          await OrderDetail.create({
            order_id: orderID,
            course_id: item.id,
            quantity: 1,
            price: item.price,
          });
        }
        return {
          success: true,
          message: "Order created successfully",
          order_id: orderID,
        };
      } else {
        return {
          success: true,
          message: "All courses in cart have been ordered",
          order_id: orderID,
        };
      }
    } else {
      const createOrder = await Order.create({
        user_id: data.user.userId,
        status: "pending",
        total_amount: totalAmout,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      for (const item of data.body) {
        await OrderDetail.create({
          order_id: createOrder.dataValues.id,
          course_id: item.id,
          quantity: 1,
          price: item.price,
        });
      }

      return {
        courses: data.body,
        success: true,
        message: "Order created successfully",
        order_id: createOrder.dataValues.id,
      };
    }

    // if (checkOrder.length === 0) {
    //   const createOrder = await Order.create({
    //     user_id: data.user.userId,
    //     status: "pending",
    //     total_amount: totalAmout,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   });

    //   for (const item of data.body) {
    //     await OrderDetail.create({
    //       order_id: createOrder.dataValues.id,
    //       course_id: item.id,
    //       quantity: 1,
    //       price: item.price,
    //     });
    //   }

    //   return {
    //     success: true,
    //     message: "Order created successfully",
    //   };
    // } else {
    //   return {
    //     success: false,
    //     message: "You have already placed an order",
    //     courses: checkOrder[0]?.dataValues?.orderDetails,
    //   };
    // }
  } catch (err) {
    console.log(err);
  }
};

const handleGetAllCart = async (userId) => {
  try {
    if (userId) {
      const orders = await Order.findAll({
        raw: false,
        nest: true,
        where: {
          user_id: userId,
          status: "pending",
        },
        include: [
          {
            model: OrderDetail,
            as: "orderDetails",
          },
        ],
      });

      if (orders) {
        return {
          success: true,
          message: "Cart fetched successfully",
          cart: orders,
        };
      } else {
        return {
          success: false,
          message: "Cart is empty",
          cart: [],
        };
      }
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

const handleDeleteProduct = async (data) => {
  const userID = data.user.userId; // Sử dụng `const` hoặc `let` để khai báo biến
  const dataBody = data.body;
  // console.log(dataBody);

  // console.log(checkOrder);
  await OrderDetail.destroy({
    where: {
      course_id: {
        [Op.in]: dataBody.map((item) => item.id),
      },
    },
    include: [
      {
        model: Order,
        where: {
          user_id: userID,
        },
      },
    ],
  });

  const checkOrder = await Order.findAll({
    raw: false,
    nest: true,
    where: {
      user_id: userID,
    },
    include: [
      {
        model: OrderDetail,
        as: "orderDetails",
      },
    ],
  });
  if (checkOrder.length > 0) {
    if (checkOrder[0].dataValues.orderDetails.length === 0) {
      await Order.destroy({
        where: {
          id: checkOrder[0].dataValues.id,
        },
      });
    }
  }

  return {
    success: true,
    message: "Course(s) deleted successfully",
    del: dataBody,
  };

  // if (dataBody.course_ids && dataBody.course_ids.length > 0) {
  //   try {
  //     // Xử lý khi có ít nhất một course_id trong mảng
  //     const deleteProduct = await OrderDetail.destroy({
  //       where: {
  //         course_id: {
  //           [Op.in]: dataBody.course_ids.id, // Xử lý nhiều course_ids
  //         },
  //       },
  //       include: [
  //         {
  //           model: Order,
  //           where: {
  //             user_id: userID,
  //           },
  //         },
  //       ],
  //     });

  //     if (deleteProduct) {
  //       return {
  //         success: true,
  //         message: "Course(s) deleted successfully",
  //       };
  //     } else {
  //       return {
  //         success: false,
  //         message: "No courses found to delete",
  //       };
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return {
  //       success: false,
  //       message: "Error deleting course(s)",
  //     };
  //   }
  // } else {
  //   return {
  //     success: false,
  //     message: "No course_ids provided",
  //   };
  // }
};

const hanldeCreatePaymentLink = async ({ data, orderCode }, userID) => {
  try {
    let totalAmout = data.reduce((total, item) => {
      return total + parseFloat(item.price);
    }, 0);

    const requestData = {
      orderCode: orderCode,
      amount: totalAmout,
      description: "Thanh toan don hang",
      items: data.map((item) => {
        return {
          name: item.title,
          quantity: 1,
          price: parseFloat(item.price),
        };
      }),
      cancelUrl: process.env.DOMAIN_ALLOWED,
      returnUrl: process.env.DOMAIN_ALLOWED,
    };
    const paymentLinkData = await payos.createPaymentLink(requestData);
    return paymentLinkData;
  } catch (err) {
    console.log(err);
  }
};

const handleGetPaymentInfo = async (id) => {
  const result = await payos.getPaymentLinkInformation(id);
  if (result.status === "PAID") {
    const order = await Order.findOne({
      raw: false,
      where: {
        id: result.orderCode,
      },
    });

    order.status = "completed";
    await order.save();
  }
  return result;
};

const handleCancelOrder = async (orderID) => {
  const cancellationReason = "reason";

  const result = await payos.cancelPaymentLink(orderID, cancellationReason);
  return result;
};

const handleWebhookPayOS = async (data) => {
  const paymentData = await payos.verifyPaymentWebhookData(data); // Xác minh dữ liệu từ webhook
  console.log(paymentData);
  if (paymentData.desc === "success" && paymentData.code === "00") {
    const order = await Order.findOne({
      raw: false,
      where: {
        id: paymentData.orderCode,
      },
    });

    order.status = "completed";
    await order.save();
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
  hanldeGetAllCountries,
  hanldeUpdateCountry,
  hanldeGetCountryDetails,
  handleGetAllCategory,
  hanldeGetAllPosts,
  handleUpdatePost,
  hanldeCreatePost,
  handleSearchPosts,
  handleGetAllCourses,
  handleUpdateCourse,
  hanldeCreateCourse,
  handleGetCourseToCart,
  handleCreateOrder,
  handleGetAllCart,
  handleDeleteProduct,
  hanldeCreatePaymentLink,
  handleGetPaymentInfo,
  handleCancelOrder,
  handleWebhookPayOS,
};
