const path = require('path')
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      comp: path.resolve(process.cwd(), 'app/components'),
      Main: path.resolve(process.cwd(), 'app/components/Main.jsx'),
      Nav: path.resolve(process.cwd(), 'app/components/Nav.jsx'),
      Weather: path.resolve(process.cwd(), 'app/components/Weather.jsx'),
      About: path.resolve(process.cwd(), 'app/components/About.jsx'),
      Examples: path.resolve(process.cwd(), 'app/components/Examples.jsx'),
      WeatherForm: path.resolve(process.cwd(), 'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(process.cwd(), 'app/components/WeatherMessage.jsx'),
      OpenWeatherMap: path.resolve(process.cwd(), 'app/api/OpenWeatherMap.jsx'),
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
      loader: 'babel-loader',
      test: /\.jsx?$/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      exclude: /(node_modules|bower_components)/
    }
  ]
},
devtool: 'cheap-module-eval-source-map'
};
