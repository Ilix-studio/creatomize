//products - techStuffRoutes
const express = require('express');
const router = express.Router();
const techStuffController = require('./../controllers/techStuffControllers');

router
.route('/')
.get(techStuffController.getAlltechStuff).post(techStuffController.createtechStuff)

router
.route('/:id')
.put(techStuffController.updatetechStuffById).delete(techStuffController.deletetechStuffById)

module.exports=router;