const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/employee
  axios
    .get("http://localhost:3000/api/employee")
    .then(function (response) {
      res.render("index", { employee: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_employee = (req, res) => {
  res.render("add_employee");
};

exports.update_employee = (req, res) => {
  axios
    .get("http://localhost:3000/api/employee", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_employee", { employee: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
