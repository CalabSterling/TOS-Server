const { Router } = require("express");
const { Order } = require("../models/index");
const validateSession = require("../middleware/validate-session");

const router = Router();

/*******************************
 ***********Create*************
*******************************/

router.post("/create", validateSession, function (req, res) {
    Order.create({
      pickupSite: req.body.order.pickupSite,
      dropoffSite: req.body.order.dropoffSite,
      pickupDate: req.body.order.pickupDate,
      tempControl: req.body.order.tempControl,
      orderNumber: req.body.order.orderNumber,
      referenceNumber: req.body.order.referenceNumber,
      palletCount: req.body.order.palletCount,
      weight: req.body.order.weight,
      tempSet: req.body.order.tempSet,
      customerId: req.body.order.customerId
    })
    .then((order) => res.status(200).json(order))
    .catch(err => res.status(500).json({message: err}))
})


router.get("/select", validateSession, async function (req, res) {
  try{
    Order.findOne(
      {where:{
          referenceNumber: req.body.order.referenceNumber
        }
      })
      .then((order) => res.status(200).json(order))
  }catch(e){
    res.status(500).json({message: e.message})
  }
});


router.put('/update/:id', validateSession, function (req, res) {
    const updateOrder = {
      pickupSite: req.body.order.pickupSite,
      dropoffSite: req.body.order.dropoffSite,
      pickupDate: req.body.order.pickupDate,
      tempControl: req.body.order.tempControl,
      orderNumber: req.body.order.orderNumber,
      referenceNumber: req.body.order.referenceNumber,
      palletCount: req.body.order.palletCount,
      weight: req.body.order.weight,
      tempSet: req.body.order.tempSet,
      customerId: req.body.order.customerId
    }
  
    const query = {where: {id: req.params.id}};
    Order.update(updateOrder, query)
      .then((order) => res.status(200).json(order))
      .catch((err) => res.status(500).json({error: err}))
  })


router.delete('/:id', validateSession, function (req, res) {
    const query = {where: { id: req.params.id }};

    Order.destroy(query)
    .then(() => res.status(200).json({message: "Upload has been removed"}))
    .catch((err) => res.status(500).json({error: err}))
})

module.exports = router;