(() => {
    document.addEventListener('DOMContentLoaded', function () {
        var m4vide0 = window.document.getElementById('jugglejungle')
        var BtnJs0nPl4Y = window.document.getElementById('BtnJs0nPl4Y')
        BtnJs0nPl4Y.innerHTML = 'PLAY'
        BtnJs0nPl4Y.addEventListener('click', () => {
            if (m4vide0.paused) {
                m4vide0.play()
                BtnJs0nPl4Y.innerHTML = 'PAUSE'
            } else {
                m4vide0.pause()
                BtnJs0nPl4Y.innerHTML = 'PLAY'
            }
        })
        $('#m0ncentrage').fadeIn(1000)
        let m0nimg = window.document.createElement('img')
        m0nimg.style.position = 'absolute'
        m0nimg.src = '/static/img/Atari.png'
        m0nimg.style.top = '23%'
        m0nimg.id = 'snowB'
        let m0nIDanimation
        let m0nsoleil = window.document.getElementById('s0leil')
        m0nsoleil.style.position = 'relative'
        m0nsoleil.style.display = 'block'
        m0nsoleil.width = 600
        m0nsoleil.height = 400
        m0nsoleil.style.width = '100%'
        m0nsoleil.style.height = '400px'
        m0nsoleil.id = 's0leil'
        let m0nCiel = document.createElement('canvas')
        m0nCiel.style.position = 'absolute'
        m0nCiel.style.display = 'block'
        m0nCiel.width = 600
        m0nCiel.height = 400
        m0nCiel.style.width = '100%'
        m0nCiel.style.height = '100%'
        m0nCiel.id = 'ci3l'
        m0nsoleil.appendChild(m0nCiel)
        /*
            let m4Star = window.document.createElement('canvas')
            m4Star.style.position = 'absolute'
            m4Star.style.display = 'block'
            m4Star.width = 40
            m4Star.height = 40
            m4Star.style.width = '100%'
            m4Star.style.right = '240px'
            m4Star.style.height = '300px'
            m4Star.id = 'st4r'
            m0nsoleil.appendChild(m4Star)
    */
        /*  var m0nCanva = document.getElementById('c4nv4')*/
        let m0nCanva = document.createElement('canvas')
        m0nCanva.width = 40
        m0nCanva.height = 40
        m0nCanva.style.width = '5%'
        m0nCanva.id = 'c4nv4'
        m0nCanva.style.position = 'relative'
        m0nCanva.style.marginTop = '220px'
        m0nCanva.style.marginLeft = '27%'
        m0nsoleil.appendChild(m0nCanva)
        let m4m3r = document.createElement('canvas')
        m4m3r.width = 600
        m4m3r.height = 400
        m4m3r.style.width = '100%'
        m4m3r.style.height = '400px'
        m4m3r.id = 'm0nC4nvaM3r'
        m4m3r.style.position = 'absolute'
        m4m3r.style.display = 'block'
        m4m3r.style.top = '-25%'
        m0nsoleil.appendChild(m4m3r)
        let m4colline = document.createElement('canvas')
        m4colline.width = 600
        m4colline.height = 400
        m4colline.style.width = '100%'
        m4colline.style.height = '400px'
        m4colline.id = 'm0nC4nvaC0lline'
        m4colline.style.display = 'block'
        m4colline.style.position = 'absolute'
        m4colline.style.top = '-12%'
        m0nsoleil.appendChild(m4colline)
        let m0n4tari = window.document.createElement('img')
        m0n4tari.src = '/static/img/loader.gif'
        m0n4tari.id = 'a7ari'
        m0n4tari.style.position = 'absolute'
        m0nsoleil.appendChild(m0n4tari)
        //meeeeeeeeeeeeer
        let ctx2M4col = m4m3r.getContext('2d')
        let gradientm3r = ctx2M4col.createLinearGradient(0, 0, 0, 600)
        gradientm3r.addColorStop(0, 'darkblue')
        gradientm3r.addColorStop(1, 'darkblue')
        ctx2M4col.fillStyle = gradientm3r
        ctx2M4col.beginPath()
        ctx2M4col.moveTo(0, 600)
        ctx2M4col.lineTo(600, 400)
        ctx2M4col.lineTo(600, 250)
        ctx2M4col.bezierCurveTo(150, 258, 650, 242, 0, 250)
        ctx2M4col.closePath()
        ctx2M4col.stroke()
        ctx2M4col.fill()
        //C00000000000000000000000000000llllllllllllllllOLLLLIIIIIINNNNNNE 1
        let ctxM4col = m4colline.getContext('2d')
        //ctxM4col.clearRect(0,0,600,400)
        let gradientC0lline = ctxM4col.createLinearGradient(0, 0, 0, 600)
        gradientC0lline.addColorStop(0, 'lime')
        gradientC0lline.addColorStop(1, 'black')
        ctxM4col.fillStyle = gradientC0lline
        ctxM4col.beginPath()
        ctxM4col.moveTo(0, 400)
        ctxM4col.lineTo(600, 400)
        ctxM4col.lineTo(600, 260)
        ctxM4col.bezierCurveTo(150, 150, 250, 130, 0, 200)
        ctxM4col.closePath()
        ctxM4col.stroke()
        ctxM4col.fill()
        //CIEEEEELLLLLL
        let c00rdX = 45
        let c00rdY = 2
        let ctxCi3l = m0nCiel.getContext('2d')
        let gradientCi3l = ctxCi3l.createLinearGradient(0, 0, c00rdY * 1.2, c00rdY / 1.8)
        gradientCi3l.addColorStop(0, 'cyan')
        gradientCi3l.addColorStop(1, 'blue')
        ctxCi3l.fillStyle = gradientCi3l
        ctxCi3l.fillRect(0, 0, 600, 300)
        var dessinerM0n = (m0ntimestamp) => {
            if (c00rdX < 105) {
                c00rdY = Math.cos(c00rdX / 24) * 44
                m0nCanva.style.top = c00rdY * 1.1 + '%'
                m0nCanva.style.left = c00rdX * 1.3 - 77 + '%'
                // s00000000000000LLLLLLLLL333333333333311111111111111LLLLLLLLLLLLLLL
                let ctx = m0nCanva.getContext('2d')
                ctx.clearRect(0, 0, 40, 40)
                let gradient = ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
                gradient.addColorStop(0, 'transparent')
                gradient.addColorStop(0.9, 'yellow')
                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, 40, 40)
                /*starrsssssssssssss
                var ctxStar = m0nCanva.getContext('2d')
                ctxStar.clearRect(0, 0, 40, 40)
                var cp1x = 200
                var cp1y = 200
                var cp2x = 200
                var cp2y = 200
                ctxStar.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, 400, 400)
                ctxStar.fillStyle = gradient
                ctxStar.closePath()
                ctxStar.stroke()
                ctxStar.fill()*/
                c00rdX = c00rdX + 0.1
                setTimeout(dessinerM0n, 12)
            } else {
                c00rdX = 45
                setTimeout(dessinerM0n, 12)
            }
        }
        requestAnimationFrame(dessinerM0n)
        window.document.getElementById('a7ari').parentNode.replaceChild(m0nimg, window.document.getElementById('a7ari'))
    })
})()