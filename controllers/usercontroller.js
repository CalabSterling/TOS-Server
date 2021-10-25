const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { User } = require("../models/index");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/create", function (req, res) {
    User.create({
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      username: req.body.user.username,
      password: bcrypt.hashSync(req.body.user.password, 15),
      role: req.body.user.role,
      customerId: req.body.user.customerId
    })
    .then(
      function createSuccessful(user) {
        let token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
        let id= user.id;
        
        res.json({
            user: user,
            message: 'User successfully created',
            sessionToken: token,
            ID: id
        });
    })
    .catch(err => res.status(500).json({message: err}))
})

router.post("/login", async function (req, res) {
  try{
    User.findOne(
      {where:{
          username: req.body.user.username
        }
      })
    .then(function loginSuccess(user) {
        if (user) {
            bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
                if (matches) {

            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 })
            let id = user.id

            res.status(200).json({
                user: user,
                message: "User successfully logged in!",
                sessionToken: token,
                ID: id
            })
        } else {
            res.status(502).send({error: "Login Failed"});
        }
        });
    } else {
            res.status(500).json({ error: "User does not exist."})
        }
    })
  }catch(e){
    res.status(500).json({message: e.message})
  }
});

module.exports = router;
