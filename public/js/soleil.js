(() => {
    document.addEventListener('DOMContentLoaded', function () {
        var m4vide0 = window.document.getElementById('jugglejungle')
        var BtnJs0nPl4Y = window.document.getElementById('BtnJs0nPl4Y')
        BtnJs0nPl4Y.innerHTML = 'Play'
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
        $('#jugglejungle').fadeIn(1000)
        //ATARIIIIIIIIII
        let m0nimg = window.document.createElement('img')
        m0nimg.style.position = 'absolute'
        m0nimg.src = '/static/img/Atari.png'
        m0nimg.style.top = '36%'
        m0nimg.style.right = '6%'
        m0nimg.id = 'snowB'
        //DIV SOLEILLLLLLLLL
        let m0nsoleil = window.document.getElementById('s0leil')
        m0nsoleil.style.position = 'relative'
        m0nsoleil.style.display = 'block'
        m0nsoleil.width = 600
        m0nsoleil.height = 400
        m0nsoleil.style.top = '2%'
        m0nsoleil.style.height = '400px'
        m0nsoleil.id = 's0leil'
        //Cielllllllllllll
        let m0nCiel = document.createElement('canvas')
        m0nCiel.style.position = 'absolute'
        m0nCiel.style.display = 'block'
        m0nCiel.width = 600
        m0nCiel.height = 400
        m0nCiel.style.width = '100%'
        m0nCiel.style.height = '100%'
        m0nCiel.id = 'ci3l'
        m0nsoleil.appendChild(m0nCiel)
        let m0nCanva = document.createElement('canvas')
        m0nCanva.width = 40
        m0nCanva.height = 40
        m0nCanva.style.width = '5%'
        m0nCanva.id = 'c4nv4'
        m0nCanva.style.position = 'absolute'
        m0nsoleil.appendChild(m0nCanva)
        let myStars = document.createElement('canvas')
        myStars.width = 600
        myStars.height = 400
        myStars.style.width = '100%'
        myStars.style.height = '100%'
        myStars.id = 'space'
        myStars.style.position = 'absolute'
        myStars.style.backgroundColor = '#000000'
        myStars.style.borderRadius = '28px'
        myStars.style.top = '0px'
        myStars.style.left = '0px'
        myStars.style.display = 'none'
        m0nsoleil.appendChild(myStars)
        let maLune = document.createElement('canvas')
        maLune.width = 40
        maLune.height = 40
        maLune.style.width = '5%'
        maLune.id = 'moon'
        maLune.style.position = 'absolute'
        maLune.style.marginTop = '50px'
        maLune.style.marginLeft = '130px'
        maLune.style.display = 'none'
        m0nsoleil.appendChild(maLune)
        let m4m3r = document.createElement('canvas')
        m4m3r.width = 600
        m4m3r.height = 400
        m4m3r.style.width = '100%'
        m4m3r.style.height = '100%'
        m4m3r.id = 'm0nC4nvaM3r'
        m4m3r.style.position = 'absolute'
        m4m3r.style.display = 'block'
        m0nsoleil.appendChild(m4m3r)
        let m4colline = document.createElement('canvas')
        m4colline.width = 600
        m4colline.height = 400
        m4colline.style.width = '100%'
        m4colline.style.height = '100%'
        m4colline.id = 'm0nC4nvaC0lline'
        m4colline.style.display = 'block'
        m4colline.style.position = 'absolute'
        m0nsoleil.appendChild(m4colline)
        let m0n4tari = window.document.createElement('img')
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
        ctx2M4col.lineTo(600, 170)
        ctx2M4col.bezierCurveTo(170, 178, 650, 172, 0, 170)
        ctx2M4col.closePath()
        ctx2M4col.stroke()
        ctx2M4col.fill()
        //C00000000000000000000000000000llllllllllllllllOLLLLIIIIIINNNNNNE 1
        let ctxM4col = m4colline.getContext('2d')
        let gradientC0lline = ctxM4col.createLinearGradient(0, 0, 0, 600)
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
        var divSprite = window.document.createElement('div')
        divSprite.id = 'divSprite'
        divSprite.className = 'divsprite'
        divSprite.style.position = 'absolute'
        divSprite.style.height = '140px'
        divSprite.style.width = '95px'
        divSprite.style.top = '82px'
        divSprite.style.left = '59.55px'
        //divSprite.style.backgroundColor = 'rgba(105, 180, 72, 0.449)'
        divSprite.style.overflow = 'hidden'
        m0nsoleil.appendChild(divSprite)
        var imgMonkey = window.document.createElement('img')
        imgMonkey.id = 'monkey'
        imgMonkey.className = 'monkey'
        imgMonkey.style.position = 'absolute'
        imgMonkey.style.height = '100%'
        imgMonkey.style.left = '-2215px'
        imgMonkey.style.top = '0%'
        imgMonkey.src = '/static/img/monkey.png'
        divSprite.appendChild(imgMonkey)
        var imgSonicPalm = window.document.createElement('img')
        imgSonicPalm.id = 'palmTree'
        imgSonicPalm.className = 'palmTree'
        imgSonicPalm.style.position = 'absolute'
        imgSonicPalm.style.height = '50%'
        imgSonicPalm.style.top = '60px'
        imgSonicPalm.style.left = '5px'
        imgSonicPalm.src = '/static/img/palmTree.png'
        m0nsoleil.appendChild(imgSonicPalm)
        var back = false
        var cpt = 0
        var monkeyDown = function() {
            if (parseFloat(imgMonkey.style.left) <= 0 && !back) {
                imgMonkey.style.left = parseFloat(imgMonkey.style.left) + 105.52 + 'px'
                cpt++
                setTimeout(monkeyDown, 60)
            }
            else {
                back = true
            }
        }
        var monkeyUp = function() {
            if (cpt > 0) {
                imgMonkey.style.left = parseFloat(imgMonkey.style.left) - 105.52 + 'px'
                cpt--
                setTimeout(monkeyUp, 60)
            }
            else {
                back = false
            }
        }
        let c00rdX = 45
        let c00rdY = 2
        //TESSSSSSSST ZOOOOOOOONE code from https://codepen.io/WillemCrnlssn/pen/JgFGs
        var context
        var screenH
        var screenW
        var stars = []
        var numStars = 2000
    

        // Calculate the screen size
        screenH = 400
        screenW = 600
            
        // Get the myStars
        myStars = $('#space')
            
        // Fill out the canvas
        myStars.attr('height', screenH)
        myStars.attr('width', screenW)
        context = myStars[0].getContext('2d')
            
        // Create all the stars
        for(var i = 0; i < numStars; i++) {
            var x = Math.round(Math.random() * screenW)
            var y = Math.round(Math.random() * screenH)
            var length = 1 + Math.random() * 2
            var opacity = Math.random()
                
            // Create a new star and draw
            var star = new Star(x, y, length, opacity)
                
            // Add the the stars array
            stars.push(star)
        }
        var id2         
        /**
         * Animate the canvas
         */
        function animate() {
            context.clearRect(0, 0, screenW, screenH)
            $.each(stars, function() {
                this.draw(context)
            })
            id2 = setTimeout(animate,1/100000)
        }
        /**
         * Star
         * 
         * @param int x
         * @param int y
         * @param int length
         * @param opacity
         */
        function Star(x, y, length, opacity) {
            this.x = parseInt(x)
            this.y = parseInt(y)
            this.length = parseInt(length)
            this.opacity = opacity
            this.factor = 1
            this.increment = Math.random() * .03
        }
        
        /**
         * Draw a star
         * 
         * This function draws a start.
         * You need to give the contaxt as a parameter 
         * 
         * @param context
         */
        Star.prototype.draw = function() {
            context.rotate((Math.PI * 1 / 10))
            
            // Save the context
            context.save()
            
            // move into the middle of the canvas, just to make room
            context.translate(this.x, this.y)
            
            // Change the opacity
            if(this.opacity > 1) {
                this.factor = -1
            }
            else if(this.opacity <= 0) {
                this.factor = 1
                
                this.x = Math.round(Math.random() * screenW)
                this.y = Math.round(Math.random() * screenH)
            }
                
            this.opacity += this.increment * this.factor
            
            context.beginPath()
            for (var i = 5; i--;) {
                context.lineTo(0, this.length)
                context.translate(0, this.length)
                context.rotate((Math.PI * 2 / 10))
                context.lineTo(0, - this.length)
                context.translate(0, - this.length)
                context.rotate(-(Math.PI * 6 / 10))
            }
            context.lineTo(0, this.length)
            context.closePath()
            context.fillStyle = 'rgba(255, 255, 200, ' + this.opacity + ')'
            context.shadowBlur = 5
            context.shadowColor = '#ffff33'
            context.fill()
            
            context.restore()
        }
        //ENDDDDDDD TESTTTTTTTT ZOOOOOOOONE

        let ctxLune = maLune.getContext('2d')
        let gradientLune = ctxLune.createRadialGradient(16, 16, 16, 16, 16, 14)
        gradientLune.addColorStop(0, 'transparent')
        gradientLune.addColorStop(0.9, 'white')
        ctxLune.fillStyle = gradientLune
        ctxLune.fillRect(0, 0, 40, 40)
        
        $('#s0leil' ).animate({
            backgroundColor: '#0a15db'
        }, 1000 )
        var dessinerM0n = (/*m0ntimestamp*/) => {
            if (c00rdX < 101) {
                c00rdY = Math.cos(c00rdX / 24) * 54
                m0nCanva.style.top = c00rdY * 1.1 + 75 + '%'
                m0nCanva.style.left = c00rdX * 1.3 - 50 + '%'
                let ctx = m0nCanva.getContext('2d')
                ctx.clearRect(0, 0, 40, 40)
                switch(c00rdX) {
                case 48:
                    clearTimeout(id2)
                    $('#s0leil').animate({
                        backgroundColor: '#0a15db'
                    }, 3000 )
                    $('#space').fadeOut(1000)
                    $('#moon').fadeOut(2000)
                    break
                case 52:
                    requestAnimationFrame(monkeyDown)
                    break
                case 67:
                    requestAnimationFrame(monkeyUp)
                    break
                case 83:
                    requestAnimationFrame(monkeyDown)
                    break
                case 95:
                    $('#s0leil').animate({
                        backgroundColor: '#000114'
                    }, 2000 )
                    requestAnimationFrame(monkeyUp)
                    break
                case 100:
                    $('#moon').fadeIn(3000)
                    $('#space').fadeIn(3000)
                    requestAnimationFrame(animate)
                    break
                }
                let gradient = ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
                gradient.addColorStop(0, 'transparent')
                gradient.addColorStop(0.9, 'yellow')
                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, 40, 40)
                c00rdX = (c00rdX * 10 + 0.1 * 10) / 10
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