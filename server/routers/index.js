const express = require('express')
const router = express.Router()

//Controladores
const nostrosConstroller = require('../controllers/nostrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')
module.exports = function(){
    router.get('/', homeController.consulasHomePage)
    router.get('/nosotros', nostrosConstroller.infoNosotros)
    router.get('/viajes', viajesController.mostrarViajes)
    router.get('/viajes/:id', viajesController.viajeById)
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales)
//Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.cargarTestimoniales )

return router
}
