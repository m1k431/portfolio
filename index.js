Date.prototype.getMonthFormatted = function () {
    var month = this.getMonth() + 1
    return month < 10 ? '0' + month : month
}
Date.prototype.getDateFormatted = function () {
    var date = this.getDate()
    return date < 10 ? '0' + date : date
}

const
    compression = require('compression'),
    minify = require('express-minify'),
    favicon = require('serve-favicon'),
    path = require('path'),
    express = require('express'),
    session = require('express-session'),
    app = express(),
    server = require('http').createServer(app),
    frameguard = require('frameguard'),
    log4js = require('log4js'),
    fs = require('fs'),
    geoip = require('geoip-lite')

let datetime = new Date(),
    p0rt = 3000

var nbLog = datetime.getFullYear() + String(datetime.getMonthFormatted()) + String(datetime.getDate()) + String(datetime.getHours()) + String(datetime.getMinutes()) + String(datetime.getSeconds()),
    ip, geo,
    sess = {
        secret: 'azerty',
        cookie: {},
        resave: false,
        saveUninitialized: true
    }

//APP.LOGGER_________________________________________________________________
log4js.configure({
    appenders: {
        trace: { type: 'file', filename: `logs/ip${nbLog}.log` }
    },
    categories: { default: { appenders: ['trace'], level: 'trace' } }
})

//APP.FS_________________________________________________________________
let filePath = `./logs/ip${nbLog}.log`
fs.writeFile(filePath, datetime, (err) => {
    if (err) throw err
    console.log(`The file ${nbLog}.log was succesfully created`)
})

//APP.USE_________________________________________________________________
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')))
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

app.set('view engine', 'pug')
app.set('views', 'public')

//APP.GET_________________________________________________________________
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = false // serve secure cookies
}

let nbUser = 0,
    logger = log4js.getLogger('trace')

app.get('/', (req, res) => {
    nbUser++
    datetime = new Date()
    ip = req.connection.remoteAddress
    geo = geoip.lookup(ip)
    logger.trace(`Visitor ${nbUser} => ${ip} ${JSON.stringify(geo)}`)
    console.log(`${datetime}: Visitor #${nbUser} => ${ip} ${JSON.stringify(geo)}`)
    res.render('index.pug', {
        session: req.session
    })
})

app.get('/nomPage', (req, res) => {
    res.render(req.query.r + '.pug', {})
})

//APP.LISTEN______________________________________________________________
app.use((req, res) => {
    res.status(404).render('404.pug')
})

app.use((error, req, res) => {
    res.status(500).render('404.pug')
})
server.listen(p0rt, '0.0.0.0', () => {
    console.log(`Listening on ${server.address().address}:${server.address().port}`)
})