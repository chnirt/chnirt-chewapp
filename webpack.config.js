const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const TerserPlugin = require("terser-webpack-plugin");
// const MinifyPlugin = require("babel-minify-webpack-plugin");
const ClosurePlugin = require("closure-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const NpmInstallPlugin = require("npm-install-webpack-plugin");
// const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  // webpack will take the files from ./src/index
  entry: "./src/index.js",

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  watch: process.env.NODE_ENV !== "production" && true,
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: [".js", "jsx"]
  },

  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      // new ClosurePlugin(
      //   { mode: "STANDARD" },
      //   {
      //     // compiler flags here
      //     //
      //     // for debuging help, try these:
      //     //
      //     // formatting: 'PRETTY_PRINT'
      //     // debug: true,
      //     // renaming: false
      //   }
      // ),

      new TerserPlugin({
        cache: true,
        parallel: 4,
        sourceMap: true,
        // minify: (file, sourceMap) => {
        //   const extractedComments = [];

        //   // Custom logic for extract comments

        //   const { error, map, code, warnings } = require("uglify-module") // Or require('./path/to/uglify-module')
        //     .minify(file, {
        //       /* Your options for minification */
        //     });

        //   return { error, map, code, warnings, extractedComments };
        // },
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: {
            comments: false
          },
          extractComments: false,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false
        },
        extractComments: true,
        chunkFilter: chunk => {
          // Exclude uglification for the `vendor` chunk
          if (chunk.name === "vendor") {
            return false;
          }

          return true;
        }
      })
      // new TerserPlugin({
      //   terserOptions: {
      //     output: {
      //       comments: false
      //     }
      //   },
      //   extractComments: false
      // })
    ],
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [
    // new webpack.AutomaticPrefetchPlugin(),
    // new MinifyPlugin(),
    new webpack.BannerPlugin({
      banner:
        "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
    }),
    new CompressionPlugin(),
    // new webpack.ContextReplacementPlugin(
    //   (resourceRegExp: RegExp),
    //   (newContentCallback: data => void)
    // ),
    // new CopyPlugin([
    //   { from: "source", to: "dest" },
    //   { from: "other", to: "public" }
    // ]),
    // new webpack.DefinePlugin({
    //   NICE_FEATURE: JSON.stringify(true),
    //   EXPERIMENTAL_FEATURE: JSON.stringify(false)
    // }),
    // new webpack.DllPlugin({
    //   context: __dirname,
    //   name: "[name]_[hash]",
    //   path: path.join(__dirname, "manifest.json")
    // }),
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify("production"),
    //   "process.env.DEBUG": JSON.stringify(process.env.DEBUG || false)
    // }),
    new Dotenv({
      path: "./.env", // Path to .env file (this is the default)
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    // new webpack.EvalSourceMapDevToolPlugin({
    //   filename: "[name].js.map",
    //   exclude: ["vendor.js"]
    // }),
    // new webpack.ExtendedAPIPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20
    }),
    new webpack.HotModuleReplacementPlugin(), // dev
    new HtmlWebpackPlugin({
      title: "React Webpack Boilerplate",
      filename: "index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: "dependency"
      // hash: true,
      // inject: true
    }),
    // new webpack.IgnorePlugin({
    //   resourceRegExp: /^\.\/locale$/,
    //   contextRegExp: /moment$/
    // }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5
    }),
    // new webpack.optimize.MinChunkSizePlugin({
    //   minChunkSize: 10000 // Minimum number of characters
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.NormalModuleReplacementPlugin(/(.*)-APP_TARGET(\.*)/, function(
    //   resource
    // ) {
    //   resource.request = resource.request.replace(
    //     /-APP_TARGET/,
    //     `-${appTarget}`
    //   );
    // }),
    // new NpmInstallPlugin({
    //   dev: function(module, path) {
    //     return (
    //       [
    //         "babel-preset-react-hmre",
    //         "webpack-dev-middleware",
    //         "webpack-hot-middleware"
    //       ].indexOf(module) !== -1
    //     );
    //   }
    // }),
    // new webpack.PrefetchPlugin([context], request),

    new webpack.ProgressPlugin({
      entries: true,
      modules: true,
      modulesCount: 100,
      profile: true
      // handler: (percentage, message, ...args) => {
      //   // custom logic
      //   console.info(percentage, message, ...args);
      // }
    }),
    // new webpack.ProvidePlugin({
    //   identifier: ["module1", "property1"]
    //   // ...
    // }),
    // new StylelintPlugin(options),

    new webpack.NoEmitOnErrorsPlugin() // dev
  ],
  devtool:
    process.env.NODE_ENV === "production" ? "source-map" : "eval-source-map", // this helps to browser to point to the exact file in the console, helps in debug
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "dist"),
    disableHostCheck: true, // THIS IS NOT RECOMMENDED,
    // lazy: true,
    filename: "bundle.js",
    headers: {
      "X-Custom-Foo": "bar"
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
    host: "0.0.0.0",
    hot: true,
    // http2: true,
    // https: {
    //   key: fs.readFileSync("/ssl/server.key"),
    //   cert: fs.readFileSync("/ssl/server.crt"),
    //   ca: fs.readFileSync("/ssl/ca.pem")
    // },
    index: "./public/index.html",
    // injectClient: compilerConfig => compilerConfig.name === "only-include", //
    // inline: true,
    // lazy: true,
    liveReload: false,
    // mimeTypes: { "text/html": ["phtml"] },
    // noInfo: true,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      console.log("🚀 Listening on port:", port);
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
};
