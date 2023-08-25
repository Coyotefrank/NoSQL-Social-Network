const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require ('./userRoutes');
//this route is local host : port /api/users
router.use('/users',userRoutes);
//this route is local host : port /api/thoughts
router.use('/thoughts',thoughtRoutes);

module.exports=router