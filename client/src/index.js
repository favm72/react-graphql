import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
	<Auth0Provider
		domain="favm72.us.auth0.com"
		clientId="RJe8lYnG8m5qnaH6ZFAXwQuJKJjSxOvB"
		redirectUri={window.location.origin}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
