const {
    validationResult
} = require('express-validator')
const {
    Users,
    Address
} = require("../database/models")

const loginController = {
    login: (req, res) => {
        res.render('login', {
            user: req.session.user
        })
    },
    loginUser: async (req,res)=> {
        const { email, senha, salvarInfo } = req.body

        const userExist = await Users.findOne({
            include: {
                model: Address,
                attributes: ["rua"]
            },
            where: {
                email
            }
        })
        
        if(userExist.email !== email) {
            return res.render('login', { erro: "~Usuário ou senha incorretos."})
        }

        if (userExist.senha !== senha) {
            return res.render('login', { erro: "~Usuário ou senha incorretos."})
        }

        const userStringfy = JSON.stringify({
            id: userExist.id,
            nome: userExist.first_name,
            email: userExist.email
        })
                 
        req.session.user = userStringfy
        
        if  (salvarInfo !== undefined){
            res.cookie('salvarInfo', userStringfy, {maxAge: 600000})
        };
        
        return res.redirect('/');
    }
}

module.exports = loginController