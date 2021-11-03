const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Customer } = require("../models/index");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/create", validateSession, function (req, res) {
    Customer.create({
      name: req.body.customer.name,
      contact1: req.body.customer.contact1,
      contact2: req.body.customer.contact2,
      email1: req.body.customer.email1,
      email2: req.body.customer.email2
    })
    .then((customer) => res.status(200).json(customer))
    .catch(err => res.status(500).json({message: err}))
})


router.get("/select", validateSession, async function (req, res) {
  try{
    Customer.findAll()
      .then((customer) => res.status(200).json(customer))
  }catch(e){
    res.status(500).json({message: e.message})
  }
});


router.put('/update/:id', validateSession, function (req, res) {
  const updateCustomer = {
      name: req.body.customer.name,
      contact1: req.body.customer.contact1,
      contact2: req.body.customer.contact2,
      email1: req.body.customer.email1,
      email2: req.body.customer.email2
  }

  const query = {where: {id: req.params.id}};
  Customer.update(updateCustomer, query)
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(500).json({error: err}))
})


router.delete('/:id', validateSession, function (req, res) {
    const query = {where: { id: req.params.id }};

    Customer.destroy(query)
    .then(() => res.status(200).json({message: "Upload has been removed"}))
    .catch((err) => res.status(500).json({error: err}))
})

module.exports = router;