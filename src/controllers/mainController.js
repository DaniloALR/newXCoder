// const { validationResult } = require('express-validator')
// const getInfoDatabase = require("../utils/getInfoDatabase")
// const path = require('path');
// const fs = require('fs')


const mainController = {
    home: (req,res)=> {
        if (req.user) {
            res.render('home', {user: req.user})
        }

        res.render('home')
    },
    produtoInterno: (req,res)=>{
        res.render('produtoInterno', {user: req.user})
    },
    finalizeCompra: (req,res)=>{
        res.render('finalizeCompra', {user: req.user})
    },
    listagemDeProduto: (req,res)=>{
        res.render('listagemDeProduto', {user: req.user})
    },
    carrinho: (req,res)=>{
        res.render('carrinho', {user: req.user})
    },
    painelDoUsuario: (req,res)=>{
        res.render('paineldousuario', {user: req.user})
    },
    logout: (req,res)=>{
        req.session.destroy()
        res.redirect('/')
    },
}

module.exports = mainController