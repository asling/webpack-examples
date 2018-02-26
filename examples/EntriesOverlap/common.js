module.exports = function(){
	var obj = {
  "name": "eiotp",
  "version": "0.0.1",
  "description": "A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices",
  "repository": {
    "type": "ssh",
    "url": "ssh://gitolite@openalm.lmera.ericsson.se/dyndviz/eiotp.git"
  },
  "engines": {
    "npm": ">=3",
    "node": ">=5"
  },
  "author": "Ericsson",
  "license": "Ericsson Copy Right",
  "scripts": {
    "analyze:clean": "rimraf stats.json",
    "preanalyze": "npm run analyze:clean",
    "analyze": "node ./internals/scripts/analyze.js",
    "extract-intl": "babel-node --presets latest,stage-0 -- ./internals/scripts/extract-intl.js",
    "npmcheckversion": "node ./internals/scripts/npmcheckversion.js",
    "preinstall": "npm run npmcheckversion",
    "postinstall": "npm run build:dll",
    "prebuild": "npm run build:clean",
    "build": "cross-env NODE_ENV=production webpack --config internals/webpack/webpack.prod.babel.js --color -p --progress",
    "build:clean": "npm run test:clean && rimraf ./build",
    "build:dll": "node ./internals/scripts/dependencies.js",
    "start": "cross-env NODE_ENV=development node server",
    "start:tunnel": "cross-env NODE_ENV=development ENABLE_TUNNEL=true node server",
    "start:production": "npm run build && npm run start:prod",
    "start:prod": "cross-env NODE_ENV=production node server",
    "presetup": "npm i chalk shelljs",
    "setup": "node ./internals/scripts/setup.js",
    "postsetup": "npm run build:dll",
    "clean": "shjs ./internals/scripts/clean.js",
    "clean:all": "npm run analyze:clean && npm run test:clean && npm run build:clean",
    "generate": "plop --plopfile internals/generators/index.js",
    "lint": "npm run lint:js",
    "lint:eslint": "eslint --ignore-path .gitignore --ignore-pattern internals/scripts",
    "lint:js": "npm run lint:eslint -- . ",
    "lint:staged": "lint-staged",
    "pretest": "npm run test:clean && npm run lint",
    "test:clean": "rimraf ./coverage",
    "test": "cross-env NODE_ENV=test jest --coverage",
    "test:watch": "cross-env NODE_ENV=test jest --watchAll",
    "coveralls": "cat ./coverage/lcov.info | coveralls",
    "apiserver": "node ./server/app.js",
    "apiserver:dev": "cross-env NODE_ENV=development supervisor -i client ./server/app.js",
    "dev": "concurrently --kill-others \"npm run start\" \"npm run apiserver\"",
    "prod": "concurrently --kill-others \"npm run start:prod\" \"npm run apiserver\""
  },
  "lint-staged": {
    "*.js": "lint:eslint"
  },
  "pre-commit": "lint:staged",
  "babel": {
    "presets": [
      [
        "latest",
        {
          "es2015": {
            "modules": false
          }
        }
      ],
      "react",
      "stage-0"
    ],
    "env": {
      "production": {
        "only": [
          "app"
        ],
        "plugins": [
          "transform-react-remove-prop-types",
          "transform-react-constant-elements",
          "transform-react-inline-elements"
        ]
      },
      "test": {
        "plugins": [
          "transform-es2015-modules-commonjs",
          "dynamic-import-node"
        ]
      }
    }
  },
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
      "browser": true,
      "node": true,
      "jest": true,
      "es6": true
    },
    "plugins": [
      "redux-saga",
      "react",
      "jsx-a11y"
    ],
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "arrow-parens": [
        "error",
        "always"
      ],
      "arrow-body-style": [
        2,
        "as-needed"
      ],
      "comma-dangle": [
        2,
        "always-multiline"
      ],
      "import/imports-first": 0,
      "import/newline-after-import": 0,
      "import/no-dynamic-require": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-named-as-default": 0,
      "import/no-unresolved": 2,
      "import/prefer-default-export": 0,
      "indent": [
        2,
        2,
        {
          "SwitchCase": 1
        }
      ],
      "jsx-a11y/aria-props": 2,
      "jsx-a11y/heading-has-content": 0,
      "jsx-a11y/href-no-hash": 2,
      "jsx-a11y/label-has-for": 2,
      "jsx-a11y/mouse-events-have-key-events": 2,
      "jsx-a11y/role-has-required-aria-props": 2,
      "jsx-a11y/role-supports-aria-props": 2,
      "max-len": 0,
      "newline-per-chained-call": 0,
      "no-confusing-arrow": 0,
      "no-console": 1,
      "no-use-before-define": 0,
      "prefer-template": 2,
      "class-methods-use-this": 0,
      "react/forbid-prop-types": 0,
      "react/jsx-first-prop-new-line": [
        2,
        "multiline"
      ],
      "react/jsx-filename-extension": 0,
      "react/jsx-no-target-blank": 0,
      "react/require-extension": 0,
      "react/self-closing-comp": 0,
      "redux-saga/no-yield-in-race": 2,
      "redux-saga/yield-effects": 2,
      "require-yield": 0,
      "import/no-webpack-loader-syntax": 0
    },
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "./internals/webpack/webpack.prod.babel.js"
        }
      }
    }
  },
  "dllPlugin": {
    "path": "node_modules/eiotp-dlls",
    "exclude": [
      "chalk",
      "compression",
      "cross-env",
      "express",
      "ip",
      "minimist",
      "sanitize.css"
    ],
    "include": [
      "core-js",
      "lodash",
      "eventsource-polyfill"
    ]
  },
  "jest": {
    "collectCoverageFrom": [
      "app/**/*.{js,jsx}",
      "!app/**/*.test.{js,jsx}",
      "!app/*/RbGenerated*/*.{js,jsx}",
      "!app/app.js",
      "!app/routes.js"
    ],
    "coverageThreshold": {
      "global": {
        "statements": 98,
        "branches": 91,
        "functions": 98,
        "lines": 98
      }
    },
    "moduleDirectories": [
      "node_modules",
      "app"
    ],
    "moduleNameMapper": {
      ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/internals/mocks/cssModule.js",
      ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/internals/mocks/image.js"
    },
    "setupTestFrameworkScriptFile": "<rootDir>/internals/testing/test-bundler.js",
    "testRegex": "tests/.*\\.test\\.js$"
  },
  "dependencies": {
    "babel-polyfill": "6.20.0",
    "chalk": "^1.1.3",
    "child_process": "^1.0.2",
    "compression": "1.6.2",
    "cross-env": "3.1.3",
    "csv": "^1.1.1",
    "d3": "^4.9.1",
    "deck.gl": "4.0.6",
    "echarts": "^3.6.1",
    "echarts-stat": "^1.1.0",
    "elasticsearch": "^13.2.0",
    "express": "^4.14.0",
    "express-promise-router": "^2.0.0",
    "fetch-jsonp": "^1.1.3",
    "fontfaceobserver": "2.0.7",
    "geojson": "^0.4.1",
    "grid-styled": "^2.0.0-1",
    "immutable": "3.8.1",
    "intl": "1.2.5",
    "invariant": "2.2.2",
    "ip": "1.1.4",
    "lodash": "4.17.2",
    "luma.gl": "^3.0.2",
    "material-ui": "^1.0.0-beta.12",
    "material-ui-icons": "^1.0.0-alpha.19",
    "material-ui-v1-pagination": "^1.0.0",
    "minimist": "1.2.0",
    "nedb": "^1.8.0",
    "path": "^0.12.7",
    "pg": "^7.3.0",
    "proptypes": "^1.1.0",
    "rc-slider": "^8.3.1",
    "react": "^15.6.1",
    "react-bootstrap": "^0.31.0",
    "react-dom": "15.6.1",
    "react-helmet": "3.2.2",
    "react-intl": "2.1.5",
    "react-map-gl": "^3.0.4",
    "react-redux": "4.4.6",
    "react-router": "3.0.0",
    "react-router-redux": "4.0.6",
    "react-router-scroll": "0.4.1",
    "react-tap-event-plugin": "^2.0.1",
    "react-visjs-timeline": "^1.3.4-beta",
    "redux": "3.6.0",
    "redux-immutable": "3.0.8",
    "redux-saga": "0.14.0",
    "reselect": "2.5.4",
    "sanitize.css": "4.1.0",
    "styled-components": "1.1.2",
    "vis": "^4.20.1",
    "warning": "3.0.0",
    "whatwg-fetch": "2.0.1",
    "ws": "^3.1.0",
    "xlsx": "^0.10.6"
  },
  "devDependencies": {
    "babel-cli": "6.18.0",
    "babel-core": "6.21.0",
    "babel-eslint": "7.1.1",
    "babel-loader": "6.2.10",
    "babel-plugin-dynamic-import-node": "1.0.0",
    "babel-plugin-react-intl": "2.2.0",
    "babel-plugin-react-transform": "2.0.2",
    "babel-plugin-transform-es2015-modules-commonjs": "6.18.0",
    "babel-plugin-transform-react-constant-elements": "6.9.1",
    "babel-plugin-transform-react-inline-elements": "6.8.0",
    "babel-plugin-transform-react-remove-prop-types": "0.2.11",
    "babel-preset-latest": "6.16.0",
    "babel-preset-react": "6.16.0",
    "babel-preset-react-hmre": "1.1.1",
    "babel-preset-stage-0": "6.16.0",
    "cheerio": "0.22.0",
    "circular-dependency-plugin": "2.0.0",
    "concurrently": "^3.5.0",
    "coveralls": "2.11.15",
    "css-loader": "0.26.1",
    "enzyme": "2.6.0",
    "eslint": "3.11.1",
    "eslint-config-airbnb": "13.0.0",
    "eslint-config-airbnb-base": "10.0.1",
    "eslint-import-resolver-webpack": "0.8.0",
    "eslint-plugin-import": "2.2.0",
    "eslint-plugin-jsx-a11y": "2.2.3",
    "eslint-plugin-react": "6.7.1",
    "eslint-plugin-redux-saga": "0.1.5",
    "eventsource-polyfill": "0.9.6",
    "exports-loader": "0.6.3",
    "file-loader": "0.9.0",
    "html-loader": "0.4.4",
    "html-webpack-plugin": "2.24.1",
    "ify-loader": "^1.0.4",
    "image-webpack-loader": "2.0.0",
    "imports-loader": "0.6.5",
    "jest-cli": "18.0.0",
    "lint-staged": "3.2.1",
    "ngrok": "2.2.4",
    "node-plop": "0.5.4",
    "node-sass": "^4.5.3",
    "null-loader": "0.1.1",
    "offline-plugin": "4.5.2",
    "plop": "1.7.3",
    "pre-commit": "1.1.3",
    "react-addons-test-utils": "15.4.1",
    "rimraf": "2.5.4",
    "sass-loader": "^6.0.6",
    "shelljs": "^0.7.8",
    "sinon": "2.0.0-pre",
    "style-loader": "0.13.1",
    "transform-loader": "^0.2.4",
    "uglifyjs-webpack-plugin": "^0.4.6",
    "url-loader": "0.5.7",
    "webpack": "^2.4.0",
    "webpack-dev-middleware": "1.9.0",
    "webpack-hot-middleware": "2.15.0",
    "webworkify-webpack": "^2.0.5"
  },
  "optionalDependencies": {
    "fsevents": "*"
  }
};
	
	return obj;
}