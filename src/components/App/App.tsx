import * as React from 'react';
import { FC, ReactElement } from 'react';

import Header from '../Blocks/Header';
import Main from '../Blocks/Main';

import { StyledApp } from './styles';


const App: FC = (): ReactElement => {
    return(
        <StyledApp>
            <Header />
            <Main />
        </StyledApp>
    );
}

export default App;