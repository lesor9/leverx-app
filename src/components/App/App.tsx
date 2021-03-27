import * as React from 'react';

import Header from '../Blocks/Header';
import Main from '../Blocks/Main';

import { StyledApp } from './styles';


function App () {
    return(
        <StyledApp>
            <Header />
            <Main />
        </StyledApp>
    );
}

export default App;