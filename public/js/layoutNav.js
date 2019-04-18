$(document).ready(function () {
    $('.js-scrollTo').on('click', function () {
        var page = $(this).attr('href').substring(17, 25) //ancre cible
        var speed = 750 // Durée de l'animation (en ms)
        $('html, body').animate({ scrollTop: $(page).offset().top - 60 }, speed) // Go
        return false
    })
})

var soundSelect = '/static/sound/select.mp3'

var lien = window.document.getElementsByClassName('css3button')
var i = lien.length
i--
/*
while (i >= 0) {
    lien[i].addEventListener('click', play(soundSelect), true);
    i--;
}
*/
lien[0].onclick = function () {
    //window.scroll(0,0)
    $('#intro').removeClass('css3button')
    $('#intro').addClass('css3buttonRed')
    $('#resume').removeClass('css3buttonRed')
    $('#resume').addClass('css3button')
    $('#admin').removeClass('css3buttonRed')
    $('#admin').addClass('css3button')
}
lien[1].onclick = function () {
    $('#intro').removeClass('css3buttonRed')
    $('#intro').addClass('css3button')
    $('#resume').removeClass('css3button')
    $('#resume').addClass('css3buttonRed')
    $('#admin').removeClass('css3buttonRed')
    $('#admin').addClass('css3button')
}
lien[2].onclick = function () {
    $('#intro').removeClass('css3buttonRed')
    $('#intro').addClass('css3button')
    $('#resume').removeClass('css3buttonRed')
    $('#resume').addClass('css3button')
    $('#admin').removeClass('css3button')
    $('#admin').addClass('css3buttonRed')
}
/*
lien[3].onclick = () => {
    $('#intro').removeClass('css3buttonRed')
    $('#intro').addClass('css3button')
    $('#resume').removeClass('css3buttonRed')
    $('#resume').addClass('css3button')
    $('#joust').removeClass('css3buttonRed')
    $('#joust').addClass('css3button')
    $('#admin').removeClass('css3button')
    $('#admin').addClass('css3buttonRed')
}
*/
function playSelect() {
    getDataSelect()
    sourceSelect.start(0)
}