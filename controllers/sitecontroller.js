const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Site } = require("../models/index");
const validateSession = require("../middleware/validate-session");

const router = Router();

router.post("/create", validateSession, function (req, res) {
    Site.create({
      name: req.body.site.name,
      address: req.body.site.address,
      address2: req.body.site.address2,
      city: req.body.site.city,
      state: req.body.site.state,
      zipCode: req.body.site.zipCode,
    })
    .then((site) => res.status(200).json(site))
    .catch(err => res.status(500).json({message: err}))
})


router.get("/select", validateSession, async function (req, res) {
  try{
    Site.findAll()
      .then((site) => res.status(200).json(site))
  }catch(e){
    res.status(500).json({message: e.message})
  }
});


router.put('/update/:id', validateSession, function (req, res) {
  const updateSite = {
    name: req.body.site.name,
    address: req.body.site.address,
    address2: req.body.site.address2,
    city: req.body.site.city,
    state: req.body.site.state,
    zipCode: req.body.site.zipCode,
  }

  const query = {where: {id: req.params.id}};
  Site.update(updateSite, query)
    .then((site) => res.status(200).json(site))
    .catch((err) => res.status(500).json({error: err}))
})


router.delete('/:id', validateSession, function (req, res) {
    const query = {where: { id: req.params.id }};

    Site.destroy(query)
    .then(() => res.status(200).json({message: "Upload has been removed"}))
    .catch((err) => res.status(500).json({error: err}))
})

module.exports = router;