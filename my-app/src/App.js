import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const time = new Date();
	const year = time.getFullYear();
	const app = createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: `${logo}` }),
			createElement('p', null, 'Edit src/App.js and save to reload.'),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('div', null, `${year}`),
		),
	);

	return app;
};

export default App;
