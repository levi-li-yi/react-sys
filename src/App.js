import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import router from './router/index';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'

function App() {
    console.log(store.getState());
    return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <div className="App">
                    {
                        router.map(({path, Components, exact = true, routes = []}, key) => {
                            return <Route
                                path={path}
                                exact={exact}
                                key={key}
                                render={props => (
                                    <Components {...props} routes={routes}/>
                                )}/>
                        })
                    }
                </div>
            </Provider>
        </Suspense>
    </Router>
  );
}

export default App;
