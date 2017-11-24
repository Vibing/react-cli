import path from "path";
import webpack from "webpack";

export default {
  entry: {
    vendor: [
      "react",
      "react-dom",
      "antd",
      "react-router-dom",
      "immutable"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dll"),
    filename: "[name].dll.js",
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: "[name]_library"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.DllPlugin({
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(__dirname, "dll", "[name]-manifest.json"),
      /**
       * name
       * static bundle 输出到那个全局变量上
       * 和 output.library 一样即可。
       */
      name: "[name]_library"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
