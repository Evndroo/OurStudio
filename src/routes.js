const controllers = require("./controllers")

module.exports = (app) => {
    app.route("/instruments")
        .get(controllers.instruments.getInstruments)

    app.post("/client/register", controllers.user)
}