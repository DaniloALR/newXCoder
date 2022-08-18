const { validationResult } = require('express-validator')
const getInfoDatabase = require("../utils/getInfoDatabase")
const database = require('../database/models')

const loginController = {

    loginUser: (req,res)=>{
        const { email, senha, salvarInfo } = req.body
        let errors = validationResult(req)
        const users = getInfoDatabase('users');
        
        if(errors.isEmpty()){
            
        } else {
            return res.render('login', {errors: errors.mapped()})
        };
        
        if(email == ""){
            res.redirect("/login")
        }

        const usersExist = users.find(usuario => {
            return usuario.email === email && usuario.senha == senha
        });
         
        req.session.user = usersExist

        
        if(salvarInfo !== undefined){
            return res.cookie('salvarInfo', usersExist.email, {maxAge: 600000})
        };


        if(usersExist) {
            return res.redirect('/')
        } else {
            return res.redirect('/login')
        }

    },
    login: (req,res)=>{
        res.render('login', {user: req.session.user})
    }
}

module.exports = loginController