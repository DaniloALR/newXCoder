const express = require('express');
const app = express();
const router = require('./src/routes/index')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src', 'views'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
    secret: "frase super secreta",
    resave: true,
    saveUninitialized: true
}))

app.use(express.static(path.join(__dirname,'src', 'public')))
app.use('/', router)

app.listen(3000, ()=>{console.log('servidor rodando na porta 3000')})