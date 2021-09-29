import React from 'react';
import {Button, IconButton} from '@material-ui/core';
import {ChevronLeft, Delete} from '@material-ui/icons';
import './styles.scss';

const App: React.FC = () => (
    <div className="wrapper">
        <h1>React 17 and TypeScript 4 App!🚀</h1>
        <IconButton>
            <ChevronLeft />
        </IconButton>
        <Button variant="contained" color="primary" startIcon={<Delete />}>
            Hello World
        </Button>
    </div>
);

export default App;
