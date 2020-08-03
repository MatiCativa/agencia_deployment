const Sequilize = require('sequelize')
const db = require ('../config/database')
const { STRING } = require('sequelize')

const Viaje = db.define('viaje', {
     titulo:{
         type: Sequilize.STRING
     },
     precio:{
         type: Sequilize.STRING
     },
     fecha_ida:{
         type: Sequilize.DATE
     },
     fecha_vuelta:{
         type: Sequilize.DATE
     },
     imagen:{
         type: Sequilize.STRING
     },
     descripcion:{
         type: Sequilize.STRING
     },
     disponibles:{
         type: Sequilize.STRING
     }


})

module.exports = Viaje