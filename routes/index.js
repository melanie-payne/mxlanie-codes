var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "melanie codes" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "melanie codes" });
});

router.get("/about_me", function (req, res, next) {
  res.render("about_me", { title: "about mel" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "projects" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "services" });
});

router.get("/contact_me", function (req, res, next) {
  res.render("contact_me", { title: "contact me" });
});

router.get("/blog", function (req, res, next) {
  res.render("blog", { title: "blog" });
});

router.get("/welcome-to-my-blog", function (req, res, next) {
  res.render("welcome-to-my-blog", { title: "welcome to my blog" });
});

module.exports = router;
