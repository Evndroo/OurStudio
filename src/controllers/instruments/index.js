const model = require("../../models/instruments")


const getInstruments = (req, res) => {
    res.send("Instrumentos")
}


module.exports = {
    getInstruments
}