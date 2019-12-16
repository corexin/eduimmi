import React from 'react';

import Header from './component/header'
import Footer from "./component/footer";
import LeftFrame from "./component/leftFrame";
import MainFrame from "./component/mainFrame";
import Data from './component/data'

export default class App extends React.Component {

    constructor(props)
    {
        super(props);
        this.mainFrame = React.createRef();
    }

    handleMenu =(e) =>{
        e.preventDefault();
        let menuvalue = e.target.innerHTML;
        let displayTitle = Data.data[menuvalue]['title'];
        let displayValue = Data.data[menuvalue]['content'];

        this.mainFrame.current.setState({
                title: displayTitle,
                content:  displayValue
        });
    }

    render() {
        return (
            <div>
            <Header />
            <div className="d-flex p-2">

                <LeftFrame parentHandleMenuItem={this.handleMenu} />
                <MainFrame ref={this.mainFrame}  />

            </div>
            <Footer />
            </div>
        )
    };
}

