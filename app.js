const express = require('express');
const app = express();
const router = require('./src/routes/index')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src', 'views'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
    secret: "frasesupersecreta",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

app.use(express.static(path.join(__dirname,'src', 'public')))

app.use('/', router)

app.listen(3000, ()=>{console.log('servidor rodando na porta 3000')})