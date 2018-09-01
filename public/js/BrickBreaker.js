(() => {
    document.addEventListener('DOMContentLoaded', function () {
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
        $('#competen').fadeOut(500)
        $('#experiences').fadeOut(325)
        $('#formation').fadeOut(250)
        $('#complementaire').fadeOut(125)
        const bStart = window.document.getElementById('metier')
        bStart.addEventListener('click', letsStart, true)
        function letsStart() {
            $('#experiences').fadeOut()
            $('#formation').fadeOut()
            $('#complementaire').fadeIn()
            $('#competen').fadeIn()
            
            const competences = window.document.getElementById('competen')
            const informatique = window.document.getElementById('informatique')
            const commerciales = window.document.getElementById('commerciales')
            const linkedIn = window.document.getElementById('linkedIn')
            const complementaire = window.document.getElementById('complementaire')
            const animH = $('#competen').height()
            const divSprite = window.document.createElement('div')
            divSprite.id = 'divSprite'
            divSprite.className = 'divsprite'
            divSprite.style.position = 'absolute'
            divSprite.style.height = '15px'
            divSprite.style.width = '15px'
            divSprite.style.overflow = 'hidden'
            competences.appendChild(divSprite)
            var imgSoccer = window.document.createElement('img')
            imgSoccer.id = 'imgSoccer'
            imgSoccer.className = 'imgsoccer'
            imgSoccer.style.position = 'absolute'
            imgSoccer.style.height = '100px'
            imgSoccer.style.left = '-1.7px'
            //imgSoccer.style.top = '-36.2px'
            imgSoccer.style.top = '-53px'
            imgSoccer.src = '/static/img/ball.png'
            divSprite.appendChild(imgSoccer)
            $('#competen').animate({
                height: '500px'
            }, 500)
            linkedIn.className = 'linkedinT'
            complementaire.className = 'complementaireT'
            window.document.getElementById('linkedIn').style.left = competences.offsetWidth / 2 - 40 + 'px'
            let mesDivInfos = window.document.getElementsByClassName('infoJeu')
            let i = mesDivInfos.length
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
            let ballX = competences.offsetWidth / 2
            let ballY = complementaire.offsetTop - complementaire.offsetHeight/2
            let ballLeft = true
            let ballDown = false
            let youwin = false
            let angle = false
            var box2 = document.getElementById('linkedIn'),
                boxleft, // left position of moving box
                startx, // starting x coordinate of touch point
                touchobj = null // Touch object holder
            window.addEventListener('touchstart', function(e) {
                touchobj = e.changedTouches[0] // reference first touch point
                boxleft = parseInt(box2.style.left) // get left position of box
                startx = parseInt(touchobj.pageX) // get x coord of touch point
                e.preventDefault() // prevent default click behavior
            }, false)
            window.addEventListener('touchmove', function(e) {
                touchobj = e.changedTouches[0] // reference first touch point for this event
                var dist = parseInt(touchobj.pageX) - startx // calculate dist traveled by touch point
                box2.style.left = ((boxleft + dist > competences.scrollWidth - linkedIn.scrollWidth) ? competences.scrollWidth - linkedIn.scrollWidth : (boxleft + dist < 0) ? 0 : boxleft + dist) + competences.offsetWidth/40 + 'px'
                e.preventDefault()
            }, false)
            bStart.removeEventListener('click', letsStart, true)
            var moveBall = function() {
                window.addEventListener('mousemove', movepaddle, false)
                if (!youwin) {
                    divSprite.style.top = ballY + 'px'
                    //ball move left right limit
                    if (ballX < competences.offsetWidth && !ballLeft) {
                        if (angle) {
                            ballX = ballX + 2
                            divSprite.style.left = ballX + 'px'
                        } else {
                            ballX = ballX + 4
                            divSprite.style.left = ballX + 'px'
                        }
                    } else if (ballX > competences.offsetLeft) {
                        ballLeft = true
                        if (angle) {
                            ballX = ballX - 2
                            divSprite.style.left = ballX + 'px'
                        } else {
                            ballX = ballX - 4
                            divSprite.style.left = ballX + 'px'
                        }
                    } else {
                        ballLeft = false
                    }
                    //ball move up down limit
                    if (ballY > competences.offsetTop && !ballDown) {
                        ballY = ballY - 2
                        divSprite.style.top = ballY + 'px'
                    } else if (ballY < linkedIn.offsetTop - 10) {
                        ballDown = true
                        ballY = ballY + 2
                        divSprite.style.top = ballY + 'px'
                    } else {
                        paddle()
                    }
                    brickBroken()
                    requestAnimationFrame(moveBall)
                }
            }
            var animSprite = function() {
                if (parseFloat(imgSoccer.style.left) > -152) {
                    imgSoccer.style.left = parseFloat(imgSoccer.style.left) - 17.5 + 'px'
                }
                else {
                    imgSoccer.style.left = -1.7 + 'px'
                }
            }
            setInterval(animSprite, 40)
            var paddle = function() {
                if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 2) {
                    ballDown = false
                    ballLeft = true
                    if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft + linkedIn.offsetWidth / 4) {
                        angle = true
                    } else {
                        angle = false
                    }
                } else if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth + 5) {
                    ballDown = false
                    ballLeft = false
                    if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth * 3 / 4) {
                        angle = true
                    } else {
                        angle = false
                    }
                } else {
                    alert('YOU MISSED THE BALL')
                    ballDown = false
                    ballX = competences.offsetWidth / 2
                    ballY = linkedIn.offsetTop
                }
            }
            var brickBroken = function() {
                let mesInfosT = window.document.getElementsByClassName('infoT')
                let i = mesInfosT.length - 1
                if (mesInfosT.length <= 0) {
                    divSprite.removeChild(imgSoccer)
                    linkedIn.style.left = 'auto'
                    ballY = complementaire.offsetTop - complementaire.offsetHeight/2
                    linkedIn.className = 'linkedin'
                    $('#competen').animate({
                        height: animH + 'px'
                    }, 450)
                    competences.className = 'competences'
                    informatique.style.verticalAlign = 'middle'
                    commerciales.style.verticalAlign = 'middle'
                    youwin = true
                    $('#metier > h4').fadeOut(250, function() {
                        $(this).text('Junior FullStack Javascript Developer').fadeIn(250)
                    })
                    $('#experiences').fadeIn(750)
                    $('#formation').fadeIn(1000)
                    $('#complementaire').fadeIn(1250)
                    $('#competen').css('height', 'auto')
                } else {
                    while (i >= 0) {
                    //inside brick
                        if (ballX + divSprite.offsetWidth >= mesInfosT[i].offsetLeft && ballX <= mesInfosT[i].offsetLeft + mesInfosT[i].offsetWidth) {
                            if (ballY + divSprite.offsetHeight >= mesInfosT[i].offsetTop && ballY <= mesInfosT[i].offsetTop + mesInfosT[i].offsetHeight) {
                            //left collision
                                if (mesInfosT[i].offsetLeft - ballX - divSprite.offsetWidth > ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight && mesInfosT[i].offsetLeft - ballX - divSprite.offsetWidth > mesInfosT[i].offsetTop - ballY - divSprite.offsetHeight) ballLeft = true
                                //right collision
                                else if (ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth > ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight && ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth > mesInfosT[i].offsetTop - ballY - divSprite.offsetHeight) ballLeft = false
                                else if (ballDown === false) ballDown = true
                                else ballDown = false
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
            var movepaddle = function(mon0bjetEvent) {
                if (mon0bjetEvent.clientX - linkedIn.offsetWidth/2.5 > competences.offsetLeft && mon0bjetEvent.clientX + linkedIn.offsetWidth/8 < competences.offsetWidth) {
                    window.document.getElementById('linkedIn').style.left = mon0bjetEvent.clientX - linkedIn.offsetWidth/2 + 'px'
                }
            }
            requestAnimationFrame(moveBall)
        }
    }, true)
})()