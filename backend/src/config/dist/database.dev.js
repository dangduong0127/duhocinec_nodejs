"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var config = require("./config")[process.env.NODE_ENV]; // Option 3: Passing parameters separately (other dialects)


var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  // port: config.port,
  dialect: config.dialect,
  logging: config.logging,
  timezone: config.timezone
});

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sequelize.authenticate());

        case 3:
          console.log("Connection has been established successfully.");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Unable to connect to the database:", _context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
})();

module.exports = sequelize;