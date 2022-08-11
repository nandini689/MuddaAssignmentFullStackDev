var EmployeeDb = require('../model/model');

// create and save new employee
exports.create = (req,res)=>{
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  // new employee
  const employee = new EmployeeDb({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile: req.body.mobile,
    //   gender: req.body,
    designation: req.body.designation,
    // dateOfJoining: req.body.dateOfJoining,
    manager: req.body.manager,
    salary: req.body.salary,
    employeecode: req.body.employeecode,
    location: req.body.location,
    state: req.body.state,
    country: req.body.country,
    department: req.body.department,

    deletedAt: req.body.deletedAt,
  });

  // save employee in the database
  employee
    .save(employee)
    .then((data) => {
      //res.send(data)
      res.redirect("/add-employee");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
}

// retrieve and return all employee/ retrive and return a single employee
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        EmployeeDb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found employee with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving employee with id " + id})
            })

    }else{
        EmployeeDb.find()
            .then(employee => {
                res.send(employee)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving employee information" })
            })
    }

    
}

// Update a new idetified employee by employee id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    EmployeeDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update employee with ${id}. Maybe employee not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update employee information"})
        })
}

// Delete a employee with specified employee id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    EmployeeDb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });

}