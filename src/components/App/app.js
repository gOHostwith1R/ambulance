import React from "react";
import './app.scss';
import {BrowserRouter as Router} from "react-router-dom";
import {useLocation} from 'react-use';
import useRoutes from "../../controller/routes";

function App() {
    const routes = useRoutes();
    const location = useLocation()
    return (
        <Router>
            <div className={`${location.pathname === '/patients' ? 
                'app-patients' : 
                'app'}`
            }>
                <div className="app-main">
                    {routes}
                </div>
            </div>
        </Router>
    );
}

export default App;
