const db = require("../db/queries");

async function getUsernames(req, res) {
  const search = req.query.search || "";
  let usernames;

  if (search) {
    usernames = await db.searchUsernames(search);
    console.log(`Search for usernames that match: ${search}`);
  } else {
    usernames = await db.getAllUsernames();
    console.log("Displaying all usernames");
  }
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("form");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteAllUsernames(req, res) {
    await db.deleteAllUsernames();
    res.send("All usernames deleted")
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames
};
