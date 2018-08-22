var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  window.addEventListener('DOMContentLoaded', function () {
    var socket = io('http://mikael.ml/');
    var clickTitre = window.document.getElementById('clickable-element');
    clickTitre.addEventListener('click', function (event) {
      console.log('cliiiick');
      socket.emit('pingEvt', { texte: 'Piiiing !' });
    });
    socket.on('pongEvt', function (data) {
      console.log(data);
    });
    //reactJS test zone

    var LikeButton = function (_React$Component) {
      _inherits(LikeButton, _React$Component);

      function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this.state = { liked: false };
        return _this;
      }

      _createClass(LikeButton, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          if (this.state.liked) {
            return React.createElement(
              'h1',
              null,
              'This game is under contruction. Come back soon'
            );
          }
          return React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.setState({ liked: true });
              } },
            'Play'
          );
        }
      }]);

      return LikeButton;
    }(React.Component);

    ReactDOM.render(React.createElement(LikeButton, null), document.querySelector('#play_button_container'));
  });
})();