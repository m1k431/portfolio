(() => {
    document.addEventListener('DOMContentLoaded', function () {
        $('.competen').fadeIn()
        $('.complemen').fadeIn()
        $('.moi').fadeIn()
        $('.flags').fadeIn()
        $('.metier').fadeIn()
        $('.english').fadeIn()
        let francais = window.document.getElementsByClassName('french')
        let anglais = window.document.getElementsByClassName('english')
        let espagnol = window.document.getElementsByClassName('spanish')

        window.document.getElementById('french').onclick = () => {
            for (let cpt = 0; francais[cpt]; cpt++) {
            /*francais[cpt].style.display = 'block'
            anglais[cpt].style.display = 'none'
            espagnol[cpt].style.display = 'none'*/
            }
            $('.english').hide()
            $('.spanish').hide()
            $('.french').hide()
            $('.french').toggle('bounce')
        }

        window.document.getElementById('english').onclick = () => {
            for (let cpt = 0; francais[cpt]; cpt++) {
            /*francais[cpt].style.display = 'none'
            anglais[cpt].style.display = 'block'
            espagnol[cpt].style.display = 'none'*/
            }
            $('.french').hide()
            $('.spanish').hide()
            $('.english').hide()
            $('.english').toggle('bounce')
        }

        window.document.getElementById('spanish').onclick = () => {
            for (let cpt = 0; francais[cpt]; cpt++) {
            /*francais[cpt].style.display = 'none'
            anglais[cpt].style.display = 'none'
            espagnol[cpt].style.display = 'block'*/
            }
            $('.french').hide()
            $('.english').hide()
            $('.spanish').hide()
            $('.spanish').toggle('bounce')
        }
    })
})()