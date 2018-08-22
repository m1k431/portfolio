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
        class LikeButton extends React.Component {
            constructor(props) {
              super(props)
              this.state = { liked: false }
            }
            render() {
              if (this.state.liked) {
                return 'This game is under contruction. Come back soon'
              }
              return (
                <button onClick={() => this.setState({ liked: true }) }>
                  Play
                </button>
              )
            }
          }
          ReactDOM.render(<LikeButton />, document.querySelector('#play_button_container'))
    })
})()