const verifyIfUserIsLogged = (req, res, next) => {
    // 1. Ver se o usuário existe na sessão ou no cookie
        // Se o usuário não existir, eu direciono pro login
    if(!req.session.user && !req.cookies.salvarInfo) {
        return res.redirect('/login');
    }

    // console.log(req.session.user)
    // console.log(req.cookies.salvarInfo)

    // Se ele existir, deixo o middleware passar
    const user = req.session.user ? 
        JSON.parse(req.session.user) : 
        JSON.parse(req.cookies.salvarInfo)

        // console.log(user)

    req.user = user

    next()
}

module.exports = verifyIfUserIsLogged