const
    compression = require('compression'),
    minify = require('express-minify'),
    favicon = require('serve-favicon'),
    path = require('path'),
    express = require('express'),
    helmet = require('helmet'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    session = require('express-session'),
    app = express(),
    //urlencodedParser = bodyParser.urlencoded({
    //    extended: false
    //}),
    urldb20 = 'mongodb://snowmike:iop@www.mikael.ml/exo20',
    //n0mBd = 'exo19',
    n0mBd20 = 'exo20',
    server = require('http').createServer(app),
    io = require('socket.io'),
    socketIO = io(server),
    mysql = require('mysql')
//const objectId = require('mongodb').ObjectID
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

socketIO.on('connection', function (socket) {
    console.log('a user is connected')
    socket.on('pingEvt', function (message) {
        console.log(message)
        socket.emit('pongEvt', {
            texte: 'Poooong !'
        })
    })
})
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')))
app.use(helmet())
app.use(compression())
app.use(minify())
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

//mysql
var conMysql = mysql.createConnection({
    host: "localhost",
    user: "webuser",
    password: "iop"
})

//app.get_________________________________________________________________
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = false // serve secure cookies
}

conMysql.connect(function (err) {
    if (err) throw err
    console.log('connected')
})

app.get('/', (req, res) => {
    /*  MongoClient.connect(urldb20, {
          useNewUrlParser: true
      }, (err, client) => {
          if (err) {
              return
          }
          const m0nMongoClientFront = client.db(n0mBd20)
          //console.log(m0nMongoClient)
          const collectionAdmin = m0nMongoClientFront.collection('admin')
          //console.log(collectionArticle)
          collectionAdmin.find().toArray(function (err, dataAdmin) {
              var cptAdmin = 0
              while (dataAdmin[cptAdmin]) {
                  console.log(dataAdmin[cptAdmin])
                  cptAdmin++
              }
          })
          console.log('cookie: ', req.session.cookie)
          sess.session = req.session
          console.log('session: ', sess)
          //res.render here si connect mongo ok
      })*/
    console.log(req.session)
    console.log(req.body)
    conMysql.query('select name, score from portfolio.highscore order by score desc limit 10', function (error, results, fields) {
        if (error) throw error
        console.log(results)
        res.render('index.pug', {
            results
        },
        function (error, html) {
            if (error) {
                return
            }
            res.send(html)
        })
    })
    //res.render('index.pug', {
    //    session: req.session
    //})
})
app.get('/nomPage', (req, res) => {
    conMysql.query('select name, score from portfolio.highscore order by score desc limit 10', function (error, results, fields) {
        if (error) throw error
        console.log(results)
        res.render(req.query.r + '.pug', {
            results
        },
        function (error, html) {
            if (error) {
                return
            }
            res.send(html)
        })
    })
    //res.render(req.query.r + '.pug', {})
})
app.get('/pagelisteArticle', (req, res) => {
    MongoClient.connect(urldb20, {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return
        }
        const m0nMongoClient = client.db(n0mBd20)
        const m0nCollectionArticle = m0nMongoClient.collection('article')
        m0nCollectionArticle.find().toArray((err, data) => {
            console.log(data)
            res.render('pagelisteArticle.pug', {
                data,
            },
            function (err, html) {
                if (err) {
                    return
                }
                res.send(html)
            })
        })
    })
})


app.get('/highscore', urlencodedParser, (req, res) => {
    conMysql.query('select name, score from portfolio.highscore order by score desc limit 10', function (error, results, fields) {
        if (error) throw error
        console.log(results)
        res.send(results)
    })
})
app.post('/highscore', urlencodedParser, (req, res) => {
    var name = req.body.name
    var score = req.body.score
    console.log(req.body.name + 'score: ' + req.body.score)
    console.log(req.body)
    conMysql.query('insert into portfolio.highscore values (?,?);', [name, score], function (error, ok) {
        if (error) throw error
        console.log(ok)
        conMysql.query('select name, score from portfolio.highscore order by score desc limit 10', function (error, results, fields) {
            if (error) throw error
            console.log(results)
            /*res.render('index.pug', {
                    results
                },
                function (error, html) {
                    if (error) {
                        return
                    }
                    res.send(html)
                })*/
            res.send(results)
        })
    })
})
//app.post________________________________________________________________
app.post('/layoutAdmin', (req, res) => {
    if (!req.body || req.body.user != 'mikael' || req.body.pass != 'iop') return res.render('404.pug')
    //const iDs3ssion
    var ma535510n = JSON.stringify(req.session, null, 2)
    var m0nID535510n = JSON.stringify(req.session.id, null, 2)
    MongoClient.connect(urldb20, {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return
        }
        const m0nMongoClient = client.db(n0mBd20)
        const m0nCollectionArticle = m0nMongoClient.collection('article')
        m0nCollectionArticle.find().toArray((err, data) => {
            console.log(data)
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
})
app.post('/OkArticle', (req, res) => {
    if (!req.body.titre || !req.body.article || !req.body.writer) return res.render('ErrorArticle.pug')
    ////////const iDs3ssion
    MongoClient.connect(urldb20, {
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            return
        }
        const m0nMongoClient20 = client.db(n0mBd20)
        const m0nCollectionArticle = m0nMongoClient20.collection('article')
        m0nCollectionArticle.insertOne({
            titre: req.body.titre,
            article: req.body.article,
            writer: req.body.writer
        })
        res.render('OkArticle.pug', {}, (err, html) => {
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
app.use((error, req, res) => {
    res.status(500).render('404.pug')
})
/*
MongoClient.connect(urldb20, {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return
    }
    const m0nMongoClient = client.db(n0mBd20)
    //console.log(m0nMongoClient)
    const collection = m0nMongoClient.collection('highScore')
    collection.find().toArray((err, data) => {
        var cpt = 0
        while (data[cpt]) {
            console.log(data[cpt])
            cpt++
        }
    })
})
*/
server.listen(p0rt, () => {
    console.log(`Listening on ${server.address().address} ${server.address().port}`)
})