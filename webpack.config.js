const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const TerserPlugin = require("terser-webpack-plugin");

const { env } = process;

module.exports = {
  mode: env.NODE_ENV,
  // webpack will take the files from ./src/index
  entry: "./src/index.js",

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  watch: env.NODE_ENV !== "production" && true,
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
        use: ["style-loader", "css-loader"]
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
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    })
  ],
  devtool: env.NODE_ENV === "production" ? "source-maps" : "eval", // this helps to browser to point to the exact file in the console, helps in debug
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "dist"),
    disableHostCheck: true, // THIS IS NOT RECOMMENDED,
    // lazy: true,
    // filename: "bundle.js",
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
    host: "0.0.0.0", // 0.0.0.0
    hot: true,
    // http2: true,
    // https: {
    //   key: fs.readFileSync("/ssl/server.key"),
    //   cert: fs.readFileSync("/ssl/server.crt"),
    //   ca: fs.readFileSync("/ssl/ca.pem")
    // },
    // index: "./public/index.html",
    // injectClient: compilerConfig => compilerConfig.name === "only-include",
    inline: true,
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
    overlay: {
      // warnings: true,
      errors: true
    },
    // pfx: '/path/to/file.pfx',
    // pfxPassphrase: 'passphrase',
    port: env.PORT || 8080,
    // proxy: {
    //   "/api": "http://localhost:3000",
    //   pathRewrite: { "^/api": "" }
    // },
    // public: "myapp.test:80",
    // publicPath: "/src/assets/",
    // quiet: true,
    serveIndex: true,
    // socket: "socket",
    // sockHost: "myhost.test",
    // sockPath: "/socket",
    // sockPort: 8080,
    staticOptions: {
      redirect: true
    },
    stats: "errors-only",
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
