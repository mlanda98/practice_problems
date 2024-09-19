exports.logUsernames = (req, res) => {
  console.log("Usernames will be logged here - wip");
  res.send("Logging usernames (WIP)");
};

exports.shownForm = (req, res) => {
  res.render("form");
}

exports.saveUsername = (req, res) => {
  const {username} = req.body;

  console.log("Username to be saved:", username);

  res.send(`Username "${username}" will be saved (WIP)`);
}