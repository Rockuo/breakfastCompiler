const path = require('path');

module.exports = {
	entry: './qr/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
};