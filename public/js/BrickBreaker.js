
const jeuBreaker = function() {
    var audioctxxx = new AudioContext()
    var sourceA, sourceB, sourceC, sourceM, sourceF, sourceS, sourceY
    var pongA = './static/sound/pongA.mp3'
    var pongB = './static/sound/pongB.mp3'
    var pongC = './static/sound/pongC.mp3'
    var start = './static/sound/start.mp3'
    var flagS = './static/sound/flagS.mp3'
    var youWin = './static/sound/youWin.mp3'
    var miss = './static/sound/miss.mp3'
    // Buffeeeeer mode
    function getDataA() {
        sourceA = audioctxxx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', pongA, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioctxxx.decodeAudioData(audioData, function(buffer) {
                sourceA.buffer
                sourceA.buffer = buffer
                sourceA.connect(audioctxxx.destination)
                sourceA.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }
    function getDataB() {
        sourceB = audioctxxx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', pongB, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioctxxx.decodeAudioData(audioData, function(buffer) {
                sourceB.buffer
                sourceB.buffer = buffer
                sourceB.connect(audioctxxx.destination)
                sourceB.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }
    function getDataC() {
        sourceC = audioctxxx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', pongC, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioctxxx.decodeAudioData(audioData, function(buffer) {
                sourceC.buffer
                sourceC.buffer = buffer
                sourceC.connect(audioctxxx.destination)
                sourceC.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }
    function getDataM() {
        sourceM = audioctxxx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', miss, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioctxxx.decodeAudioData(audioData, function(buffer) {
                sourceM.buffer
                sourceM.buffer = buffer
                sourceM.connect(audioctxxx.destination)
                sourceM.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }
    function getDataF() {
        sourceF = audioctxxx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', flagS, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioctxxx.decodeAudioData(audioData, function(buffer) {
                sourceF.buffer
                sourceF.buffer = buffer
                sourceF.connect(audioctxxx.destination)
                sourceF.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }
    function getDataS() {
        sourceS = audioctxxx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', start, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioctxxx.decodeAudioData(audioData, function(buffer) {
                sourceS.buffer
                sourceS.buffer = buffer
                sourceS.connect(audioctxxx.destination)
                sourceS.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }
    function getDataY() {
        sourceY = audioctxxx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', youWin, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioctxxx.decodeAudioData(audioData, function(buffer) {
                sourceY.buffer
                sourceY.buffer = buffer
                sourceY.connect(audioctxxx.destination)
                sourceY.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }

    $('#m0ncentrage').fadeIn(1000)
    $('#competen').fadeIn(500)
    $('#experiences').fadeIn(375)
    $('#formation').fadeIn(250)
    $('#complementaire').fadeIn(125)
    $('.moi').fadeIn()
    $('.metier').fadeIn()
    $('#metier > h4').fadeOut(375, function() {
        $(this).text('Click or Touch here to START').fadeIn(375)
    })
    
    //jeuUUUUUUUUUUUUUUUUUUUcv
    $('.english').fadeIn()
    $('#competen').fadeIn()
      
    window.document.getElementById('french').onclick = () => {
        getDataF()
        sourceF.start(0)
        $('.english').hide()
        $('.spanish').hide()
        $('.french').hide()
        $('#competen').css('height', 'auto')
        $('.french').fadeIn()
    }
    window.document.getElementById('english').onclick = () => {
        getDataF()
        sourceF.start(0)
        $('.french').hide()
        $('.spanish').hide()
        $('.english').hide()
        $('.english').fadeIn()
    }
    window.document.getElementById('spanish').onclick = () => {
        getDataF()
        sourceF.start(0)
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
        //$('#experiences').fadeOut()
        //$('#formation').fadeOut()
        $('#linkedIn').fadeIn(2000)
        getDataS()
        sourceS.start(0)
        //brickBreaker
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
        divSprite.style.height = '12px'
        divSprite.style.width = '12px'
        divSprite.style.border = 'solid'
        divSprite.style.borderWidth = '1px'
        divSprite.style.borderRadius = '12px'
        divSprite.style.overflow = 'hidden'
        competences.appendChild(divSprite)
        var imgSoccer = window.document.createElement('img')
        imgSoccer.id = 'imgSoccer'
        imgSoccer.className = 'imgsoccer'
        imgSoccer.style.position = 'absolute'
        imgSoccer.style.height = '100px'
        imgSoccer.style.left = '-1.8px'
        imgSoccer.style.top = '-53.4px'
        imgSoccer.src = '/static/img/ball.png'
        imgSoccer.style.backgroundColor = 'red'
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
            if (parseFloat(imgSoccer.style.left) > -152) {
                imgSoccer.style.left = parseFloat(imgSoccer.style.left) - 17.5 + 'px'
            }
            else {
                imgSoccer.style.left = -1.8 + 'px'
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
                    getDataA()
                    sourceA.start(0)
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
                    getDataA()
                    sourceA.start(0)
                }
                if (ballY < competences.offsetTop) {
                    getDataA()
                    sourceA.start(0)
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
                getDataB()
                sourceB.start(0)
                if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft + linkedIn.offsetWidth / 4) {
                    angle = true
                } else {
                    angle = false
                }
            } else if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth + 5) {
                ballDown = false
                ballLeft = false
                getDataB()
                sourceB.start(0)
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
                getDataM()
                sourceM.start(0)
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
                getDataY()
                sourceY.start(0)
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
                $('#metier > h4').fadeOut(250, function() {
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
                            getDataC()
                            sourceC.start(0)
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