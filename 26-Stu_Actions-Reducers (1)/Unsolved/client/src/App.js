import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('')
    operation.setContext({
      headers: {
        authorization: token ?``:
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {}
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/" component={Home} />
              <Route exact path="/products/:id" component={Detail} />
              
            </Switch>
          </Provider>
          {}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;