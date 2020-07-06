const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new WebpackPwaManifest({
            name: "Budget-Tracker",
            short_name: "Budget-Tracker",
            description: "An application that allows you to track your in/outcome",
            background_color: "",
            theme_color: "#ffffff",
            start_url: "/",
            // icons: [{
            //     src: path.resolve("assets/images/icons/android-chrome-192x192.png"),
            //     sizes: [96, 128, 192, 256, 384, 512],
            //     destination: path.join("assets", "icons")
            // }]
        })
    ]
};