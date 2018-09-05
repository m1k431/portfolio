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
        console.log(i)
        i--
    }
    lien[0].onclick = () => {
        $('#intro').removeClass('css3button')
        $('#intro').addClass('css3buttonRed')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#admin').removeClass('css3buttonRed')
        $('#admin').addClass('css3button')
        $('#INDEX').slideDown()
        $('#CV').slideUp()
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()
    }
    lien[1].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3button')
        $('#resume').addClass('css3buttonRed')
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#admin').removeClass('css3buttonRed')
        $('#admin').addClass('css3button')
        $('#INDEX').slideUp()
        $('#CV').slideDown()
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()
    }
    lien[2].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#joust').removeClass('css3button')
        $('#joust').addClass('css3buttonRed')
        $('#admin').removeClass('css3buttonRed')
        $('#admin').addClass('css3button')
        $('#INDEX').slideUp()
        $('#CV').slideUp()
        $('#JOUST').slideDown()
        $('#ADM1N').slideUp()
    }
    lien[3].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#admin').removeClass('css3button')
        $('#admin').addClass('css3buttonRed')
        $('#INDEX').slideUp()
        $('#CV').slideUp()
        $('#JOUST').slideUp()
        $('#ADM1N').slideDown()
    }
    function playSelect() {
        audioSelect.play()
    }
})()