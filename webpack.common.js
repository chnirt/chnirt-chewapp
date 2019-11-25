const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	plugins: [
		// new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			// we use babel-loader to load our jsx and tsx files
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			// css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
			{
				test: /\.css$/,
				use: [
					// MiniCssExtractPlugin.loader,
					'style-loader',
					'css-loader'
				]
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
				test: /\.(gif|png|jpe?g|svg)$/i,
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
		// historyApiFallback: {
		//   rewrites: [
		//     { from: /^\/$/, to: "/views/landing.html" },
		//     { from: /^\/subpage/, to: "/views/subpage.html" },
		//     { from: /./, to: "/views/404.html" }
		//   ]
		// },
		historyApiFallback: {
			disableDotRule: true
		},
		host: '0.0.0.0',
		hot: true,
		// http2: true,
		// https: {
		//   key: fs.readFileSync("/ssl/server.key"),
		//   cert: fs.readFileSync("/ssl/server.crt"),
		//   ca: fs.readFileSync("/ssl/ca.pem")
		// },
		index: './public/index.html',
		// injectClient: compilerConfig => compilerConfig.name === "only-include", //
		// inline: true,
		// lazy: true,
		liveReload: false,
		// mimeTypes: { "text/html": ["phtml"] },
		// noInfo: true,
		onListening: function(server) {
			const port = server.listeningApp.address().port
			console.log('🚀 Listening on port:', port)
		},
		open: true, // 'Google Chrome'
		// openPage: ['/different/page1', '/different/page2'],
		// overlay: {
		//   warnings: true,
		//   errors: true
		// },
		// pfx: '/path/to/file.pfx',
		// pfxPassphrase: 'passphrase',
		port: process.env.PORT || 8080,
		// proxy: {
		//   "/api": "http://localhost:3000",
		//   pathRewrite: { "^/api": "" }
		// },
		// public: "myapp.test:80",
		// publicPath: "/public",
		// quiet: true,
		// serveIndex: true,
		// socket: "socket",
		// sockHost: "myhost.test",
		// sockPath: "/socket",
		// sockPort: 8080,
		// staticOptions: {
		//   redirect: true
		// },
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
		// transportMode: {
		//   client: require.resolve("./CustomClient"),
		//   server: "ws"
		// },
		// useLocalIp: true,
		watchContentBase: true,
		watchOptions: {
			ignored: /node_modules/,
			poll: true
		},
		writeToDisk: true
	}
}
