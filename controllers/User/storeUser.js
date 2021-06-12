const User = require('../../models/User.js')
const config = require('../../testConfig');

module.exports = (req,res)=>{ 
    User.findOne({username: req.body.username}, (err, user) => {
        if(err) {
            res.redirect('/signUp')
        }
        else if (user) {
            res.render(config.viewPath+'signUpView.ejs', {duplicate: true});
        }
        else {
            User.create(req.body, (error, user)=>{
                if(error){
                    return res.redirect('/signUp')        
                }        
                res.redirect('/')
            })
        }
    })
}