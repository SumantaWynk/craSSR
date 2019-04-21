import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    onButtonClick = () => {
        console.log('clicked');
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <button onClick={this.onButtonClick}>Click Me</button>
                <Link to='/users'>CLICK to NAVIGATE</Link>
            </div>
        );
    }
}

export default Home;