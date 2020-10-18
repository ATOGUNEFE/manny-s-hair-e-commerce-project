const express = require('express')
const app = express()
const clientRouter = require('./routers/clients.js')
const PORT = 7500


app.use('/mannyshair', clientRouter)
app.use(express.static('public'))
app.set('view engine','ejs')

app.listen(PORT, console.log('server running on',`${PORT}`))

app.get('/', (req, res) =>{
  const products =[ {
    id: 1,
    product_image: 'image-1.jpg',
    product_tittle: 'Cool Clothing with Brown Stripes',
    product_price: '$5'
  }
]
  res.render('index.ejs', {products, products})
})

app.get('/product', (req, res) => {
  res.render('products.ejs')
})

app.get('/shop', (req, res) => {
  const products =[ {
    id: 1,
    product_image: 'image-1.jpg',
    product_tittle: 'Cool Clothing with Brown Stripes',
    product_price: '$5'
  }
]
  res.render('product_list.ejs', {products, products})
})


