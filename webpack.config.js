const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MyHostPlugin = require('./myPlugins/myHostPlugin')
module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/main.js')
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].[hash:8].js'
	},
	resolveLoader: {
		modules: ['./node_module', './myLoaders']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'mystyleLoader'
					},
					{
						loader: path.resolve(__dirname, './myLoaders/mycssLoader.js'),
						options: {
							name: 'larry'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:  'public/index.html',
			filename:  'index.html'
		}),
		new MyHostPlugin()
	],
	// devServer: {
	// 	port: 9005,
	// 	host: '0.0.0.0'
	// }
}