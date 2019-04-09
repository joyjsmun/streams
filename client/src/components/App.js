import React from 'react';
import {BrowserRouter,route} from 'react-router-dom';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <route path="/" component={StreamList} />
                    <route path="/streams/new" component={StreamCreate} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;