## .babelrc
```
  "plugins": [
    "transform-react-pug",
    "transform-react-jsx"
  ],
```
## webpack.config.js
```
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['babel-loader', 'pug-react-loader'],
      },
      ...
    ],
  },
```
