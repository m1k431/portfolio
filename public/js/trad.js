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
        $('li').eq(4).css({'background-color':'red', 'color':'black', 'font-weight':'900'})
        $('li').eq(5).css({'background-color':'orange', 'color':'black', 'font-weight':'900'})  
        $('li').eq(6).css({'background-color':'yellow', 'color':'black', 'font-weight':'900'})
        $('li').eq(7).css({'background-color':'green', 'color':'white', 'font-weight':'500'})
        $('li').eq(8).css({'background-color':'blue', 'color':'white', 'font-weight':'500'})
        $('li').eq(9).css({'background-color':'indigo', 'color':'white', 'font-weight':'500'})
        $('li').eq(10).css('background-color','violet')
        $('li').eq(11).css({'background-color':'red', 'color':'black', 'font-weight':'900'})
        $('li').eq(12).css({'background-color':'orange', 'color':'black', 'font-weight':'900'})
        $('li').eq(13).css({'background-color':'yellow', 'color':'black', 'font-weight':'900'})
        $('li').eq(14).css({'background-color':'green', 'color':'white', 'font-weight':'500'})
        $('li').eq(15).css({'background-color':'blue', 'color':'white', 'font-weight':'500'})
        $('li').eq(16).css({'background-color':'indigo', 'color':'white', 'font-weight':'500'})
    })
})()