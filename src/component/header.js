import React from 'react';
import './../css/eduimmi.css';
import logo from './../img/eduimmi.gif'
import 'bootstrap/dist/css/bootstrap.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid">
            <div className = "row align-items-baseline" >
                <div className = "col-" >
                    <a href="./"> <img src={logo}  alt={'Eduimmi.com.au'}/></a>
                </div>
                <div className="col-auto mr-auto mt-auto">
                    <span className="display-4 text-info">Victor International Pty Ltd</span>
                </div>
                <div className = "col-auto mt-sm-auto" >
                    <a href='/cn' className="btn btn-info btn-lg  align-items-md-end">中文</a>
                </div>
                <div className = "col-auto  mt-sm-auto" >
                    <button type="button" className="btn btn-info btn-lg  align-items-md-end" onClick={this.props.parentHandleMenuItem}>Contact Us</button>
                </div>
            </div>
            </div>
        )
    };
}

