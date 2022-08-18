const {
    Users,
    Address
  } = require('../database/models');
  const bcrypt = require('bcrypt');
  
  const registerController = {
    renderRegister: (req, res) => {
      res.render('register', {user: req.session.user});
    },
    registerUser: (req, res) => {
      const {
        name,
        email,
        password
      } = req.body;
  
      const passwordHash = bcrypt.hashSync(password, 10);
      console.log(req.body)
  
      Users.create({
        nome: nome,
        email: email.toLowerCase()
      }).then(function () {
        console.log('Cadastrado com sucesso!');
        req.session.success = true;
        return res.redirect('/');
      }).catch(function (erro) {
        console.log(`Ops, houve um erro: ${erro}`);
      })
      // Users.create({
      //   name,
      //   email,
      //   password: passwordHash,
      // }).then(() => {
      //   res.redirect('/login');
      // }).catch(error => res.send(error))
    }
  }
  
  module.exports = registerController;