(() => {
    $('#m0ncentrage').fadeIn(1000)
    document.addEventListener('DOMContentLoaded', function () {
        $('.competen').fadeIn()
        $('.complemen').fadeIn()
        $('.moi').fadeIn()
        $('.flags').fadeIn()
        $('.metier').fadeIn()
        $('.english').fadeIn()
        window.document.getElementById('french').onclick = () => {
            $('.english').fadeOut()
            $('.spanish').fadeOut()
            $('.french').fadeOut()
            $('#competen').css('height', 'auto')
            $('.french').fadeIn(1000)
        }
        window.document.getElementById('english').onclick = () => {
            $('.french').fadeOut()
            $('.spanish').fadeOut()
            $('.english').fadeOut()
            $('.english').fadeIn(1000)
        }
        window.document.getElementById('spanish').onclick = () => {
            $('.french').fadeOut()
            $('.english').fadeOut()
            $('.spanish').fadeOut()
            $('#competen').css('height', 'auto')
            $('.spanish').fadeIn(1000)
        }
    })
})()