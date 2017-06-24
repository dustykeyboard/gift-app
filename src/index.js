import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import routes from './routes'
import reducers from './reducers'
import sagas from './sagas'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import './index.css'

registerServiceWorker()

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware, routeMiddleware))
)
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <App>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    name={route.name}
                    exact={true}
                    render={props => <route.component {...props} />}
                />
            ))}
          </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
