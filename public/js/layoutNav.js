"use strict";

function tick() {
    var element = React.createElement(
        "h1",
        { className: "myclock" },
        new Date().toLocaleTimeString()
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('myclock'));
}

setInterval(tick, 1000);