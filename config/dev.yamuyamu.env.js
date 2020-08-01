var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_URL: '"https://carpoolear.com.ar"',
  API_URL: '"https://yamuyamu.lk"',
  MAPS_API: '"AIzaSyC8zKyY5L8jTqGVyGhm8WDqu_YOD_N7e-U"',
  FACEBOOK_API: '"260307601947925"',
  TARGET_APP: '"yamuyamu"'
})
