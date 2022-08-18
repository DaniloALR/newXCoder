// const { validationResult } = require('express-validator')
// const getInfoDatabase = require("../utils/getInfoDatabase")
// const path = require('path');
// const fs = require('fs')


const mainController = {
    home: (req,res)=>{
        res.render('home', {user: req.session.user})
    },
    listaDeDesejos: (req,res)=>{
        res.render('listaDeDesejos', {user: req.session.user})
    },
    produtoInterno: (req,res)=>{
        res.render('produtoInterno', {user: req.session.user})
    },
    finalizeCompra: (req,res)=>{
        res.render('finalizeCompra', {user: req.session.user})
    },
    listagemDeProduto: (req,res)=>{
        res.render('listagemDeProduto', {user: req.session.user})
    },
    carrinho: (req,res)=>{
        res.render('carrinho', {user: req.session.user})
    },
    painelDoUsuario: (req,res)=>{
        res.render('paineldousuario', {user: req.session.user})
    },
    logout: (req,res)=>{
        req.session.destroy()
        res.redirect('/')
    },
}

module.exports = mainController