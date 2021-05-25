const User = require('../../models/User.js')


module.exports = (req,res)=>{ 
    User.findOne({username: req.body.username}, (err, user) => {
        if(err) {
            return res.status(500).json({ message: 'Error!'})
        }
        else if (user) {
            return res.status(404).json({message: 'Already Exists!'})
        }
        else {
            User.create(req.body, (error, user)=>{
                if(error){
                    return res.redirect('/signUp')        
                }        
                res.redirect('/signUp')
            })
        }
    })
}