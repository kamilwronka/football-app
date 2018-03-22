import React, { Component } from "react";

//page elems

//import PageContent from './components/page-content/page-content';
import SideMenu from './components/side-menu/side-menu';
import PageContent from './components/page-content/page-content';
import Home from './components/page-content/home';
import BottomMenu from './components/bottom_menu';

class App extends Component {

    render() {
        return (
                <div>
                    <SideMenu />
                    <PageContent />
                    <BottomMenu />
                </div>
        )
    }
}


export default App;