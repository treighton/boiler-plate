// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require('../models')

module.exports = (app) => {
    app.get("/records", isAuthenticated, (req, res) => {
        db.Record.findAll({
            where: {
                UserId: req.user.id
            }
        }).then((records) => {
            console.log(records)
            res.render("records", {user: req.user, records});
        })
    });

    app.post("/records", isAuthenticated, (req, res) => {
        const {date, eggs, feed, mortality, moved, notes} = req.body
        console.log(req.body)
        db.Record.create({
           date,
           eggs,
           feed,
           mortality,
           moved,
           notes,
           UserId: req.user.id
        }).then(() => {
            res.redirect("/records");
        })
    });
}