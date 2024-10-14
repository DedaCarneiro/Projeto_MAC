const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Ola mundo");
})

app.listen(8000, () => {
    console.log(`servidor de Pé: http://localhost:8000`);
})