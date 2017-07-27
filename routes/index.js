const express = require('express')

const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

//product routes
api.get('/product', productCtrl.getProducts )
api.get('/product/:productId', productCtrl.getProduct);
api.post('/product', productCtrl.saveProduct);
api.put('/product/:productId', productCtrl.updatedProduct);
api.delete('/product/:productId', productCtrl.deleteProduct);
//user routes
api.post('/signUp', userCtrl.signUp)
api.post('/signIn', userCtrl.signIn)
api.get('/private', auth, function(req, res) {
    res.status(200).send({message: 'acceso autorizado'})
})
module.exports = api
