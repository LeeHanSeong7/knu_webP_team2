const History = require('../../models/History.js')

module.exports = (req, res) => {
    History.create(req.body, (error, history) => {
        if (error) {
            return res.redirect('/history')
        }
        res.redirect('/history')
    })
}