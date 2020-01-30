import React from 'react';
import {render} from 'react-dom';
import {QRCode} from 'react-qr-svg';
import recipes from '../recipes';
import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter';

const styles = {
	root: {
		fontFamily: 'sans-serif',
	},
	h1: {
		textAlign: 'center',
	},
	qrcode: {
		textAlign: 'center',
		float: 'left',
		display: 'block'
	}
};

export default class App extends React.Component {
	render()
	{
		return (
			<>

				{recipes.map((data) =>
					<React.Fragment key={data.name}>
						<div style={styles.root}  className="prdel">
							<h3 style={styles.h1}>{data.name}</h3>
							<QRCode
								level="Q"
								style={{width: 150, ...styles.qrcode}}
								value={data.url}
							/>

							<ReactJsonSyntaxHighlighter obj={data}/>
						</div>
						<br/>
					</React.Fragment>
				)}
			</>
		);
	}
}

render(<App/>, document.getElementById('root'));
