import React, { useState } from 'react';
import InputNumber from './compomnet/InputNumber';

import './App.css';

function App() {
    const [value, setValue] = useState('aaa')
    return (
        <div className='App'>
            <div>
            <InputNumber value={value} onChange={e => { console.log(1,e) }} />
            </div>
            <div>
            <InputNumber defaultValue={value} onChange={e => { console.log(2,e) }} />
            <InputNumber defaultValue={value} value={'231'} onChange={e => { console.log(3,e) }} />
            </div>
        </div>
    )
}

export default App;

/*
before, after, ---, 2, then , after setState, timeout
*/