const express = require('express')
const router = express.Router()
const saleController = require('../controllers/salesController')

router.post('/sales', (saleController.createSale))
router.get('/sales', (saleController.findAllSales))
router.get('/sales/:idSale', (saleController.findOneSale))
router.patch('/sales/:idSale', (saleController.updateOneSale))
router.delete('/sales/:idSale', (saleController.softDeleteSale))
router.delete('/sales/destroy/:idSale', (saleController.destroySale))

module.exports = router
