const userController = require('./controller/user');
const menbershipController = require('./controller/membership');
const orderController = require('./controller/order')
const dishesController = require('./controller/dishes')
const appointmentController = require('./controller/appointment')
const upload = require('./middleware/fileUpload')


module.exports = (router) => {
  router.prefix('/api');
  router
    .get('/profile', userController.profile)
    .post('/login', userController.login)
    .post('/register', userController.register)
    .post('/order/list',orderController.getAllOrderInfo)
    .post('/logout', userController.logout)
    .post('/addMembership', menbershipController.addMembership)
    .post('/selectMembership', menbershipController.selectMembership)
    .post('/addDishes', upload, dishesController.addDishes)
    .post('/dishesList', dishesController.dishesList)
    .get('/deleteDishes', dishesController.deleteDishes)
    .post('/addReserve', appointmentController.addReserve)
    .post('/reserveList', appointmentController.reserveList)
    .post('/editReserve', appointmentController.editReserve)
};
