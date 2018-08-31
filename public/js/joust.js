'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    window.addEventListener('DOMContentLoaded', function () {
        //reactJS test zone
        var PlayButton = function (_React$Component) {
            _inherits(PlayButton, _React$Component);

            function PlayButton(props) {
                _classCallCheck(this, PlayButton);

                var _this = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, props));

                _this.state = { liked: false };
                return _this;
            }

            _createClass(PlayButton, [{
                key: 'render',
                value: function render() {
                    var _this2 = this;

                    if (this.state.liked) {
                        return React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'h1',
                                { id: 'clickable-element' },
                                'This game is under contruction.'
                            ),
                            React.createElement(
                                'h2',
                                null,
                                'Come back soon'
                            )
                        );
                    }
                    return React.createElement(
                        'button',
                        { className: 'css3but', onClick: function onClick() {
                                return _this2.setState({ liked: true });
                            } },
                        'Play'
                    );
                }
            }]);

            return PlayButton;
        }(React.Component);

        var AccueilJoust = function (_React$Component2) {
            _inherits(AccueilJoust, _React$Component2);

            function AccueilJoust() {
                _classCallCheck(this, AccueilJoust);

                return _possibleConstructorReturn(this, (AccueilJoust.__proto__ || Object.getPrototypeOf(AccueilJoust)).apply(this, arguments));
            }

            _createClass(AccueilJoust, [{
                key: 'render',
                value: function render() {
                    return React.createElement(
                        'div',
                        { className: 'competen' },
                        React.createElement(
                            'h1',
                            { id: 'clickable-element' },
                            'Realtime Multiplayer Game'
                        ),
                        React.createElement(
                            'form',
                            { id: 'adm1n' },
                            React.createElement(
                                'label',
                                { className: 'pseudo' },
                                'Enter your Name'
                            ),
                            React.createElement('input', { className: 'pseudo', id: 'pseudo', type: 'text', name: 'pseudo' })
                        ),
                        React.createElement(PlayButton, null)
                    );
                }
            }]);

            return AccueilJoust;
        }(React.Component);

        ReactDOM.render(React.createElement(AccueilJoust, null), document.querySelector('#m0ncentrageAdmin'));
        //JAVASCRIPT
        //$('#m0ncentrageAdmin').fadeIn(1000)
        var socket = io('http://mikael.ml/');
        var clickTitre = window.document.getElementById('clickable-element');
        clickTitre.addEventListener('click', function () {
            console.log('cliiiick');
            socket.emit('pingEvt', { texte: 'Piiiing !' });
        });
        socket.on('pongEvt', function (data) {
            console.log(data);
        });
    });
})();