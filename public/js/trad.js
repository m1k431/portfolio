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
            $('.english').hide()
            $('.spanish').hide()
            $('.french').hide()
            $('#competen').css('height', 'auto')
            $('.french').fadeIn()
        }
        window.document.getElementById('english').onclick = () => {
            $('.french').hide()
            $('.spanish').hide()
            $('.english').hide()
            $('.english').fadeIn()
        }
        window.document.getElementById('spanish').onclick = () => {
            $('.french').hide()
            $('.english').hide()
            $('.spanish').hide()
            $('#competen').css('height', 'auto')
            $('.spanish').fadeIn()
        }
    })
})()