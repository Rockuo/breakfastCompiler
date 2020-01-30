const path = require('path');

module.exports = {
	entry: './qr/index.jsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'qr/dist'),
	},
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
};