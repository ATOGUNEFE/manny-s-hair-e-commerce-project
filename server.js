const express = require('express')
const app = express()
const clientRouter = require('./routers/clients.js')
const port = 9090


app.use(express.static('public'))
app.set('view engine','ejs')
app.use('/mannyshair', clientRouter)

app.listen(process.env.PORT || port, console.log('server running on port',`${port}`))

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



