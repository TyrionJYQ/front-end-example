const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


const webpackConfigs = [require('./config/webpack.config.sitea.js'), require('./config/webpack.config.siteb.js')]
const compilers = webpackConfigs.map(config => Webpack(config))
const devServerOptions = webpackConfigs.map(config=> ({
  ...config.devServer, open: false 
}))

const servers = devServerOptions.map((option,index) => {
 return  new WebpackDevServer(option, compilers[index]);
})
servers.forEach((server,index) => {
  server.startCallback(() => {
    console.log(`Successfully started server on http://localhost:${webpackConfigs[index].devServer.port}`);
  });
})







