const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Caching'
		})
	],
	watch: process.env.NODE_ENV !== 'production' && true,
	resolve: {
		extensions: ['.js', 'jsx']
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true // webpack@2.x and newer
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			},
			{
				test: /\.(csv|tsv)$/,
				use: ['csv-loader']
			}
		]
	},
	devServer: {
		compress: true,
		contentBase: path.join(__dirname, 'dist'),
		disableHostCheck: true, // THIS IS NOT RECOMMENDED,
		// lazy: true,
		filename: 'bundle.js',
		headers: {
			'X-Custom-Foo': 'bar'
		},
		historyApiFallback: {
			disableDotRule: true
		},
		host: '0.0.0.0',
		hot: true,
		index: './public/index.html',
		liveReload: false,
		onListening: function(server) {
			const port = server.listeningApp.address().port
			console.log('🚀 Listening on port:', port)
		},
		open: true, // 'Google Chrome'
		port: process.env.PORT || 8080,
		stats: {
			colors: true,
			hash: true,
			timings: true,
			assets: true,
			chunks: true,
			chunkModules: false,
			modules: false,
			children: true
		},
		watchContentBase: true,
		watchOptions: {
			ignored: /node_modules/,
			poll: true
		},
		writeToDisk: true
	}
}
