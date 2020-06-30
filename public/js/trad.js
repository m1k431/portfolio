(() => {
    $('#m0ncentrage').fadeIn(1000)
    document.addEventListener('DOMContentLoaded', function () {
        $('.competen').fadeIn()
        $('.complemen').fadeIn()
        //$('.moi').fadeIn()
        $('.flags').fadeIn()
        $('.metier').fadeIn()
        $('.french').fadeIn()
        window.document.getElementById('french').onclick = () => {
            $('.english').hide()
            $('.french').hide()
            $('#competen').css('height', 'auto')
            $('.french').fadeIn()
        }
        window.document.getElementById('english').onclick = () => {
            $('.french').hide()
            $('.english').hide()
            $('.english').fadeIn()
        }
    })
})()