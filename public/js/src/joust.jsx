(() => {
    window.addEventListener('DOMContentLoaded', () => {
        //reactJS test zone
        class PlayButton extends React.Component {
            constructor(props) {
                super(props)
                this.state = { liked: false }
            }
            render() {
                if (this.state.liked) {
                    return (
                        <div>
                            <h1 id='clickable-element'>This game is under contruction.</h1>
                            <h2>Come back soon</h2>
                        </div>
                    )
                }
                return (
                    <button className="css3but" onClick={() => this.setState({ liked: true }) }>
                Play
                    </button>
                )
            }
        }


        class AccueilJoust extends React.Component {
            render() {
                return (
                    <div className='competen'>
                        <h1 id="clickable-element">Realtime Multiplayer Game</h1>
                        <form id="adm1n">
                            <label className="pseudo">Enter your Name</label>
                            <input className="pseudo" id="pseudo" type="text" name="pseudo"></input>
                        </form>
                        <PlayButton />
                    </div>
                )
            }
        }
        ReactDOM.render(<AccueilJoust />, document.querySelector('#m0ncentrageAdmin'))
        //JAVASCRIPT
        //$('#m0ncentrageAdmin').fadeIn(1000)
        var socket = io('http://mikael.ml/')
        var clickTitre = window.document.getElementById('clickable-element')
        clickTitre.addEventListener('click', () => {
            console.log('cliiiick')
            socket.emit('pingEvt', {texte: 'Piiiing !'})
        })
        socket.on('pongEvt', (data) => {
            console.log(data)
        })
        
    })
})()