const initiateRoutes = require("./src/routes")
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

initiateRoutes(app)

app.listen(process.env.port || 8080, ()=>{
    console.log("Api rodando em http://localhost:8080")
})