
module.exports= app =>{

    const users=require('../controllers/user.controller')

    const router=require('express').Router()

    router.post('/saveUser',users.create)

    app.use('/api',router)  // --> context path
}

// http://localhost:8989/api/saveUser

// Server : app1  --> /api
//          app2  --> /api1