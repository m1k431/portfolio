const jeuBreaker = function () {
    /*$('#m0ncentrage').fadeIn(1000)
    $('#competen').fadeIn(500)
    $('#experiences').fadeIn(375)
    $('#formation').fadeIn(250)
    $('#complementaire').fadeIn(125)
    $('.moi').fadeIn()
    $('.metier').fadeIn()*/
    $('#metier > h1').fadeOut(375, function () {
        $(this).text('Click or Touch here to START').fadeIn(375)
    })
    //$('#scoreForm').fadeOut()
    var $div2blink = $('#metier') // Save reference, only look this item up once, then save
    var idInterBlink = setInterval(function () {
        $div2blink.toggleClass('backgroundRed')
    }, 1500)
    
    //_______________________________Choix_langue____________________________________________________________________________
    $('.english').fadeIn()
    $('#competen').fadeIn()

    window.document.getElementById('french').onclick = () => {
        //play(flagS)
        $('.english').hide()
        $('.spanish').hide()
        $('.french').hide()
        $('#competen').css('height', 'auto')
        $('.french').fadeIn()
    }
    window.document.getElementById('english').onclick = () => {
        //play(flagS)
        $('.french').hide()
        $('.spanish').hide()
        $('.english').hide()
        $('.english').fadeIn()
    }
    window.document.getElementById('spanish').onclick = () => {
        //play(flagS)
        $('.french').hide()
        $('.english').hide()
        $('.spanish').hide()
        $('#competen').css('height', 'auto')
        $('.spanish').fadeIn()
    }

    //_____________________________Click_on_START__________________________________________________________________________
    var bStart = window.document.getElementById('metier')
    bStart.addEventListener('click', varsStart, true)

    function varsStart() {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        const context = new AudioContext()
        var audioStack
        var pongA = './static/sound/pongA.mp3'
        var pongB = './static/sound/pongB.mp3'
        var pongC = './static/sound/pongC.mp3'
        var start = './static/sound/start.mp3'
        var flagS = './static/sound/flagS.mp3'
        var youWin = './static/sound/youWin.mp3'
        var miss = './static/sound/miss.mp3'
        var score = 0
        var combo = 1
        var clickMove = false;
        var moveWithPad = true
        $('#scoreForm').hide()
        $('#highScore').hide()
        $('#complementaire').hide()
        $('#linkedIn').fadeIn(2000)
        play(start)
        //____________________INITIALISATION ENVIRONNEMENT________________________________________________________________
        var competences = window.document.getElementById('competen')
        var animH = $('#competen').height()
        /*$('#competen').animate({
            height: animH + 150 + 'px'
        }, 500)*/
        $('#competen').toggleClass('competences')
        var informatique = window.document.getElementById('informatique')
        var commerciales = window.document.getElementById('commerciales')
        var linkedIn = window.document.getElementById('linkedIn')
        var complementaire = window.document.getElementById('complementaire')
        clearInterval(idInterBlink)
        $div2blink.removeClass('backgroundRed')
        $div2blink.css('background-color', 'rgba(255, 255, 255, 0.4)')
        $('#metier > h1').text('SCORE: ' + score).fadeIn(375)
        //var linkOff = $('#linkedIn').offset()
        ///----------------------DIV BALL SPRITE---------------------------
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
        //---------------------Ball Sprite---------------------------------
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
        //------------------------Paddle + hauteur breaker-----------------
        linkedIn.className = 'linkedinT'
        window.document.getElementById('linkedIn').style.left = competences.offsetWidth / 2 - 40 + 'px'
        linkedIn.style.marginTop = -100 + 'px'
        complementaire.className = 'complementaireT'
        //--------------------INITIALISTATION BRICKS-----------------------
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
        $('html, body').animate({
            scrollTop: $('#competen').offset().top - 80
        }, 750)
        $('#btp').fadeOut()
        $('#commerciales').fadeOut()
        $('#informatique').animate({
            width: '98%'
        }, 1000)


        //______________________________________________________INITIALISATIION_JEU______________________________________
        var ballX = linkedIn.offsetLeft + linkedIn.offsetWidth / 2
        var ballY = 1000
        var ballLeft = true
        var ballDown = false
        var youwin = false
        var angle = false
        var idAni, idR, idL

        //_________________________________________________MAIN()_____Déplacement_balle_dans_Environnement__________________________
        var moveBall = function () {
            var ballSpeed = 3;
            window.document.addEventListener('mousemove', movepaddle, true)
            if (!youwin || !clickMove) {
                divSprite.style.top = ballY + 'px'
                //ball move left right limit
                if (ballX < competences.offsetLeft + competences.offsetWidth - divSprite.offsetWidth && !ballLeft) {
                    //idR = requestAnimationFrame(animSpriteR)
                    if (angle) {
                        ballX = ballX + 1 * ballSpeed
                        divSprite.style.left = ballX + 'px'
                    } else {
                        ballX = ballX + 2 * ballSpeed
                        divSprite.style.left = ballX + 'px'
                    }
                } else if (ballX > competences.offsetLeft) {
                    ballLeft = true
                    //idL = requestAnimationFrame(animSprite)
                    if (angle) {
                        ballX = ballX - 1 * ballSpeed
                        divSprite.style.left = ballX + 'px'
                    } else {
                        ballX = ballX - 2 * ballSpeed
                        divSprite.style.left = ballX + 'px'
                    }
                } else {
                    ballLeft = false
                    play(pongA)
                }
                //ball move up down limit
                if (ballY >= competences.offsetTop && !ballDown) {
                    ballY = ballY - 2 * ballSpeed
                    divSprite.style.top = ballY + 'px'
                } else if (ballY < competences.offsetTop + competences.offsetHeight - 30) {
                    ballDown = true
                    ballY = ballY + 2 * ballSpeed
                    divSprite.style.top = ballY + 'px'
                    if (ballY + divSprite.offsetHeight > linkedIn.offsetTop && ballY < linkedIn.offsetTop + 5)
                        paddle()
                } else {
                    ballDown = false
                    clickMove = true
                    combo = 1
                    //------------Short hand style if---------------
                    score >= 100 ? score -= 100 : score = 0
                    //----------------------------------------------
                    $('#metier > h1').text('SCORE: ' + score).css({
                        'color': 'red',
                        'font-size': '125%'
                    }).fadeIn(375)
                    combo = 1
                    play(miss)
                }
                if (ballX + divSprite.offsetWidth > competences.offsetLeft + competences.offsetWidth) {
                    play(pongA)
                }
                if (ballY < competences.offsetTop) {
                    play(pongA)
                }
                brickBroken()
                jeuTermine()
                /*-if (clickMove == true) {
                    //window.document.addEventListener('click', animMoveBall, true)
                    clickMove = false
                } else {
                    //window.document.removeEventListener('click', animMoveBall, true)
                    //ballX = linkedIn.offsetLeft
                    setTimeout(function () {
                        $('#metier > h1').text('SCORE: ' + score).css({
                            'color': 'black',
                            'font-size': '125%'
                        }).fadeIn(375)
                    }, 375)
                    //moveWithPad = false;
                    animMoveBall()
            }*/
                if (clickMove == false) {
                    animMoveBall()
                    window.document.removeEventListener('click', animMoveBall, true)
                    $('#metier > h1').text('SCORE: ' + score).css({
                        'color': 'black',
                        'font-size': '125%'
                    }).fadeIn(375)
                } else {
                    cancelAnimationFrame(idAni)
                    window.document.addEventListener('click', animMoveBall, true)
                }
            }
        }


        //______________________________________________________TouchMove_eventListener___________________________________
        var box2 = document.getElementById('linkedIn'),
            boxleft, // left position of moving box
            startx, // starting x coordinate of touch point
            touchobj = null // Touch object holder
        var eTouchStart = function (e) {
            touchobj = e.changedTouches[0] // reference first touch point
            boxleft = parseInt(box2.style.left) // get left position of box
            startx = parseInt(touchobj.pageX) // get x coord of touch point
            e.preventDefault() // prevent default click behavior
        }
        window.document.addEventListener('touchstart', eTouchStart, true)
        var eTouchMove = function (e) {
            touchobj = e.changedTouches[0] // reference first touch point for this event
            var dist = parseInt(touchobj.pageX) - startx // calculate dist traveled by touch point
            box2.style.left = ((boxleft + dist > competences.scrollWidth - linkedIn.scrollWidth) ? competences.scrollWidth - linkedIn.scrollWidth : (boxleft + dist < 0) ? 0 : boxleft + dist) + competences.offsetWidth / 40 + 'px'
            e.preventDefault()
        }
        window.document.addEventListener('touchmove', eTouchMove, true)
        //bStart.removeEventListener('click', varsStart, true)
        
        //event listener start
        window.document.removeEventListener('touchstart', eTouchStart, true)
        //____________________________________________________ANIMATION_Ball_Sprite______________________________________
        var animSprite = function () {
            if (parseFloat(imgSoccer.style.left) > -920) {
                imgSoccer.style.left = parseFloat(imgSoccer.style.left) - 27.8 + 'px'
            } else {
                imgSoccer.style.left = -4 + 'px'
            }
            idL = requestAnimationFrame(animSprite)
        }
        var animMoveBall = function () {
            requestAnimationFrame(moveBall)
            clickMove = false
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

        //______________________________________Intéraction_balle/paddle_AngleBalle_______________________________________________________
        var paddle = function () {
            if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 2) {
                ballDown = false
                ballLeft = true
                combo += 1
                play(pongB)
                if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft + linkedIn.offsetWidth / 4) {
                    angle = true
                } else {
                    angle = false
                }
            } else if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth + 5) {
                ballDown = false
                ballLeft = false
                combo += 1
                play(pongB)
                if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth * 3 / 4) {
                    angle = true
                } else {
                    angle = false
                }
            }
            /*else {
                           
                       }*/
        }

        //__________________________________Déplacement paddle dans environnement de jeu________________________________________________________________________
        var movepaddle = function (mon0bjetEvent) {
            if (mon0bjetEvent.clientX - linkedIn.offsetWidth / 2 > competences.offsetLeft && mon0bjetEvent.clientX + linkedIn.offsetWidth / 2 < competences.offsetWidth + competences.offsetLeft) {
                window.document.getElementById('linkedIn').style.left = mon0bjetEvent.clientX - linkedIn.offsetWidth / 2 + 'px'
            }
        }

        //___________________________________Verif/gestion_collision_brick_______________________________________________________________________________________
        var brickBroken = function () {
            var mesInfosT = window.document.getElementsByClassName('infoT')
            var i = mesInfosT.length - 1
            while (i >= 0) {
                //inside brick
                if (ballX + divSprite.offsetWidth > mesInfosT[i].offsetLeft && ballX < mesInfosT[i].offsetLeft + mesInfosT[i].offsetWidth && ballY + divSprite.offsetHeight > mesInfosT[i].offsetTop && ballY < mesInfosT[i].offsetTop + mesInfosT[i].offsetHeight) {
                    //left collision
                    if (mesInfosT[i].offsetLeft - ballX - divSprite.offsetWidth > ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight && mesInfosT[i].offsetLeft - ballX - divSprite.offsetWidth > mesInfosT[i].offsetTop - ballY - divSprite.offsetHeight)
                        ballLeft = true
                    //right collision
                    else if (ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth > ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight && ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth > mesInfosT[i].offsetTop - ballY - divSprite.offsetHeight)
                        ballLeft = false
                    else if (ballDown == false)
                        ballDown = true
                    else
                        ballDown = false
                    play(pongC)
                    $(mesInfosT[i]).animate({
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    }, 500)
                    mesInfosT[i].className = 'infoJeu'
                    score += 50 * combo
                    $('#metier > h1').text('SCORE: ' + score).fadeIn(375)
                }
                i--
            }
        }

        //________________________________________________Verif/Gestion_YouWIN______________________________________________________________________________
        var jeuTermine = function () {
            var mesInfosT = window.document.getElementsByClassName('infoT')
            if (mesInfosT.length < 1) {
                cancelAnimationFrame(idAni)
                cancelAnimationFrame(idR)
                cancelAnimationFrame(idL)
                window.document.removeEventListener('mousemove', movepaddle, true)
                window.document.removeEventListener('click', eTouchStart, true)
                window.document.removeEventListener('click', eTouchMove, true)
                play(youWin)
                competences.removeChild(divSprite)
                //$('#divSprite').hide()
                linkedIn.style.left = 'auto'
                ballY = linkedIn.offsetTop
                linkedIn.className = 'linkedin'
                $('#linkedIn').hide()
                /*$('#competen').animate({
                    height: animH + 'px'
                }, 1500)*/

                $('#competen').toggleClass('competences')
                //$('#btp').fadeIn()
                //$('#commerciales').fadeIn()
                //$('#informatique').animate({
                //    width: '31.5%'
                //}, 2000)
                $('#informatique').fadeOut()
                informatique.style.verticalAlign = 'middle'
                commerciales.style.verticalAlign = 'middle'
                youwin = true
                $('#skills').hide()
                $('#score').fadeIn()
                $('#scoreForm').fadeIn()
                //bStart.addEventListener('click', varsStart, true)
            }
        }

        $('#scoreForm').on('submit', function (event) {
            event.preventDefault()
            console.log($('#postName').val() + '/' + score)
            $('#scoreForm').hide()
            $('#highScore').fadeIn()
            $.ajax({
                type: 'POST',
                url: '/highscore',
                dataType: 'json',
                data: {
                    name: $('#postName').val(),
                    score: score
                },
                complete: function (response) {
                    console.log('POST success: ' + response)
                    $.ajax({
                        type: 'GET',
                        url: '/highscore',
                        dataType: 'json',
                        success: function (reponse) {
                            console.log('GET success: ' + reponse)
                            var tbodyEl = $('tbody')
                            tbodyEl.html('')
                            reponse.forEach(function (score) {
                                tbodyEl.append('\
                                <tr>\
                                <td>' + score.name + '</td>\
                                <td>' + score.score + '</td>\
                                </tr>\
                                ')
                            })
                        }
                    })
                }
            })
        })

        function show_prompt() {

            var name = prompt('Score: ' + score + ' Plz enter your name', '');
            if (name != null && name != "") {
                window.location.replace('http://www.mikael.ml/highscore')
                //alert(name + ' score is ' + score);
            }
        }
        //__________________________________________WEB_Audio_API___________________________________________________________
        function play(url) {
            audioStack = []
            var nextTime = 0

            fetch(url).then(function (response) {
                var reader = response.body.getReader()

                function read() {
                    return reader.read().then(({
                        value,
                        done
                    }) => {
                        if (done) {
                            //console.log('done');
                            return
                        } else {
                            //console.log(value, done);
                            context.decodeAudioData(value.buffer, function (buffer) {
                                audioStack.push(buffer)
                                if (audioStack.length) {
                                    scheduleBuffers()
                                }
                            }, function (err) {
                                console.log('err(decodeAudioData): ' + err)
                            })
                        }
                        read()
                    })
                }
                read()
            })

            function scheduleBuffers() {
                while (audioStack.length) {
                    var buffer = audioStack.shift()
                    var source = context.createBufferSource()
                    source.buffer = buffer
                    source.connect(context.destination)
                    if (nextTime == 0)
                        nextTime = context.currentTime + 0.01 /// add 50ms latency to work well across systems - tune this if you like
                    source.start(nextTime)
                    nextTime += source.buffer.duration // Make the next buffer wait the length of the last buffer before being played
                }
            }
        }
        //____________________________________________Animation_Déplacement_Balle__________________________________________________________
        idAni = requestAnimationFrame(moveBall)
    }
}
//_______________________________________Exec_jeuBreaker___________________________________________________________________________________
jeuBreaker()