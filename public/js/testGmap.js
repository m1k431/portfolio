(() => {
    let redBg = window.document.getElementsByClassName('redBg')
    let cpt = redBg.length - 1
    while (cpt >= 0) {
        redBg[cpt].setAttribute('backgroundColor', 'red')
        cpt--
    }
})()

let clickme = window.getElementById('id')
clickme.addEventListener('click', () => {
    alert(window.innerWidth)
})