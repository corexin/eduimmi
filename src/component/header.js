import React from 'react';
import './../css/eduimmi.css';
import logo from './../img/eduimmi.gif'
import 'bootstrap/dist/css/bootstrap.css'

export default class Header extends React.Component {
    render() {
        return (

                <div className='row w-90'>
                    <div className='col-1' >
                        <a href="./"> <img src={logo}  alt={'EduImmi'}/></a>
                    </div>
                <div className='col-9 text-info mt-auto'><h4>www.eduimmi.com.au</h4></div>
                <div className='col mt-auto'><button type="button" className="btn btn-primary btn-lg" onClick={this.props.parentHandleMenuItem}>Contact Us</button></div>
                </div>

        )
    };
}

