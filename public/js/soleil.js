const monIntro = function () {
    //Bouton de Controle play/pause video jonglage 
    /*var m4vide0 = document.getElementById('jugglejungle')
    m4vide0.playbackRate = 0.75
    var BtnJs0nPl4Y = document.getElementById('BtnJs0nPl4Y')
    BtnJs0nPl4Y.innerHTML = 'PAUSE'
    BtnJs0nPl4Y.addEventListener('click', () => {
        if (m4vide0.paused) {
            m4vide0.play()
            BtnJs0nPl4Y.innerHTML = 'PAUSE'
        } else {
            m4vide0.pause()
            BtnJs0nPl4Y.innerHTML = 'PLAY'
        }
    })
    BtnJs0nPl4Y.click()*/
    //Blue/red menu button
    $('#intro').removeClass('css3button')
    $('#intro').addClass('css3buttonRed')
    //FadeIN page acceuil
    $('#INDEX').fadeIn(100)
    $('#m0ncentrage').fadeIn(100)
    $('#jugglejungle').fadeIn(100)

    
    //DIV SOLEILLLLLLLLL
    var m0nsoleil = document.getElementById('s0leil')
    m0nsoleil.style.position = 'relative'
    m0nsoleil.style.display = 'block'
    m0nsoleil.style.overflow = 'hidden'
    m0nsoleil.width = 600
    m0nsoleil.height = 400
    m0nsoleil.style.height = '400px'
    m0nsoleil.id = 's0leil'
    var divAtari = document.createElement('div')
    divAtari.style.position = 'absolute'
    divAtari.style.top = '36%'
    divAtari.style.right = '6%'
    //ATARIIIIIIIIII
    var m0nimg = document.createElement('img')
    m0nimg.style.position = 'relative'
    m0nimg.src = '/static/img/Atari.webp'
    //m0nimg.style.top = '36%'
    //m0nimg.style.right = '6%'
    m0nimg.id = 'atari'
    //360backnoreverse
    var mon360 = document.createElement('video')
    mon360.style.position = 'absolute'
    mon360.style.top = '8%'
    mon360.style.right = '34%'
    mon360.height = '88'
    mon360.id = 'snowB'
    mon360.playsinline = true
    mon360.autoplay = true
    mon360.muted = true
    mon360.loop = true
    var src360 = document.createElement('source')
    src360.src = '/static/img/360backnoreverse.webm'
    src360.type = 'video/webm'
    //Cielllllllllllll
    var m0nCiel = document.createElement('canvas')
    m0nCiel.style.position = 'absolute'
    m0nCiel.style.display = 'block'
    m0nCiel.width = 600
    m0nCiel.height = 400
    m0nCiel.style.margin = 0
    m0nCiel.style.width = '100%'
    m0nCiel.style.height = '100%'
    m0nCiel.style.backgroundColor = 'blue'
    m0nCiel.id = 'ci3l'
    m0nsoleil.appendChild(m0nCiel)
    var m0nCanva = document.createElement('canvas')
    m0nCanva.width = 40
    m0nCanva.height = 40
    m0nCanva.style.width = '40px'
    m0nCanva.id = 'c4nv4'
    m0nCanva.style.position = 'absolute'
    m0nsoleil.appendChild(m0nCanva)
    var myStars = document.createElement('canvas')
    myStars.width = 600
    myStars.height = 400
    myStars.style.width = '100%'
    myStars.style.height = '100%'
    myStars.id = 'space'
    myStars.style.position = 'absolute'
    //myStars.style.display = 'none'
    myStars.style.borderRadius = '10px'
    myStars.style.top = '0px'
    myStars.style.left = '0px'
    m0nsoleil.appendChild(myStars)
    var maLune = document.createElement('canvas')
    maLune.width = 40
    maLune.height = 40
    maLune.style.width = '50px'
    maLune.id = 'moon'
    //maLune.style.display = 'none'
    maLune.style.position = 'absolute'
    maLune.style.top = '30px'
    maLune.style.right = '10%'
    m0nsoleil.appendChild(maLune)
    var m4m3r = document.createElement('canvas')
    m4m3r.width = 600
    m4m3r.height = 400
    m4m3r.style.width = '100%'
    m4m3r.style.height = '100%'
    m4m3r.id = 'm0nC4nvaM3r'
    m4m3r.style.position = 'absolute'
    m4m3r.style.display = 'block'
    m0nsoleil.appendChild(m4m3r)
    var m4colline = document.createElement('canvas')
    m4colline.width = 600
    m4colline.height = 400
    m4colline.style.width = '100%'
    m4colline.style.height = '100%'
    m4colline.id = 'm0nC4nvaC0lline'
    m4colline.style.display = 'block'
    m4colline.style.position = 'absolute'
    m0nsoleil.appendChild(m4colline)
    //var m0n4tari = document.createElement('img')
    //m0n4tari.id = 'a7ari'
    //m0n4tari.style.position = 'absolute'
    //m0nsoleil.appendChild(m0n4tari)
    //meeeeeeeeeeeeer
    var ctx2M4col = m4m3r.getContext('2d')
    var gradientm3r = ctx2M4col.createLinearGradient(0, 0, 0, 600)
    gradientm3r.addColorStop(0, 'darkblue')
    gradientm3r.addColorStop(1, 'darkblue')
    ctx2M4col.fillStyle = gradientm3r
    ctx2M4col.beginPath()
    ctx2M4col.moveTo(0, 600)
    ctx2M4col.lineTo(600, 400)
    ctx2M4col.lineTo(600, 170)
    ctx2M4col.bezierCurveTo(170, 178, 650, 172, 0, 170)
    ctx2M4col.closePath()
    ctx2M4col.stroke()
    ctx2M4col.fill()
    //C00000000000000000000000000000llllllllllllllllOLLLLIIIIIINNNNNNE 1
    var ctxM4col = m4colline.getContext('2d')
    var gradientC0lline = ctxM4col.createLinearGradient(0, 0, 0, 600)
    gradientC0lline.addColorStop(0, 'yellow')
    gradientC0lline.addColorStop(0.8, 'black')
    ctxM4col.fillStyle = gradientC0lline
    ctxM4col.beginPath()
    ctxM4col.moveTo(0, 400)
    ctxM4col.lineTo(600, 400)
    ctxM4col.lineTo(600, 260)
    ctxM4col.bezierCurveTo(150, 150, 250, 130, 0, 200)
    ctxM4col.closePath()
    ctxM4col.stroke()
    ctxM4col.fill()
    
    //SONIC PALM TREEEEEEEE
    var divMonkey = document.createElement('div')
    divMonkey.id = 'divMonkey'
    divMonkey.className = 'divMonkey'
    divMonkey.style.position = 'absolute'
    divMonkey.style.height = '140px'
    divMonkey.style.width = '95px'
    divMonkey.style.top = '82px'
    divMonkey.style.left = '59.55px'
    //divMonkey.style.backgroundColor = 'rgba(105, 180, 72, 0.449)'
    divMonkey.style.overflow = 'hidden'
    m0nsoleil.appendChild(divMonkey)
    var imgMonkey = document.createElement('img')
    imgMonkey.id = 'monkey'
    imgMonkey.className = 'monkey'
    imgMonkey.style.position = 'absolute'
    imgMonkey.style.height = '100%'
    imgMonkey.style.left = '-2215px'
    imgMonkey.src = '/static/img/monkey.png'
    divMonkey.appendChild(imgMonkey)
    var imgSonicPalm = document.createElement('img')
    imgSonicPalm.id = 'palmTree'
    imgSonicPalm.className = 'palmTree'
    imgSonicPalm.style.position = 'absolute'
    imgSonicPalm.style.height = '50%'
    imgSonicPalm.style.top = '60px'
    imgSonicPalm.style.left = '5px'
    imgSonicPalm.src = '/static/img/palmTree.png'
    m0nsoleil.appendChild(imgSonicPalm)
    //SONICCCCCCCCC
    var divSonic = document.createElement('div')
    divSonic.id = 'divSonic'
    divSonic.className = 'divsonic'
    divSonic.style.position = 'absolute'
    divSonic.overflow = 'hidden'
    divSonic.style.height = '48px'
    divSonic.style.width = '48px'
    divSonic.style.top = '250px'
    divSonic.style.left = '-10%'
    //divMonkey.style.backgroundColor = 'rgba(105, 180, 72, 0.449)'
    divSonic.style.overflow = 'hidden'
    var imgSonic = document.createElement('img')
    imgSonic.id = 'sonic'
    imgSonic.className = 'sonic'
    imgSonic.style.position = 'relative'
    imgSonic.style.left = '-55px'
    imgSonic.style.top = '-21px'
    imgSonic.src = '/static/img/sonic2.png'
    divSonic.appendChild(imgSonic)
    //document.getElementById('a7ari').parentNode.replaceChild(m0nimg, document.getElementById('a7ari'))
    m0nsoleil.appendChild(divAtari)
    divAtari.appendChild(m0nimg)
    divAtari.appendChild(mon360)
    mon360.appendChild(src360)
    m0nsoleil.appendChild(divSonic)
    var bool1 = false    
    var bool2 = false
    var idB, idW, idMU, idMD, idS, idM
    var sonicBored = function () {
        if (bool1 == false) {
            imgSonic.style.left = '-55px'
            imgSonic.style.top = '-21px'
            bool1 = true
        }
        else {
            if (parseFloat(imgSonic.style.left) > -200) {
                imgSonic.style.left = parseFloat(imgSonic.style.left) - 49 + 'px'
            }
            else bool1 = false
        }
        idB = requestAnimationFrame(sonicBored)
    }

    var sonicWalk = function () {
        if (bool2 == false) {
            imgSonic.style.left = '-50px'
            imgSonic.style.top = '-95px'
            bool2 = true
        }
        else {
            if (parseFloat(imgSonic.style.left) > -200) {
                imgSonic.style.left = parseFloat(imgSonic.style.left) - 49 + 'px'
            }
            else bool2 = false
        }
        idW = requestAnimationFrame(sonicWalk)
    }


    var moveSonicRight = function () {
        if (parseFloat(divSonic.style.left) < 100) divSonic.style.left = parseFloat(divSonic.style.left) + 0.2 + '%'
        else {
            divSonic.style.left = '-10%'
        }
        idM = requestAnimationFrame(moveSonicRight)
    }


    var back = false
    var cpt = 0
    var monkeyDown = function () {
        if (parseFloat(imgMonkey.style.left) <= 0 && !back) {
            imgMonkey.style.left = parseFloat(imgMonkey.style.left) + 105.52 + 'px'
            cpt++
        }
        else {
            back = true
        }
        idMD = requestAnimationFrame(monkeyDown)
    }
    var monkeyUp = function () {
        if (cpt > 0) {
            imgMonkey.style.left = parseFloat(imgMonkey.style.left) - 105.52 + 'px'
            cpt--
        }
        else {
            back = false
        }
        idMU = requestAnimationFrame(monkeyUp)
    }
    var c00rdX = 45
    var c00rdY = 2

    var ctxLune = maLune.getContext('2d')
    var ctx = m0nCanva.getContext('2d')
    //lune
    var gradientLune = ctxLune.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradientLune.addColorStop(0, 'transparent')
    gradientLune.addColorStop(0.9, 'white')
    ctxLune.fillStyle = gradientLune
    //soleil
    var gradient = ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradient.addColorStop(0, 'transparent')
    gradient.addColorStop(0.9, 'yellow')
    ctx.fillStyle = gradient
    $('#moon').hide()

    //snowback control
    let snowBack = document.getElementById('snowB')

    var dessinerM0n = (/*m0ntimestamp*/) => {
        if (c00rdX < 110) {
            c00rdY = Math.cos(c00rdX / 24) * 54
            m0nCanva.style.top = c00rdY * 1.1 + 75 + '%'
            m0nCanva.style.left = c00rdX * 1.3 - 50 + '%'
            ctx.clearRect(0, 0, 40, 40)
            ctxLune.clearRect(0, 0, 40, 40)
            switch (c00rdX) {
            case 45:
                $('#space').animate({
                    backgroundColor: '#0a15db'
                }, 1000)
                cancelAnimationFrame(idW)
                cancelAnimationFrame(idM)
                //clearInterval(idS)
                $('#space').fadeOut(1000)
                break
            case 52:
                $('#moon').fadeOut(1500)
                idMD = requestAnimationFrame(monkeyDown)
                cancelAnimationFrame(idB)
                idW = requestAnimationFrame(sonicWalk)
                idM = requestAnimationFrame(moveSonicRight)
                snowBack.play()
                break
            case 62:
                cancelAnimationFrame(idMD)
                idMU = requestAnimationFrame(monkeyUp)
                break
            case 78:
                cancelAnimationFrame(idMU)
                idMD = requestAnimationFrame(monkeyDown)
                break
            case 90:
                $('#moon').fadeIn(5000)
                cancelAnimationFrame(idMD)
                idMU = requestAnimationFrame(monkeyUp)
                break
            case 95:
                cancelAnimationFrame(idM)
                cancelAnimationFrame(idW)
                idB = requestAnimationFrame(sonicBored)
                $('#space').animate({
                    backgroundColor: '#000000'
                }, 1500)
                $('#space').fadeIn(1500)
                break
            case 100:
                cancelAnimationFrame(idB)
                cancelAnimationFrame(idMU)
                snowBack.pause()
                //idS = setInterval(animate, 500)
                break
            }
            ctx.fillRect(0, 0, 40, 40)
            ctxLune.fillRect(0, 0, 40, 40)
            c00rdX = (c00rdX * 10 + 0.1 * 10) / 10
        }
        else {
            c00rdX = 45
        }
        requestAnimationFrame(dessinerM0n)
    }
    requestAnimationFrame(dessinerM0n)
}
monIntro()