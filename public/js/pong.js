(() => {
    window.addEventListener('DOMContentLoaded', () => {
        var socket = io('http://mikael.ml/')
        var clickTitre = window.document.getElementById('clickable-element')
        clickTitre.addEventListener('click', (event) => {
            console.log('cliiiick')
            socket.emit('pingEvt', {texte: 'Piiiing !'})
        })
        socket.on('pongEvt', (data) => {
            console.log(data)
        })
    })
})()