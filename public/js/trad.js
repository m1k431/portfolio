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
            $('.english').hide()
            $('.spanish').hide()
            $('.french').hide()
            $('.french').toggle('bounce')
        }
        window.document.getElementById('english').onclick = () => {
            $('.french').hide()
            $('.spanish').hide()
            $('.english').hide()
            $('.english').toggle('bounce')
        }
        window.document.getElementById('spanish').onclick = () => {
            $('.french').hide()
            $('.english').hide()
            $('.spanish').hide()
            $('.spanish').toggle('bounce')
        }
    })
})()