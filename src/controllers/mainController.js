// const { validationResult } = require('express-validator')
// const getInfoDatabase = require("../utils/getInfoDatabase")
// const path = require('path');
// const fs = require('fs')


const mainController = {
    home: (req,res)=> {
        // console.log(req.user);
        if (req.user) {
            return res.render('home', {user: req.user})
        }

        return res.render('home')
    },
    produtoInterno: (req,res)=>{
        res.render('produtoInterno', {user: req.user})
    },
    finalizeCompra: (req,res)=>{
        res.render('finalizeCompra', {user: req.user})
    },
    listagemDeProduto: (req,res)=>{
        // console.log(req.user)
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