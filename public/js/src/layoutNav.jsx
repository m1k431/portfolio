(() => {
    window.addEventListener('DOMContentLoaded', () => {
        function FormattedDate(props) {
            return <h1 className="myclock">{props.date.toLocaleTimeString()}</h1>
        }
        class Clock extends React.Component {
            constructor(props) {
                super(props)
                this.state = {date: new Date()}
            }
            componentDidMount() {
                this.timerID = setInterval(
                    () => this.tick(),
                    1000
                )
            }
            componentWillUnmount() {
                clearInterval(this.timerID)
            }
            tick() {
                this.setState({
                    date: new Date()
                })
            }
            render() {
                return (
                    <FormattedDate date={this.state.date} />
                )
            }
        }
        function App() {
            return (
                <Clock />
            )
        }
        ReactDOM.render(<App />, document.getElementById('myclock'))
    })
    var audioCtx = new AudioContext()
    var selectSound = document.createElement('audio')
    selectSound.src = '/static/sound/select.mp3'
    selectSound.setAttribute('preload', 'auto')
    selectSound.setAttribute('controls', 'none')
    selectSound.style.display = 'none'
    selectSound.id = 'select'
    document.body.appendChild(selectSound)
    var audioSelect = document.querySelector('#select')
    var sourceSelect = audioCtx.createMediaElementSource(audioSelect)
    sourceSelect.connect(audioCtx.destination)
    
    const lien = window.document.getElementsByClassName('css3button')
    var i = lien.length
    i--
    while (i >= 0) {
        lien[i].addEventListener('click', playSelect, true)
        i--
    }
    function playSelect() {
        audioSelect.play()
    }
})()