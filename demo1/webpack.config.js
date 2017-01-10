var config = {
    entry: [      //entry: 入口,定义要打包的文件
      './src'
    ],
    output: {     //output: 出口，定义打包输出的文件；包括路径，文件名，还可能有运行时的访问路径（publicPath）参数
      path: 'builds',
      filename: 'bundle.js',
    },
    resolve: {    //resolve: 定义能够被打包的文件，文件后缀名

    },
    /*
    module: webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader
    test: 检测哪些文件需要此loader，是一个正则表达式
    exclude: 忽略哪些文件
    */
    module: {

    },
    plugins: [    //plugins: 定义一些额外的插件
    ]
}

module.exports = config;