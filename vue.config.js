

module.exports = {
    pluginOptions: {
        electronBuilder: {
            chainWebpackMainProcess: (config) => {
                config.output.filename('background.js');
            }
        }
    }
}
