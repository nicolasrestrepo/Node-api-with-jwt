
const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services');

function signUp(req, res){
const user = new User({
    email: req.body.email,
    displayName: req.body.displayName
})

user.save((err) =>{
    if(err) res.status(500).send({message: 'error al crear el usuario'})
    
    res.status(200).send({ token: service.createToken(user)})
})
}

function signIn(req, res){
    User.find({email: req.body.email}, (err, user) => {
        if(err) res.status(500).send({message: 'ocurrio un error'})
        if(!user) res.status(404).send({message: 'el usuario no existe'})

        req.user = user
        res.status(200).send({
            message: 'Logueo exitoso',
            token: service.createToken(user)
        })
    })
}

module.exports = {
    signIn,
    signUp
}