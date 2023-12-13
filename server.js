require('dotenv').config()
const express = require('express')

// Importar rutas
const productRoutes = require('./routes/productRoutes')
const customerRoutes = require('./routes/customerRoutes')
const saleRoutes = require('./routes/salesRoutes')

const app = express()

/* MIDDLEWARES */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Rutas */
app.use('/abarrotes/v1', productRoutes)
app.use('/abarrotes/v1', customerRoutes)
app.use('/abarrotes/v1', saleRoutes)

/* Servidor encendido */
app.listen(3000, () => {
  console.log('SERVER ON: 3000')
})
