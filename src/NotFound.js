import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div className="not-found-wrapper">
              <h1>Page Not Found</h1>
              <Link to="/"><button className="go-home">Back Home</button></Link>
            </div>
        );
    }
}

export default NotFound;