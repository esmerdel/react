import logo from './logo.svg';
import './App.css';

import React from 'react';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

const App = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Relogio />
            <Letreiro />
        </div>
    );
};

export default App;
