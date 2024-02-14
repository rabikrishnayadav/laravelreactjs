import React from 'react';
import ReactDom from 'react-dom/client';

export default function App() {
	return (
		<section>
			<h3>Welcome to React JS</h3>
		</section>
		);
}

const container = document.getElementById('apps');
const root = ReactDom.createRoot(container);
root.render(<App />);