const Sequilize = require('sequelize')
const db = require ('../config/database')
const { STRING } = require('sequelize')
const Testimonial = db.define('testimoniales',{
    nombre : {
        type: Sequilize.STRING
    },
    correo : {
        type: Sequilize.STRING
    },
    mensaje : {
        type: Sequilize.STRING
    }
})
module.exports = Testimonial
