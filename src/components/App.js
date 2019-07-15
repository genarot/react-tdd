import React from 'react';
import './App.css';
import Wallet from "./Wallet";
import Loot from "./Loot";

function App() {
    return (
        <div>
            <h2>Loot Check</h2>
            <hr/>
            <Wallet/>
            <hr/>
            <Loot />
            <div>Powered by <a href={'https://coindesk.com'} target={'_blank'}>Coindesk</a> </div>
        </div>
    );
}

export default App;
