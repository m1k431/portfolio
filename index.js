const
    compression = require('compression'),
    minify = require('express-minify'),
    favicon = require('serve-favicon'),
    path = require('path'),
    express = require('express'),
    helmet = require('helmet'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    app = express(),
    server = require('http').createServer(app),
    frameguard = require('frameguard')


jsonParser = bodyParser.json()
urlencodedParser = bodyParser.urlencoded({
    extended: false
})

let p0rt = 80
var sess = {
    secret: 'azerty',
    cookie: {},
    resave: false,
    saveUninitialized: true
}

app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')))
app.use(helmet())
app.use(frameguard({
    action: 'sameorigin'
  }))
app.use(compression())
app.use(minify({
    cache: false,
    jsMatch: /js/,
    cssMatch: /css/,
    sassMatch: /scss/
}))
app.use('/static', express.static(__dirname + '/public', {
    maxage: '0d'
}))
app.use(session(sess))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.set('views', 'public')

//app.get_________________________________________________________________
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = false // serve secure cookies
}

let nbUser = 0

app.get('/', (req, res) => {
    let datetime = new Date()
    nbUser++
    console.log(datetime + ': Visitor #' + nbUser + ' => IP ' + req.connection.remoteAddress)
    //console.log(req.body)
    res.render('index.pug', {
        session: req.session
    })
})

app.get('/nomPage', (req, res) => {
    res.render(req.query.r + '.pug', {})
})

//app.listen______________________________________________________________
app.use((req, res) => {
    res.status(404).render('404.pug')
})
app.use((error, req, res) => {
    res.status(500).render('404.pug')
})

server.listen(p0rt, '0.0.0.0', () => {
    console.log(`Listening on ${server.address().address}:${server.address().port}`)
})
