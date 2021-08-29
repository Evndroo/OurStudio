const model = require("../../models/user")

const getUsers = (req, res) => {
    res.send("Users")
}

module.exports = {
    getUsers
}