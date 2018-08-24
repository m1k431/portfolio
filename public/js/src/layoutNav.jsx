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