import React, {Component} from 'react';
import Home from './component/home/home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RouteComponent extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <nav>
                        <ul>
                            {/* <li><Link to="/state">State Component</Link></li> */}
                           
                        </ul>
                    </nav>
                    <article>
                        <Route path="/" exact component={Home} />
                        
                    </article>
                </Router>
            </div>

        );
    }
}

export default RouteComponent;