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
        //reactJS test zone
        const e = React.createElement
        class submitButton extends React.Component {
            constructor(props) {
                super(props)
                this.state = { clicked: false }
            }
            render() {
                if (this.state.clicked) {
                    return 'This game is under contruction. Come back soon'
                }
                return e(
                    'button',
                    { onClick: () => this.setState({ clicked: true})},
                    'Play'
                )
            }
        }

        const domContainer = document.querySelector('#play_button_container')
        ReactDOM.render(e(submitButton), domContainer)
    })
})()