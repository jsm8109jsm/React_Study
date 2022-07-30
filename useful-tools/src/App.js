/* esLint-disable */

import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <div className="App">
            <div>asdfasfd</div>
            <ul>
                <li>asdfafdszxcv</li>
            </ul>
        </div>
    );
}

export default App;
