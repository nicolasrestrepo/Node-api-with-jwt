const jwt = require('jwt-simple');
const moment = require('moment')
const config = require('../config')


function createToken(user) {

    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN)

}


function decodeToken(token) {
   const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN)
            if (payload.ext <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'el token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch (err) {
            reject({
                status: 500,
                messaje: 'token invalido'
            })
        }

    })

    return decode
}

module.exports = {
    createToken,
    decodeToken
}