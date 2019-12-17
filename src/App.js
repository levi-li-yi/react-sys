import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import router from './router/index';
import './App.css';
import {Provider} from 'react-redux';
//import {StoreContext} from 'redux-react-hook';
/*无论使用react-redux还是redux-react-hook;redux部分均在store中不变*/
import store from './store'

function App() {
    console.log(store.getState());
    return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            {/*使用react-redux将store统一当做props注入全局*/}
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
            {/*使用redux-react-hook将store统一当做props注入全局*/}
            {/*<StoreContext.Provider value={store}>
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
            </StoreContext.Provider>*/}
        </Suspense>
    </Router>
  );
}

export default App;
