function tick() {
    const element = (
        <h1>{new Date().toLocaleTimeString()}</h1>
    )
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('myclock'))
}
  
setInterval(tick, 1000)
  