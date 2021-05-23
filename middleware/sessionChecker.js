module.exports = (req, res, next) =>{
    if (req.session.userid == undefined)
        res.redirect('/');
    else
        next();
}