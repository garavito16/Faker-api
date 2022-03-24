const { faker } = require('@faker-js/faker');
const express = require('express');
const Usuario = require('./Models/Usuario');
const Empresa = require('./Models/Empresa');

const app = express();

app.get("/api/users/new",(req,res)=>{
    let user = new Usuario();
    console.log(user);
    res.status(200).json(user);
});

app.get("/api/companies/new",(req,res)=>{
    let company = new Empresa();
    console.log(company);
    res.status(200).json(company);
});

app.get("/api/user/company",(req,res)=>{
    let aux = {
        user : new Usuario(),
        company : new Empresa()
    }
    res.status(200).json(aux);
});

app.listen(8080, () => {
    console.log("el servidor se encuentra corriendo en el puerto 8080");
});
