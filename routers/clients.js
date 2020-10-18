const express = require('express')
const router = express.Router()

const app = express()




router.get('/product', (req, res) => {
  res.render('products.ejs')
})

router.get('/shop', (req, res) => {
  res.render('product_list.ejs')
})

module.exports = router