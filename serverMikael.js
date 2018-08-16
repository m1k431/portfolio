var compression = require('compression')
var minify = require('express-minify')
var favicon = require('serve-favicon')
var path = require('path')
var express = require('express')
var helmet = require('helmet')
require('pug')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var session = require('express-session')
//var objectId = require('mongodb').ObjectID
var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let p0rt = 80
var urldb = 'mongodb://127.0.0.1:27017/exo19'
var urldb20 = 'mongodb://127.0.0.1:27017/exo20'
const n0mBd = 'exo19'
const n0mBd20 = 'exo20'
var sess = {
    secret: 'azerty',
    cookie: {},
    resave: false,
    saveUninitialized: true
}
var server = require('http').createServer(app)
var io = require('socket.io')
var socketIO = io(server)

socketIO.on('connection', function(socket) {
    console.log('a user is connected')
    socket.on('pingEvt', function(message) {
        console.log(message)
        socket.emit('pongEvt', {texte: 'Poooong !'})
    })
})
app.use(helmet())
app.use(compression())
app.use(minify({
    cache: false,
    uglifyJsModule: null,
    errorHandler: null,
    jsMatch: /js/,
    cssMatch: /css/,
    jsonMatch: /json/,
    sassMatch: /scss/,
    lessMatch: /less/,
    stylusMatch: /stylus/,
    coffeeScriptMatch: /coffeescript/,
}))
app.use('/static', express.static(__dirname + '/public', { maxage: '0d' }))
app.use(session(sess))
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')))
app.set('view engine', 'pug')
app.set('views', 'public')
//app.get_________________________________________________________________
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = false // serve secure cookies
}
app.get('/', (req, res) => {
    MongoClient.connect(urldb, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            return
        }
        const m0nMongoClientFront = client.db(n0mBd)
        //console.log(m0nMongoClient)
        const collectionAdmin = m0nMongoClientFront.collection('admin')
        //console.log(collectionArticle)
        collectionAdmin.find().toArray(function(err, dataAdmin) {
            var cptAdmin = 0
            while (dataAdmin[cptAdmin]) {
                console.log(dataAdmin[cptAdmin])
                cptAdmin++
            }
        })
        console.log('cookie: ', req.session.cookie)
        sess.session = req.session
        console.log('session: ', sess)
        res.render('index.pug', { session: req.session })
    })
})
app.get('/nomPage', (req, res) => {
    console.log(req.query)
    var ma535510n = JSON.stringify(req.session, null, 2)
    var m0nID535510n = req.session.id
    res.render(req.query.r + '.pug', {
        ma535510n,
        m0nID535510n
    })
})
app.get('/pagelisteArticle', (req, res) => {
    var ma535510n = JSON.stringify(req.session, null, 2)
    var m0nID535510n = JSON.stringify(req.session.id, null, 2)
    MongoClient.connect(urldb20, {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return
        }
        var cpt = 0
        var tabloArticle = []
        var tabloArticleId = []
        var tabloArticleTitre = []
        var tabloArticleContenu = []
        var tabloArticleWriter = []
        const m0nMongoClient = client.db(n0mBd20)
        const m0nCollectionArticle = m0nMongoClient.collection('article')
        m0nCollectionArticle.find().toArray((err, data) => {
            console.log(data)
            while (data[cpt]) {
                tabloArticle[cpt] = data[cpt]
                tabloArticleId[cpt] = data[cpt]._id
                tabloArticleTitre[cpt] = data[cpt].titre
                tabloArticleContenu[cpt] = data[cpt].article
                tabloArticleWriter[cpt] = data[cpt].writer
                console.log(tabloArticleId[cpt])
                console.log(tabloArticleTitre[cpt])
                cpt++
            }
            res.render('pagelisteArticle.pug', {
                data,
                tabloArticleTitre,
                tabloArticleContenu,
                tabloArticleWriter,
                ma535510n,
                m0nID535510n
            },
            function(err, html) {
                if (err) {
                    return
                }
                res.send(html)
            })
        })
    })
    /*
        //console.log(m0nTabloArticle)
        //idRequete = new objectId(idUrl)
         res.render('layoutAdmin.pug', {
            ma535510n,
            m0nID535510n
        }, function (err, html) {
            if (err) {
                return
            }
            res.send(html)
        })
    */
})
//app.post________________________________________________________________
app.post('/layoutAdmin', urlencodedParser, (req, res) => {
    if (!req.body || req.body.user != 'mikael' || req.body.pass != 'iop') return res.render('ErrorF0rm.pug')
    //const iDs3ssion
    var ma535510n = JSON.stringify(req.session, null, 2)
    var m0nID535510n = JSON.stringify(req.session.id, null, 2)
    MongoClient.connect(urldb20, {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return
        }
        var cpt = 0
        var tabloArticle = []
        var tabloArticleId = []
        var tabloArticleTitre = []
        var tabloArticleContenu = []
        var tabloArticleWriter = []
        const m0nMongoClient = client.db(n0mBd20)
        const m0nCollectionArticle = m0nMongoClient.collection('article')
        m0nCollectionArticle.find().toArray((err, data) => {
            while (data[cpt]) {
                tabloArticle[cpt] = data[cpt]
                tabloArticleId[cpt] = data[cpt]._id
                tabloArticleTitre[cpt] = data[cpt].titre
                tabloArticleContenu[cpt] = data[cpt].article
                tabloArticleWriter[cpt] = data[cpt].writer
                console.log(tabloArticleId[cpt])
                console.log(tabloArticleTitre[cpt])
                cpt++
            }
            res.render('layoutAdmin.pug', {
                data,
                ma535510n,
                m0nID535510n
            },
            (err, html) => {
                if (err) {
                    return
                }
                res.send(html)
            })
        })
    })
    /*
        //console.log(m0nTabloArticle)
        //idRequete = new objectId(idUrl)
         res.render('layoutAdmin.pug', {
            ma535510n,
            m0nID535510n
        }, function (err, html) {
            if (err) {
                return
            }
            res.send(html)
        })
    */
})
app.post('/OkArticle', urlencodedParser, (req, res) => {
    if (!req.body.titre || !req.body.article || !req.body.writer) return res.render('ErrorArticle.pug')
    ////////const iDs3ssion
    var m0nTitre = req.body.titre
    var m0nArticle = req.body.article
    var m0nWriter = req.body.writer
    var ma535510n = JSON.stringify(req.session, null, 2)
    var m0nID535510n = JSON.stringify(req.session.id, null, 2)
    MongoClient.connect(urldb20, {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return
        }
        const m0nMongoClient20 = client.db(n0mBd20)
        const m0nCollectionArticle = m0nMongoClient20.collection('article')
        m0nCollectionArticle.insert({ titre: m0nTitre, article: m0nArticle, writer: m0nWriter })
        res.render('OkArticle.pug', {
            m0nTitre,
            m0nArticle,
            m0nWriter,
            ma535510n,
            m0nID535510n
        }, (err, html) => {
            if (err) {
                return
            }
            res.send(html)
        })
    })
})

//app.listen______________________________________________________________
app.use((req, res) => {
    res.status(404).render('404.pug')
})
app.use((error, req, res, next) => {
    res.status(500).render('404.pug')
})

MongoClient.connect(urldb, {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return
    }
    const m0nMongoClient = client.db(n0mBd)
    //console.log(m0nMongoClient)
    const collection = m0nMongoClient.collection('admin')
    collection.find().toArray((err, data) => {
        var cpt = 0
        while (data[cpt]) {
            console.log(data[cpt])
            cpt++
        }
    })
})
server.listen(p0rt, () => {
    console.log(`Listening on ${server.address().address} ${server.address().port}`)
})