import React, { Component } from 'react';

class App extends Component {

    render() {
        const iconUrl = browser.extension.getURL("icons/jew-1.png");
        return (
            <img src={iconUrl} height={150} className="order-btn"></img>
        );
    }
}

export default App;
