const {
  Users,
  Address
} = require('../database/models');
const bcrypt = require('bcrypt');

const registerController = {
  renderRegister: (req, res) => {
    res.render('register', {
      user: req.session.user
    });
  },
  registerUser: (req, res) => {
    const {
      nome,
      sobrenome,
      email,
      senha,
      rua,
      bairro,
      Cidade,
      numero,
      complemento,
      cep
    } = req.body;

    const passwordHash = bcrypt.hashSync(senha, 10);

     Users.create({
      first_name: nome,
      last_name: sobrenome,
      senha: passwordHash,
      email: email.toLowerCase(),
    }).then(function () {
      console.log('Cadastrado com sucesso!');
      req.session.success = true;
    }).catch(function (erro) {
      console.log(`Ops, houve um erro em Users: ${erro}`);
    })

     Address.create({
        rua: rua,
        bairro: bairro,
        UF: Cidade,
        num: numero,
        complemento: complemento,
        cep: cep
      }).then(function () {
        console.log('Cadastrado com sucesso!');
        req.session.success = true;
        return res.redirect('/');
      }).catch(function (erro) {
        console.log(`Ops, houve um erro em Address: ${erro}`);
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