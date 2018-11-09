const express= require("express");
const router= express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated")
const permision = require("../middlewares/permision")
const isAdmited = require("../middlewares/isAdmited")
const {signUp, logIn, me, getAllUsers}= require("../controllers/users");
const {createRestaurant,getAllRestaurants,getOneRestaurants,getOneRestaurantsDishes}= require("../controllers/restaurants");
const {createDishes, getAllDishes,getOneDish,findDish}= require("../controllers/dishes")
const {createOrderDishes} = require('../controllers/orderdishes')
const {createOrder,getAllOrders,getOneOrders}= require('../controllers/orders')


//router.use('users/',require('./user'));
router.post('/users/signup/',signUp);
router.post('/users/login',logIn)
router.get('/users/me',isAuthenticated,me)
router.get('/users/admin',isAuthenticated,isAdmited,getAllUsers)


router.post('/restaurants',isAuthenticated,createRestaurant)
router.get('/restaurants/',getAllRestaurants)
router.get('/restaurants/:id',isAuthenticated,getOneRestaurants)
router.get('/restaurants/dishes/:id',isAuthenticated,getOneRestaurantsDishes)

router.post('/dishes',isAuthenticated,createDishes)
router.get('/dishes',getAllDishes)
router.get('/dishes/:id',getOneDish)
router.get('/dishes/find/:name',findDish)

router.post('/orderdishes',isAuthenticated,createOrderDishes)

router.post('/orders',isAuthenticated,createOrder)
router.get('/orders',isAuthenticated,getAllOrders)
router.get('/orders/:id',isAuthenticated,getOneOrders)

module.exports=router;





