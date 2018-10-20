'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {


    $(document).ready(function () {
        $('.js-scrollTo').on('click', function () {
            // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate({ scrollTop: $(page).offset().top - 60 }, speed); // Go
            return false;
        });
    });

    var soundSelect = '/static/sound/select.mp3';

    var lien = window.document.getElementsByClassName('css3button');
    var i = lien.length;
    i--;
    /*
    while (i >= 0) {
        lien[i].addEventListener('click', play(soundSelect), true);
        i--;
    }
    */
    lien[0].onclick = function () {
        //window.scroll(0,0)
        $('#intro').removeClass('css3button');
        $('#intro').addClass('css3buttonRed');
        $('#resume').removeClass('css3buttonRed');
        $('#resume').addClass('css3button');
        $('#admin').removeClass('css3buttonRed');
        $('#admin').addClass('css3button');
        /*$('#INDEX').slideDown()
        $('#CV').slideUp()
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()*/
    };
    lien[1].onclick = function () {
        $('#intro').removeClass('css3buttonRed');
        $('#intro').addClass('css3button');
        $('#resume').removeClass('css3button');
        $('#resume').addClass('css3buttonRed');
        $('#admin').removeClass('css3buttonRed');
        $('#admin').addClass('css3button');
        /*$('#CV').slideDown()
        $('#INDEX').slideUp()
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()*/
    };
    lien[2].onclick = function () {
        $('#intro').removeClass('css3buttonRed');
        $('#intro').addClass('css3button');
        $('#resume').removeClass('css3buttonRed');
        $('#resume').addClass('css3button');
        $('#admin').removeClass('css3button');
        $('#admin').addClass('css3buttonRed');
        /*$('#JOUST').slideDown()
        $('#ADM1N').slideUp()
        $('#joust').removeClass('css3button')
        $('#joust').addClass('css3buttonRed')
        $('#INDEX').slideUp()
        $('#CV').slideUp()*/
    };
    /*
    lien[3].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#admin').removeClass('css3button')
        $('#admin').addClass('css3buttonRed')
        $('#ADM1N').slideDown()
        $('#INDEX').slideUp()
        $('#CV').slideUp()
        $('#JOUST').slideUp()
    }
    */
    function playSelect() {
        getDataSelect();
        sourceSelect.start(0);
    }

    window.addEventListener('DOMContentLoaded', function () {
        function FormattedDate(props) {
            return React.createElement(
                'h1',
                { className: 'myclock' },
                props.date.toLocaleTimeString()
            );
        }

        var Clock = function (_React$Component) {
            _inherits(Clock, _React$Component);

            function Clock(props) {
                _classCallCheck(this, Clock);

                var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

                _this.state = { date: new Date() };
                return _this;
            }

            _createClass(Clock, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    var _this2 = this;

                    this.timerID = setInterval(function () {
                        return _this2.tick();
                    }, 1000);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    clearInterval(this.timerID);
                }
            }, {
                key: 'tick',
                value: function tick() {
                    this.setState({
                        date: new Date()
                    });
                }
            }, {
                key: 'render',
                value: function render() {
                    return React.createElement(FormattedDate, { date: this.state.date });
                }
            }]);

            return Clock;
        }(React.Component);

        function App() {
            return React.createElement(Clock, null);
        }
        ReactDOM.render(React.createElement(App, null), document.getElementById('myclock'));
    });
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {


    $(document).ready(function () {
        $('.js-scrollTo').on('click', function () {
            // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate({ scrollTop: $(page).offset().top - 60 }, speed); // Go
            return false;
        });
    });

    var soundSelect = '/static/sound/select.mp3';

    var lien = window.document.getElementsByClassName('css3button');
    var i = lien.length;
    i--;
    /*
    while (i >= 0) {
        lien[i].addEventListener('click', play(soundSelect), true);
        i--;
    }
    */
    lien[0].onclick = function () {
        //window.scroll(0,0)
        $('#intro').removeClass('css3button');
        $('#intro').addClass('css3buttonRed');
        $('#resume').removeClass('css3buttonRed');
        $('#resume').addClass('css3button');
        $('#admin').removeClass('css3buttonRed');
        $('#admin').addClass('css3button');
        /*$('#INDEX').slideDown()
        $('#CV').slideUp()
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()*/
    };
    lien[1].onclick = function () {
        $('#intro').removeClass('css3buttonRed');
        $('#intro').addClass('css3button');
        $('#resume').removeClass('css3button');
        $('#resume').addClass('css3buttonRed');
        $('#admin').removeClass('css3buttonRed');
        $('#admin').addClass('css3button');
        /*$('#CV').slideDown()
        $('#INDEX').slideUp()
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()*/
    };
    lien[2].onclick = function () {
        $('#intro').removeClass('css3buttonRed');
        $('#intro').addClass('css3button');
        $('#resume').removeClass('css3buttonRed');
        $('#resume').addClass('css3button');
        $('#admin').removeClass('css3button');
        $('#admin').addClass('css3buttonRed');
        /*$('#JOUST').slideDown()
        $('#ADM1N').slideUp()
        $('#joust').removeClass('css3button')
        $('#joust').addClass('css3buttonRed')
        $('#INDEX').slideUp()
        $('#CV').slideUp()*/
    };
    /*
    lien[3].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#admin').removeClass('css3button')
        $('#admin').addClass('css3buttonRed')
        $('#ADM1N').slideDown()
        $('#INDEX').slideUp()
        $('#CV').slideUp()
        $('#JOUST').slideUp()
    }
    */
    function playSelect() {
        getDataSelect();
        sourceSelect.start(0);
    }

    window.addEventListener('DOMContentLoaded', function () {
        function FormattedDate(props) {
            return React.createElement(
                'h1',
                { className: 'myclock' },
                props.date.toLocaleTimeString()
            );
        }

        var Clock = function (_React$Component) {
            _inherits(Clock, _React$Component);

            function Clock(props) {
                _classCallCheck(this, Clock);

                var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

                _this.state = { date: new Date() };
                return _this;
            }

            _createClass(Clock, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    var _this2 = this;

                    this.timerID = setInterval(function () {
                        return _this2.tick();
                    }, 1000);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    clearInterval(this.timerID);
                }
            }, {
                key: 'tick',
                value: function tick() {
                    this.setState({
                        date: new Date()
                    });
                }
            }, {
                key: 'render',
                value: function render() {
                    return React.createElement(FormattedDate, { date: this.state.date });
                }
            }]);

            return Clock;
        }(React.Component);

        function App() {
            return React.createElement(Clock, null);
        }
        ReactDOM.render(React.createElement(App, null), document.getElementById('myclock'));
    });
})();