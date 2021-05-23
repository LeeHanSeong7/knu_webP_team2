module.exports = (req,res) => {
    res.json({
        "res" : "true",
        "status" : req.session.status,
    });
}