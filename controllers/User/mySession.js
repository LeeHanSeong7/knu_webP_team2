module.exports = (req,res) => {
    let usersession = {
        "userid" : req.session.userid,
        "status" : req.session.status,
    }
    res.json(usersession);
}
