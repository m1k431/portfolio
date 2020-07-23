Date.prototype.getMonthFormatted = function () {
    var month = this.getMonth() + 1
    return month < 10 ? '0' + month : month
}
Date.prototype.getDateFormatted = function () {
    var date = this.getDate()
    return date < 10 ? '0' + date : date
}
Date.prototype.getHoursFormatted = function () {
    var hours = this.getHours()
    return hours < 10 ? '0' + hours : hours
}
Date.prototype.getMinutesFormatted = function () {
    var minutes = this.getMinutes()
    return minutes < 10 ? '0' + minutes : minutes
}
Date.prototype.getSecondsFormatted = function () {
    var seconds = this.getSeconds()
    return seconds < 10 ? '0' + seconds : seconds
}

var express = require('express'),
    helmet = require('helmet'),
    session = require('express-session'),
    FileStore = require('session-file-store')(session),
    uid = require('uid-safe'),
    bodyParser = require('body-parser'),
    parseurl = require('parseurl'),
    fs = require('fs'),
    favicon = require('serve-favicon'),
    path = require('path'),
    log4js = require('log4js'),
    geoip = require('geoip-lite'),
    minify = require('express-minify'),
    compression = require('compression'),
    frameguard = require('frameguard'),
    ms = require('ms'),
    datetime = new Date(),
    logger = log4js.getLogger('file'),
    nbLog = datetime.getFullYear() + String(datetime.getMonthFormatted()) + String(datetime.getDate()) + String(datetime.getHoursFormatted()) + String(datetime.getMinutesFormatted()) + String(datetime.getSecondsFormatted()),
    app = express()

let p0rt = 80,
    filePath = `./logs/ip${nbLog}.log`,
    sess = {
        genid: function (req) {
            return uid.sync(18)
        },
        store: new FileStore(),
        resave: true,
        saveUninitialized: true,
        secret: 'qwerty',
        cookie: {
            expires: datetime.setUTCFullYear(datetime.getFullYear() + 1),
            maxAge: ms('90 days')
        },
        horodate: '',
        ip: '',
        geoloc: {}
    }

//APP.LOGGER_________________________________________________________________
log4js.configure({
    appenders: {
        console: { type: 'console' },
        file: { type: 'file', filename: `logs/ip${nbLog}.log` }
    },
    categories: {
        default: { appenders: ['console'], level: 'trace' },
        file: { appenders: ['file'], level: 'trace' }
    }
})

//mongoDB____________________________________________________________________
const MongoClient = require('mongodb').MongoClient,
    uri = "mongodb+srv://snow:<password>@cluster0-5cwg1.mongodb.net/<dbname>?retryWrites=true&w=majority",
    client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
client.connect(err => {
    const collection = client.db("m1k431").collection("brickBreaker")
    // perform actions on the collection object
    //console.log(collection)
    /*collection.insertOne({
        visitorName: 'mika',
        score: '123'
    })*/
    client.close()
})

//APP.FS____________________________________________________________________
fs.writeFile(filePath, datetime, (err) => {
    if (err) throw err
    console.log(`The file ${nbLog}.log was succesfully created`)
})

//APP.USE___________________________________________________________________
app.use(helmet())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')))
app.use(frameguard({
    action: 'sameorigin'
}))
app.use(compression())
app.use(minify({
    cache: false,
    jsMatch: /js/,
    cssMatch: /css/
}))
app.use('/static', express.static(__dirname + '/public', {
    maxAge: '1d'
}))

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = false // serve secure cookies
}
app.use(session(sess))

app.set('view engine', 'pug')
app.set('views', 'public')

//APP.GET_________________________________________________________________
app.get('/', (req, res) => {
    //VIEWS
    if (!req.session.views) {
        req.session.views = {}
    }
    var pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    //horodate last visite
    req.session.horodate = new Date()
    //fix UTC+2 hours
    req.session.horodate.setUTCHours(req.session.horodate.getHours())
    //ip track
    req.session.ip = req.connection.remoteAddress
    req.session.geoloc = geoip.lookup(req.session.ip)
    res.render('index.pug', {})
    //LOGGER
    logger.trace(req.session)
    console.log(req.session)
})

app.get('/cv', (req, res) => {
    //VIEWS
    if (!req.session.views) {
        req.session.views = {}
    }
    pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    if (req.query.r == 'highScore') {
        //AJax
    }
    res.render('cv.pug', {})
    //LOGGER
    logger.trace(req.session)
    console.log(req.session)
})

app.get('/adm1n', (req, res) => {
    //VIEWS
    if (!req.session.views) {
        req.session.views = {}
    }
    pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    if (req.query.r == 'highScore') {
        //AJax
    }
    res.render('adm1n.pug', {})
    //LOGGER
    logger.trace(req.session)
    console.log(req.session)
})

app.get('/giftedADHD', (req, res) => {
    //VIEWS
    if (!req.session.views) {
        req.session.views = {}
    }
    pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    if (req.query.r == 'highScore') {
        //AJax
    }
    res.render('giftedADHD.pug', {})
    //LOGGER
    logger.trace(req.session)
    console.log(req.session)
})

//APP.LISTEN______________________________________________________________
app.use((req, res) => {
    res.status(404).render('404.pug')
})

app.use((error, req, res) => {
    res.status(500).render('404.pug')
})

var listener = app.listen(p0rt, '0.0.0.0', () => {
    //LOGGER
    console.log(`Listening on ${listener.address().address}:${listener.address().port}`)
})