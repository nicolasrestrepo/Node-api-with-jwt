const Product = require('../models/product')

function getProducts(req, res) {
    Product.find({}, (err, products) => {

        if (err) return res.status(500).send({ message: `se produjo un error ${err}` })

        if (!products) return res.status.send({ message: 'No se encontraron productos' })

        res.status(200).send({ products })
    })
}

function getProduct(req, res) {
    const productId = req.params.productId

    Product.findById(productId, (err, product) => {

        if (err) return res.status(500).send({ message: `se produjo un error ${err}` });

        if (!product) return res.status(404).send({ message: 'El producto no fue encontrado' });

        res.status(200).send({ product })
    })
}

function saveProduct(req, res) {
    console.log('POST /api/products')
    let product = new Product();

    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send(`error al guardar en la base de datos ${err}`)
        res.status(200).send({ product: productStored })
    })
}

function updatedProduct(req, res) {
    console.log('peticion put')
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({ message: 'error al intentar modificar el producti' })

        res.status(200).send({ product: productUpdated })
    })

}

function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `ocurrio un error ${err}` })

        product.remove(err => {
            if (err) return res.status(500).send({ message: `ocurrio un error ${err}` })

            res.send(200).send({ message: 'el mensaje fue borrado exitosamente' })
        })
    })
}

module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    updatedProduct,
    deleteProduct,
}