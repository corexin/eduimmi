import React from 'react';
import './../css/eduimmi.css';
import logo from './../img/eduimmi.gif'
import 'bootstrap/dist/css/bootstrap.css'

export default class Header extends React.Component {
    render() {
        return (
            <div id="header" className='container row'>
                    <div className='col-' >
                        <a href="./"> <img src={logo}  alt={'EduImmi'}/></a>
                    </div>
                    <div className='col- font-weight-bold text-info mt-auto'>www.eduimmi.com.au</div>
            </div>
        )
    };
}

