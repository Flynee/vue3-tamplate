module.exports = {
    devServer: {
        // host: 'localhost',
        // port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: 'https://www.fastmock.site/mock/6d5ab9fcc54bf5840f8ee6a295dfcfa7/api',
                changeOrigin: true,
                pathRewrite: {
                    [`^${process.env.VUE_APP_BASE_API}`]: '',
                },
            },
        },
        disableHostCheck: true,
    },
    configureWebpack: {
        devtool: 'source-map',
    },
};
