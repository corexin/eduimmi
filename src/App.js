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
        let menuValue = e.target.innerHTML;
        let displayTitle = Data.data[menuValue]['title'];
        let displayValue = Data.data[menuValue]['content'];

        if(menuValue==="Skilled Independent Visas")
        {
            this.mainFrame.current.setState({
                title: displayTitle,
                SkilledIndependentVisasVisible:true,
                content:  displayValue
            });
        }
        else
        {
            this.mainFrame.current.setState({
                title: displayTitle,
                SkilledIndependentVisasVisible:false,
                content:  displayValue
            });
        }

        window.scrollTo(0, 0);
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

