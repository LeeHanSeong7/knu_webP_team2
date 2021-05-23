module.exports = (req,res) => {
    req.session.status = "lobby"
    let usersession = {
        "userid" : req.session.userid,
        "status" : req.session.status,
    }
    res.redirect('/lobby');
}