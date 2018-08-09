'use strict'

window.addEventListener('DOMContentLoaded', function() {
  var m0nimg = window.document.createElement('img');
  m0nimg.src = '/static/img/Atari.png';
  m0nimg.id = 'snowB';
  m0nimg.style.top = '250px';


  window.addEventListener('load', function(mon0bj) {
    var m0nIDanimation;

    var m0nsoleil = window.document.getElementById('s0leil');

    var m0nCiel = document.createElement('canvas');
    m0nCiel.width = 800;
    m0nCiel.height = 600;
    m0nCiel.style.width = '800px';
    m0nCiel.style.height = '600px';
    m0nCiel.id = 'ci3l';
    m0nCiel.style.position = 'absolute';
   
    m0nsoleil.appendChild(m0nCiel);

    /*  var m0nCanva = document.getElementById('c4nv4');*/
    var m0nCanva = document.createElement('canvas');
    m0nCanva.width = 40;
    m0nCanva.height = 40;
    m0nCanva.style.width = '40px';
    m0nCanva.style.height = '40px';
    m0nCanva.id = 'c4nv4';
    m0nCanva.style.position = 'absolute';
    m0nsoleil.appendChild(m0nCanva);

    var m4m3r = document.createElement('canvas');
    m4m3r.width = 800;
    m4m3r.height = 600;
    m4m3r.style.width = '800px';
    m4m3r.style.height = '600px';
    m4m3r.id = 'm0nC4nvaM3r';
    m4m3r.style.position = 'absolute';
    m4m3r.style.top = '50px';
    m0nsoleil.appendChild(m4m3r);
    /*document.body.style.backgroundColor = 'cyan';*/

    var m4colline = document.createElement('canvas');
    m4colline.width = 800;
    m4colline.height = 600;
    m4colline.style.width = '800px';
    m4colline.style.height = '600px';
    m4colline.id = 'm0nC4nvaC0lline';
    m4colline.style.position = 'absolute';
    m0nsoleil.appendChild(m4colline);


    var m0n4tari = window.document.createElement('img');
    m0n4tari.src = '/static/img/loader.gif';
    m0n4tari.id = 'a7ari';
    m0n4tari.style.position = 'absolute';
    m0nsoleil.appendChild(m0n4tari);
    /*
    2. Créez l'algorithme suivant : Quand on clique sur un paragraphe de texte, on déclenche un script qui récupère une référence à l'objet <canvas> (en utilisant la méthode .getElementById() par exemple). Vérifier à l'aide de la méthode .log() de la console que vous arrivez à récupérer un objet de type HTMLCanvasElement
    */


    var c00rdX = 2000;
    var c00rdY = 0;


    /*  window.onclick = function() {*/
    //console.log(m0nCanva);


    var dessinerM0n = function(m0ntimestamp) {

      if (c00rdX < 2900) {
        /*window.setTimeout(function(){*/

        c00rdY = Math.sin(c00rdX/500)*1100 + 1100;
        m0nCanva.style.top = c00rdY + 'px';

        m0nCanva.style.left = c00rdX -1982 + 'px';

        var ctxCi3l = m0nCiel.getContext('2d');
        ctxCi3l.clearRect(0,0,800,400);
        var gradientCi3l = ctxCi3l.createLinearGradient(0,0,0,400);
        gradientCi3l.addColorStop(0,"blue");
        gradientCi3l.addColorStop(1,"white");
        ctxCi3l.fillStyle = gradientCi3l;
        ctxCi3l.fillRect(0,0,800,400);

        //mer
        var ctx2M4col = m4m3r.getContext('2d');
         ctx2M4col.clearRect(0,0,800,400);

        var gradientm3r = ctx2M4col.createLinearGradient(0,0,0,600);
        gradientm3r.addColorStop(0,'blue');
        gradientm3r.addColorStop(1,'transparent');

        ctx2M4col.fillStyle = gradientm3r;
        ctx2M4col.beginPath();
        ctx2M4col.moveTo(0,400);
        ctx2M4col.lineTo(800,400);
        ctx2M4col.lineTo(800,250);

        ctx2M4col.bezierCurveTo(150, 258, 650, 242, 0, 250);



        ctx2M4col.closePath();
        ctx2M4col.stroke();
        ctx2M4col.fill();
        //COLLLLIIIIIINNNNNNE 1

        var ctxM4col = m4colline.getContext('2d');
        //ctxM4col.clearRect(0,0,800,400);
        var gradientC0lline = ctxM4col.createLinearGradient(0,0,0,600);
        gradientC0lline.addColorStop(0,'lime');
        gradientC0lline.addColorStop(1,'black');
        ctxM4col.fillStyle = gradientC0lline;
        ctxM4col.beginPath();
        ctxM4col.moveTo(0,400);
        ctxM4col.lineTo(800,400);
        ctxM4col.lineTo(800,370);
        ctxM4col.bezierCurveTo(150, 150, 250, 130, 0, 200);
        ctxM4col.closePath();
        ctxM4col.stroke();
        ctxM4col.fill();

        var ctx = m0nCanva.getContext('2d');
        ctx.clearRect(0, 0, 40, 40);

        var gradient = ctx.createRadialGradient(16, 16, 16, 16, 16, 14);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.9, 'yellow');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 40, 40);



        c00rdX = c00rdX + 2;
    m0nIDinterval = setInterval(requestAnimationFrame(dessinerM0n), 100);
        /*},10);*/
      }
      else {
        c00rdX = 2000;
        setInterval(requestAnimationFrame(dessinerM0n), 100);
      }
    };

    var m0nIDinterval;
    m0nIDinterval = setInterval(requestAnimationFrame(dessinerM0n), 100);
    //Sm0nIDanimation = requestAnimationFrame(dessinerM0n);

  /*  window.onscroll = function() {
      m0nIDanimation = requestAnimationFrame(dessinerM0n);
    };*/


    window.document.getElementById('a7ari').parentNode.replaceChild(m0nimg, window.document.getElementById('a7ari'));
    /*
    window.onclick = function() {
      open('https://mikael.ml/cv.html', 'Bienvenue', 'width=600, personnalbar=no, location=no');
    };

    };*/

  }, false);

}, false);
