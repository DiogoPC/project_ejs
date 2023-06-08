const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){

    const items = [
        {
          title: "D", 
           message: "esenvolver aplicações/servirços de forma fácil"
        },

        {
            title: "E",
            message: "js usa JavaScript para renderizar html"
        },

        {
            title: "M",
            message: "uito fácil de usar"
        },

        {
            title: "A",
            message: "gil e veloz"
        },

        {
            title: "I",
            message: "nstall EJS"
        },

        {
            title: "S",
            message: "imples de usar"

        }

    ]
    res.render("pages/index", {
        qualitys: items,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("rodando");