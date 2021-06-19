const express=require('express')
const router=express.Router()

const userController=require('./controller/UserController')

router.get('/users',userController.index)
router.get('/user/:id',userController.show)
router.post('/user',userController.create)

module.exports=router