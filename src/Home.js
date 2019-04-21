import React, { Component } from 'react';

class Home extends Component {
    onButtonClick = () => {
        console.log('clicked');
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <button onClick={this.onButtonClick}>Click Me</button>
            </div>
        );
    }
}

export default Home;