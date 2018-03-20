import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//page elems

//import PageContent from './components/page-content/page-content';
import SideMenu from './components/side-menu/side-menu';
import PageContent from './components/page-content/page-content';
import Home from './components/page-content/home';

class App extends Component {

    render() {
        return (
                <div>
                    <SideMenu />
                    <PageContent />>
                </div>
        )
    }
}


export default App;