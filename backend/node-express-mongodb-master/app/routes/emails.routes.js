module.exports = app => {
  const email = require("../controllers/email.controller.js");

  var router = require("express").Router();

  // Create a new email
  router.post("/emails", email.create);

  // Retrieve all emais
  router.get("/emails", email.findAll);

  router.get('/headphone/:id',email.updateHeadphone)


  app.use("/api", router);
};
