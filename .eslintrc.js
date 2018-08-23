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
        "no-console": "off",
        "react/react-in-jsx-scope": "off",
        "no-undef": "off"
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"]
};