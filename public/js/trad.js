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
            $('.english').fadeOut()
            $('.spanish').fadeOut()
            $('.french').fadeOut()
            $('.french').show(1000)
        }
        window.document.getElementById('english').onclick = () => {
            $('.french').fadeOut()
            $('.spanish').fadeOut()
            $('.english').fadeOut()
            $('.english').show(1000)
        }
        window.document.getElementById('spanish').onclick = () => {
            $('.french').fadeOut()
            $('.english').fadeOut()
            $('.spanish').fadeOut()
            $('.spanish').show(1000)
        }
    })
})()