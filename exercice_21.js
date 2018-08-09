/******************************************************
*************BLOG - SUPPRESSION D'ARTICLES*************
******************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Nous allons créer un système de gestion des articles.
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Dans l'administration, ajoutez un lien vers une nouvelle page qui affichera la liste des articles.

------ 2 ------
Créez la page correspondante. Vous y afficherez la liste des articles avec deux liens pour chaque permettant de modifier ou de supprimer l'article. 

Nous verrons la modification dans l'exercice suivant: dans chaque lien, vous passez en paramètre de l'url (en GET) l'id de l'article.

------ 3 ------
Quand l'utilisateur clique sur le lien de suppression d'article, vous vérifiez l'id qui est passée comme paramètre dans l'url. Si un article correspond à cette id, vous supprimer l'article correspondant.
Attention, vous ne pouvez pas directement utiliser l'id passée dans l'url pour votre requête en base. Vous devez faire le traitement suivant (idUrl est la chaine de caractère obtenue par le paramètre dans l'url et idRequete l'id utilisable pour la requête en base).
*/

var express = require('express');
var pug = require('pug');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var session = require('express-session');
//var objectId = require('mongodb').ObjectID;
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
let p0rt = 7778;
var urldb = 'mongodb://127.0.0.1:27017/exo19';
var urldb20 = 'mongodb://127.0.0.1:27017/exo20';
const n0mBd = 'exo19';
const n0mBd20 = 'exo20';
var collection;
var sess = {
    secret: 'azerty',
    cookie: {},
    resave: false,
    saveUninitialized: true
};
var saveMaSession;
var saveMonId;

app.use(session(sess));

app.set('view engine', 'pug');
app.set('views', 'public');

//app.get_________________________________________________________________
app.get('/', (req, res) => {
    
    MongoClient.connect(urldb, function (err, client) {
        if (err) {
            return;
        }
        const m0nMongoClientFront= client.db(n0mBd);
        //console.log(m0nMongoClient);
        const collectionArticle= m0nMongoClientFront.collection('admin');
        //console.log(collectionArticle);
        collectionArticle.find().toArray(function (err, dataAdmin) {
            var cptAdmin = 0;
            while (dataAdmin[cptAdmin]) {
                console.log(dataAdmin[cptAdmin]);
                cptAdmin++;
            }
        });
        console.log("cookie: ", req.session.cookie);
        sess.session = req.session;
        console.log("session: ", sess);
        res.render('index.pug', { session: req.session });
    });

});

/*JE suis la_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________*/ 
app.get('/nomPage', (req, res) => {
    console.log(req.query);
    var ma535510n = JSON.stringify(req.session, null, 2);
    var m0nID535510n = req.session.id;

    res.render(req.query.r + '.pug', {
        ma535510n,
        m0nID535510n
    });
});

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = false; // serve secure cookies
}

app.get('/pagelisteArticle', (req, res) => {
    
    
    MongoClient.connect(urldb, function (err, client) {
        if (err) {
            return;
        }
        const m0nMongoAdminArticle = client.db(n0mBd);
        //console.log(m0nMongoClient);
        const collectionArticle = m0nMongoAdminArticle.collection('article');
        var cpt = 0;
        var tabloArticle = [];
        var tabloArticleId = [];
        var tabloArticleTitre = [];
        var tabloArticleContenu = [];
        var tabloArticleWriter = [];
        //console.log(collectionArticle);
        collectionArticle.find().toArray(function (err, data) {
            while (data[cpt]) {
                tabloArticle[cpt] = data[cpt];
                tabloArticleId[cpt] = data[cpt]._id;
                tabloArticleTitre[cpt] = data[cpt].titre;
                tabloArticleContenu[cpt] = data[cpt].article;
                tabloArticleWriter[cpt] = data[cpt].writer;
                console.log(tabloArticleId[cpt]);
                cpt++;
            }
        });
        console.log("cookie: ", req.session.cookie);
        sess.session = req.session;
        console.log("session: ", sess);
        console.log("table article: ", data);
        res.render('pagelisteArticle.pug', { data });
    });
   

});

//app.post________________________________________________________________
app.post('/layoutAdmin', urlencodedParser, function (req, res) {

    if (!req.body || req.body.user != 'mikael' || req.body.pass != 'iop') return res.render('ErrorF0rm.pug');
    ////////const iDs3ssion
    var ma535510n = JSON.stringify(req.session, null, 2);
    var m0nID535510n = JSON.stringify(req.session.id, null, 2);
    
    MongoClient.connect(urldb20, function (err, client) {
        if (err) {
            return;
        }
        var cpt = 0;
        var tabloArticle = [];
        var tabloArticleId = [];
        var tabloArticleTitre = [];
        var tabloArticleContenu = [];
        var tabloArticleWriter = [];
        const m0nMongoClient = client.db(n0mBd20);
        const m0nCollectionArticle = m0nMongoClient.collection('article');
        m0nCollectionArticle.find().toArray(function (err, data) {
            while (data[cpt]) {
                tabloArticle[cpt] = data[cpt];
                tabloArticleId[cpt] = data[cpt]._id;
                tabloArticleTitre[cpt] = data[cpt].titre;
                tabloArticleContenu[cpt] = data[cpt].article;
                tabloArticleWriter[cpt] = data[cpt].writer;
                console.log(tabloArticleId[cpt]);
                cpt++;
            }
        });
        
        res.render('layoutAdmin.pug', {
            tabloArticle,
            tabloArticleId,
            tabloArticleTitre,
            tabloArticleContenu,
            tabloArticleWriter,
            ma535510n,
            m0nID535510n
        },
        function (err, html) {
            if (err) {
                return;
            }
            res.send(html);
        });
    });
    
/*
    //console.log(m0nTabloArticle);
    //idRequete = new objectId(idUrl);
     res.render('layoutAdmin.pug', {
        ma535510n,
        m0nID535510n
    }, function (err, html) {
        if (err) {
            return;
        }
        res.send(html);
    });
*/
});


app.post('/OkArticle', urlencodedParser, function (req, res) {
    
    if (!req.body.titre || !req.body.article || !req.body.writer) return res.render('ErrorArticle.pug');
    ////////const iDs3ssion
    var m0nTitre = req.body.titre;
    var m0nArticle = req.body.article;
    var m0nWriter = req.body.writer;
    var ma535510n = JSON.stringify(req.session, null, 2);
    var m0nID535510n = JSON.stringify(req.session.id, null, 2);
    MongoClient.connect(urldb20, function (err, client) {
        if (err) {
            return;
        }
        const m0nMongoClient20 = client.db(n0mBd20);
        const m0nCollectionArticle = m0nMongoClient20.collection('article');
        m0nCollectionArticle.insert({ titre: m0nTitre, article: m0nArticle, writer: m0nWriter });
        res.render('OkArticle.pug', {            
            m0nTitre,
            m0nArticle,
            m0nWriter,
            ma535510n,
            m0nID535510n
        }, function (err, html) {
        if (err) {
            return;
        }
        res.send(html);
        });
    });

});



//app.use_________________________________________________________________
app.use('/static', express.static(__dirname + '/public'));

app.use(function (req, res) {
    res.status(404).render('404.pug');
});

//app.listen______________________________________________________________
MongoClient.connect(urldb, function (err, client) {
    if (err) {
        return;
    }
    const m0nMongoClient = client.db(n0mBd);
    //console.log(m0nMongoClient);
    const collection = m0nMongoClient.collection('admin');
    collection.find().toArray(function (err, data) {
        var cpt = 0;
        while (data[cpt]) {
            console.log(data[cpt]);
            cpt++;
        }
    });
    app.listen(p0rt, () => {
        console.log(p0rt);
    });
});