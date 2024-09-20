const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "MayraLanda",
  database: "top_users",
  password: "Baseball24",
  port: 5432,
});
