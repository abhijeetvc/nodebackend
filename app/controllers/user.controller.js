const db=require('../models')

const User=db.users 

// saving the data to collection
exports.create=(req,res)=>{

    console.log(req.body);
    
    const user=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        city:req.body.city 
    })

    // from mongoose
    user.save(user)
        .then(data=>{
            res.send(data)
        })
}
