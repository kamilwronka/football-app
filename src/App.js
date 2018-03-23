import React, { Component } from "react";

//page elems

//import PageContent from './components/page-content/page-content';
import Menu from './components/menu';
import PageContent from './components/page-content';
import BottomMenu from './components/bottom_menu';

class App extends Component {

    render() {
        return (
                <div>
                    <Menu />
                    <PageContent />
                </div>
        )
    }
}


export default App;