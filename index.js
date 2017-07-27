
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


mongoose.connect(config.db, (err, res) => {
    if (err) return console.log('error en la conexiona la base de datos')

    console.log('conexion a la base de datos establecida....')
    app.listen(config.port, () => {
        console.log(`api escuchando en el puerto ${config.port}`)
    })
});