module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jquery":true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "extends": [
            "plugin:react-pug/all"
        ]
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "plugins": [
        "react-pug"
    ]
};