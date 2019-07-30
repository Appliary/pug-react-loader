
## webpack.config.js
```
  module: {
    rules: [
      {
        test: /\.pug$|\.jade$/,
        use: ['babel-loader', 'pug-react-loader'],
      },
      ...
    ],
  },
```
