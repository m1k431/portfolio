const jeuBreaker = function () {
    var context = new AudioContext();
    var audioStack;

    function play(url) {
        audioStack = [];
        var nextTime = 0;

        fetch(url).then(function (response) {
            var reader = response.body.getReader();
            function read() {
                return reader.read().then(({ value, done }) => {
                    if (done) {
                        //console.log('done');
                        return;
                    } else {
                        //console.log(value, done);
                        context.decodeAudioData(value.buffer, function (buffer) {
                            audioStack.push(buffer);
                            if (audioStack.length) {
                                scheduleBuffers();
                            }
                        }, function (err) {
                            console.log("err(decodeAudioData): " + err);
                        });
                    }
                    read()
                });
            }
            read();
        })

        function scheduleBuffers() {
            while (audioStack.length) {
                var buffer = audioStack.shift();
                var source = context.createBufferSource();
                source.buffer = buffer;
                source.connect(context.destination);
                if (nextTime == 0)
                    nextTime = context.currentTime + 0.01;  /// add 50ms latency to work well across systems - tune this if you like
                source.start(nextTime);
                nextTime += source.buffer.duration; // Make the next buffer wait the length of the last buffer before being played
            };
        }
    }

    var pongA = './static/sound/pongA.mp3'
    var pongB = './static/sound/pongB.mp3'
    var pongC = './static/sound/pongC.mp3'
    var start = './static/sound/start.mp3'
    var flagS = './static/sound/flagS.mp3'
    var youWin = './static/sound/youWin.mp3'
    var miss = './static/sound/miss.mp3'
      
    $('#m0ncentrage').fadeIn(1000)
    $('#competen').fadeIn(500)
    $('#experiences').fadeIn(375)
    $('#formation').fadeIn(250)
    $('#complementaire').fadeIn(125)
    $('.moi').fadeIn()
    $('.metier').fadeIn()
    $('#metier > h1').fadeOut(375, function() {
        $(this).text('Click or Touch here to START').fadeIn(375)
    })
    
    //jeuUUUUUUUUUUUUUUUUUUUcv
    $('.english').fadeIn()
    $('#competen').fadeIn()
    var $div2blink = $('#metier') // Save reference, only look this item up once, then save
    setInterval(function(){
        $div2blink.toggleClass('backgroundRed')
    },1500)
      
    window.document.getElementById('french').onclick = () => {
        play(flagS)
        $('.english').hide()
        $('.spanish').hide()
        $('.french').hide()
        $('#competen').css('height', 'auto')
        $('.french').fadeIn()
    }
    window.document.getElementById('english').onclick = () => {
        play(flagS)
        $('.french').hide()
        $('.spanish').hide()
        $('.english').hide()
        $('.english').fadeIn()
    }
    window.document.getElementById('spanish').onclick = () => {
        play(flagS)
        $('.french').hide()
        $('.english').hide()
        $('.spanish').hide()
        $('#competen').css('height', 'auto')
        $('.spanish').fadeIn()
    }
    var bStart = window.document.getElementById('metier')
    bStart.addEventListener('click', varsStart, true)
        
    //START click
    function varsStart() {
        $('#linkedIn').fadeIn(2000)
        play(start)
        var competences = window.document.getElementById('competen')
        var informatique = window.document.getElementById('informatique')
        var commerciales = window.document.getElementById('commerciales')
        var linkedIn = window.document.getElementById('linkedIn')
        var complementaire = window.document.getElementById('complementaire')
        var animH = $('#competen').height()
        //var linkOff = $('#linkedIn').offset()
        var divSprite = window.document.createElement('div')
        divSprite.id = 'divSprite'
        divSprite.className = 'divsprite'
        divSprite.style.position = 'absolute'
        divSprite.style.height = '20px'
        divSprite.style.width = '20px'
        divSprite.style.border = 'solid'
        divSprite.style.borderWidth = '1px'
        divSprite.style.borderRadius = '20px'
        divSprite.style.overflow = 'hidden'
        competences.appendChild(divSprite)
        var imgSoccer = window.document.createElement('img')
        imgSoccer.id = 'imgSoccer'
        imgSoccer.className = 'imgsoccer'
        imgSoccer.style.position = 'absolute'
        imgSoccer.style.height = '500px'
        imgSoccer.style.left = '-4px'
        imgSoccer.style.top = '-142.5px'
        imgSoccer.src = '/static/img/ball.png'
        imgSoccer.style.backgroundColor = 'none'
        divSprite.appendChild(imgSoccer)
        linkedIn.className = 'linkedinT'
        $('#competen').animate({
            height: animH + 75 + 'px'
        }, 1000)
        linkedIn.style.marginTop = -50 + 'px'
        complementaire.className = 'complementaireT'
        window.document.getElementById('linkedIn').style.left = competences.offsetWidth / 2 - 40 + 'px'
        var mesDivInfos = window.document.getElementsByClassName('infoJeu')
        var i = mesDivInfos.length
        i--
        while (i >= 0) {
            mesDivInfos[i].setAttribute('class', 'infoT')
            i--
        }
        $('.infoT').animate({
            backgroundColor: 'rgba(36, 15, 76, 0.99)'
        }, 500)
        informatique.style.verticalAlign = 'top'
        commerciales.style.verticalAlign = 'top'
        var ballX = competences.offsetLeft + competences.offsetWidth/2
        var ballY = competences.offsetTop + competences.offsetHeight
        var ballLeft = true
        var ballDown = false
        var youwin = false
        var angle = false
        //TouchMove eventListener
        var box2 = document.getElementById('linkedIn'),
            boxleft, // left position of moving box
            startx, // starting x coordinate of touch point
            touchobj = null // Touch object holder
        var eTouchStart = function(e) {
            touchobj = e.changedTouches[0] // reference first touch point
            boxleft = parseInt(box2.style.left) // get left position of box
            startx = parseInt(touchobj.pageX) // get x coord of touch point
            e.preventDefault() // prevent default click behavior
        }
        window.document.addEventListener('touchstart', eTouchStart, true)
        var eTouchMove = function(e) {
            touchobj = e.changedTouches[0] // reference first touch point for this event
            var dist = parseInt(touchobj.pageX) - startx // calculate dist traveled by touch point
            box2.style.left = ((boxleft + dist > competences.scrollWidth - linkedIn.scrollWidth) ? competences.scrollWidth - linkedIn.scrollWidth : (boxleft + dist < 0) ? 0 : boxleft + dist) + competences.offsetWidth/40 + 'px'
            e.preventDefault()
        }
        window.document.addEventListener('touchmove', eTouchMove, true)
        bStart.removeEventListener('click', varsStart, true)
            
        var idAni, idR, idL
        var animMoveBall = function() {
            idAni = requestAnimationFrame(moveBall)
        }

        var animSprite = function() {
            if (parseFloat(imgSoccer.style.left) > -920) {
                imgSoccer.style.left = parseFloat(imgSoccer.style.left) - 27.8 + 'px'
            }
            else {
                imgSoccer.style.left = -4 + 'px'
            }
            idL = requestAnimationFrame(animSprite)
        }
        /*
        var animSpriteR = function() {
            if (parseFloat(imgSoccer.style.left) < -2) {
                imgSoccer.style.left = parseFloat(imgSoccer.style.left) + 17.5 + 'px'
            }
            else {
                imgSoccer.style.left = -141.8 + 'px'
            }
            cancelAnimationFrame(idL)
            idR = requestAnimationFrame(animSpriteR)
        }*/
        idL = requestAnimationFrame(animSprite)
        var moveBall = function() {
            window.document.addEventListener('mousemove', movepaddle, true)
            if (!youwin) {
                divSprite.style.top = ballY + 'px'
                //ball move left right limit
                if (ballX < competences.offsetWidth && !ballLeft) {
                    //idR = requestAnimationFrame(animSpriteR)
                    if (angle) {
                        ballX = ballX + 2
                        divSprite.style.left = ballX + 'px'
                    } else {
                        ballX = ballX + 4
                        divSprite.style.left = ballX + 'px'
                    }
                } else if (ballX > competences.offsetLeft) {
                    ballLeft = true
                    //idL = requestAnimationFrame(animSprite)
                    if (angle) {
                        ballX = ballX - 2
                        divSprite.style.left = ballX + 'px'
                    } else {
                        ballX = ballX - 4
                        divSprite.style.left = ballX + 'px'
                    }
                } else {
                    ballLeft = false
                    play(pongA)
                }
                //ball move up down limit
                if (ballY >= competences.offsetTop && !ballDown) {
                    ballY = ballY - 4
                    divSprite.style.top = ballY + 'px'
                } else if (ballY <= linkedIn.offsetTop - 10) {
                    ballDown = true
                    ballY = ballY + 4
                    divSprite.style.top = ballY + 'px'
                } else {
                    paddle()
                }
                if (ballX > competences.offsetWidth) {
                    play(pongA)
                }
                if (ballY < competences.offsetTop) {
                    play(pongA)
                }
                brickBroken()
                /* if (clickMove == true) 
                    {
                        window.addEventListener('click', animMoveBall, true)
                        clickMove = false
                    }
                    else {/*
                        window.removeEventListener('click', animMoveBall, true)
                        animMoveBall()*/
                //}
                animMoveBall()
            }
        }
            
        var paddle = function() {
            if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 2) {
                ballDown = false
                ballLeft = true
                play(pongB)
                if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft + linkedIn.offsetWidth / 4) {
                    angle = true
                } else {
                    angle = false
                }
            } else if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth + 5) {
                ballDown = false
                ballLeft = false
                play(pongB)
                if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth * 3 / 4) {
                    angle = true
                } else {
                    angle = false
                }
            } else {
                ballDown = false
                ballX = competences.offsetLeft + competences.offsetWidth/2
                ballY = competences.offsetTop + competences.offsetHeight - 50
                clickMove = true
                play(miss)
                //alert('YOU MISSED THE BALL')
            }
        }

        var movepaddle = function(mon0bjetEvent) {
            if (mon0bjetEvent.clientX - linkedIn.offsetWidth/2 > competences.offsetLeft && mon0bjetEvent.clientX + linkedIn.offsetWidth/2 < competences.offsetWidth + competences.offsetLeft) {
                window.document.getElementById('linkedIn').style.left = mon0bjetEvent.clientX - linkedIn.offsetWidth/2 + 'px'
            }
        }
        
        var brickBroken = function() {
            var mesInfosT = window.document.getElementsByClassName('infoT')
            var i = mesInfosT.length - 1
            if (mesInfosT.length <= 0) {
                cancelAnimationFrame(idAni)
                cancelAnimationFrame(idR)
                cancelAnimationFrame(idL)
                window.document.removeEventListener('mousemove', movepaddle, true)
                window.document.removeEventListener('click', eTouchStart, true)
                window.document.removeEventListener('click', eTouchMove, true)
                play(youWin)
                divSprite.removeChild(imgSoccer)
                $('#divSprite').hide()
                linkedIn.style.left = 'auto'
                ballY = complementaire.offsetTop - complementaire.offsetHeight/2
                linkedIn.className = 'linkedin'
                $('#linkedIn').hide()
                $('#competen').animate({
                    height: animH + 'px'
                }, 1500)
                competences.className = 'competences'
                informatique.style.verticalAlign = 'middle'
                commerciales.style.verticalAlign = 'middle'
                youwin = true
                divSprite.style.display = 'none'
                $('#metier > h1').fadeOut(250, function() {
                    $(this).text('Junior FullStack Javascript Developer').fadeIn(250)
                })
                $('#experiences').fadeIn(750)
                $('#formation').fadeIn(1000)
                $('#complementaire').fadeIn(1250)
                $('#competen').css('height', 'auto')
                bStart.addEventListener('click', varsStart, true)
            } else {
                while (i >= 0) {
                    //inside brick
                    if (ballX + divSprite.offsetWidth > mesInfosT[i].offsetLeft && ballX < mesInfosT[i].offsetLeft + mesInfosT[i].offsetWidth) {
                        if (ballY + divSprite.offsetHeight > mesInfosT[i].offsetTop && ballY < mesInfosT[i].offsetTop + mesInfosT[i].offsetHeight) {
                            //left collision
                            if (mesInfosT[i].offsetLeft - ballX - divSprite.offsetWidth > ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight && mesInfosT[i].offsetLeft - ballX - divSprite.offsetWidth > mesInfosT[i].offsetTop - ballY - divSprite.offsetHeight) ballLeft = true
                            //right collision
                            else if (ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth > ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight && ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth > mesInfosT[i].offsetTop - ballY - divSprite.offsetHeight) ballLeft = false
                            else if (ballDown === false) ballDown = true
                            else ballDown = false
                            play(pongC)
                            $(mesInfosT[i]).animate({
                                backgroundColor: 'rgba(255, 255, 255, 0.4)'
                            }, 500)
                            mesInfosT[i].className = 'infoJeu'
                        }
                    }
                    i--
                }
            }
        }
        
        idAni = requestAnimationFrame(moveBall)
    }
}
jeuBreaker()