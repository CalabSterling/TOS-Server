const { Router } = require("express");
const { OrderAdmin } = require("../models/index");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/create", validateSession, function (req, res) {
    OrderAdmin.create({
      carrierId: req.body.orderadmin.carrierId,
      status: req.body.orderadmin.status,
      equipment: req.body.orderadmin.equipment,
      sellRate: req.body.orderadmin.sellRate,
      proNumber: req.body.orderadmin.proNumber,
      pickupTime: req.body.orderadmin.pickupTime,
      orderId: req.body.orderadmin.orderId
    })
    .then((order) => res.status(200).json(order))
    .catch(err => res.status(500).json({message: err}))
})


router.get("/select", validateSession, async function (req, res) {
  try{
    OrderAdmin.findOne(
      {where:{
          proNumber: req.body.orderadmin.proNumber
        }
      })
      .then((order) => res.status(200).json(order))
  }catch(e){
    res.status(500).json({message: e.message})
  }
});


router.put('/update/:id', validateSession, function (req, res) {
  const updateOrder = {
    carrierId: req.body.orderadmin.carrierId,
    status: req.body.orderadmin.status,
    equipment: req.body.orderadmin.equipment,
    sellRate: req.body.orderadmin.sellRate,
    proNumber: req.body.orderadmin.proNumber,
    pickupTime: req.body.orderadmin.pickupTime,
    orderId: req.body.orderadmin.orderId
  }

  const query = {where: {id: req.params.id}};
  OrderAdmin.update(updateOrder, query)
    .then((orderadmin) => res.status(200).json(orderadmin))
    .catch((err) => res.status(500).json({error: err}))
})


router.delete('/:id', validateSession, function (req, res) {
    const query = {where: { id: req.params.id }};

    OrderAdmin.destroy(query)
    .then(() => res.status(200).json({message: "Upload has been removed"}))
    .catch((err) => res.status(500).json({error: err}))
})

module.exports = router;