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

const
    express = require('express'),
    app = express(),
    session = require('express-session'),
    server = require('http').createServer(app),
    uid = require('uid-safe'),
    parseurl = require('parseurl'),
    fs = require('fs'),
    favicon = require('serve-favicon'),
    path = require('path'),
    log4js = require('log4js'),
    geoip = require('geoip-lite'),
    minify = require('express-minify'),
    compression = require('compression'),
    frameguard = require('frameguard'),
    FileStore = require('session-file-store')(session),
    ms = require('ms')

let datetime = new Date(),
    p0rt = 80,
    filePath = `./logs/ip${nbLog}.log`,
    nbUser = 0,
    logger = log4js.getLogger('trace')

var nbLog = datetime.getFullYear() + String(datetime.getMonthFormatted()) + String(datetime.getDate()) + String(datetime.getHoursFormatted()) + String(datetime.getMinutesFormatted()) + String(datetime.getSecondsFormatted()),
    ip, geo,
    expressSessionFileStore = FileStore(session),
    sess = {
        genid: function (req) {
            return uid.sync(18)
        },
        store: new FileStore,
        resave: true,
        saveUninitialized: true,
        secret: 'qwerty',
        cookie: {
            expires: datetime.setUTCFullYear(datetime.getFullYear() + 1),
            maxage: ms('3600 days')
        },
        sessionID: 0,
        horodate: '',
        ip: '',
        geoloc: {},
        pathname: '',
        nbViews: []
    }

//mongoDB
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

//APP.LOGGER_________________________________________________________________
log4js.configure({
    appenders: {
        trace: { type: 'file', filename: `logs/ip${nbLog}.log` }
    },
    categories: { default: { appenders: ['trace'], level: 'trace' } }
})

//APP.FS_________________________________________________________________
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

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))

app.set('view engine', 'pug')
app.set('views', 'public')

//APP.GET_________________________________________________________________
app.get('/', (req, res) => {
    nbUser++
    datetime = new Date()
    if (!req.session.views) {
        req.session.views = {}
    }
    var pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    //fix UTC+2 hours
    datetime.setUTCHours(datetime.getHours())
    ip = req.connection.remoteAddress
    geo = geoip.lookup(ip)
    req.session.sessionID = req.sessionID
    req.session.horodate = datetime
    req.session.ip = ip
    req.session.geoloc = geo
    res.render('index.pug', {
        sess: req.session
    })
    //LOGGER
    logger.trace(req.session)
    console.log(req.session)
})

app.get('/cv', (req, res) => {
    //VIEWS
    pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    if (req.query.r == 'highScore') {
        //AJax
    }
    res.render('cv.pug', {})
    //LOGGER
    logger.trace(pathname + ': ' + req.session.views[pathname])
    console.log(pathname + ': ' + req.session.views[pathname])
})

app.get('/adm1n', (req, res) => {
    //VIEWS
    pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    if (req.query.r == 'highScore') {
        //AJax
    }
    res.render('adm1n.pug', {})
    //LOGGER
    logger.trace(pathname + ': ' + req.session.views[pathname])
    console.log(pathname + ': ' + req.session.views[pathname])
})

app.get('/giftedADHD', (req, res) => {
    //VIEWS
    pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    if (req.query.r == 'highScore') {
        //AJax
    }
    res.render('giftedADHD.pug', {})
    //LOGGER
    logger.trace(pathname + ': ' + req.session.views[pathname])
    console.log(pathname + ': ' + req.session.views[pathname])
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