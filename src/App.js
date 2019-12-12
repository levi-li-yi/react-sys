import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import router from './router/index';
import './App.css';

function App() {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    </Router>
  );
}

export default App;
