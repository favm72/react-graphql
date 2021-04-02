import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes'
import "./App.css"
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'

function App() {	
	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Routes />
			</ApolloProvider>			
		</BrowserRouter>
	);
}

export default App;
