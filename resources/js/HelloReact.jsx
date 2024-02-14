import React from 'react';
import ReactDom from 'react-dom/client';

export default function HelloReact() {
	return (
		<section>
			<h1>Hello,</h1>
		</section>
		);
}

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(<HelloReact />);