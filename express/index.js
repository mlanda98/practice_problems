// app file

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
  res.render("index");
})

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.status(404).render("404", { tile: "Page Not Found" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})
