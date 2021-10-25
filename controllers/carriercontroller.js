const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Carrier } = require("../models/index");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/create", validateSession, function (req, res) {
    Carrier.create({
      name: req.body.carrier.name,
    })
    .then((carrier) => res.status(200).json(carrier))
    .catch(err => res.status(500).json({message: err}))
})


router.get("/select", validateSession, async function (req, res) {
  try{
    Carrier.findOne(
      {where:{
          name: req.body.carrier.name
        }
      })
      .then((carrier) => res.status(200).json(carrier))
  }catch(e){
    res.status(500).json({message: e.message})
  }
});


router.put('/update/:id', validateSession, function (req, res) {
  const updateCarrier = {
    name: req.body.carrier.name,
  }

  const query = {where: {id: req.params.id}};
  Carrier.update(updateCarrier, query)
    .then((carrier) => res.status(200).json(carrier))
    .catch((err) => res.status(500).json({error: err}))
})


router.delete('/:id', validateSession, function (req, res) {
    const query = {where: { id: req.params.id }};

    Carrier.destroy(query)
    .then(() => res.status(200).json({message: "Upload has been removed"}))
    .catch((err) => res.status(500).json({error: err}))
})

module.exports = router;