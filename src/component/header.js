import React from 'react';
import './../css/eduimmi.css';
import 'bootstrap/dist/css/bootstrap.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid">
            <div className = "row align-items-baseline d-flex p-2" >
                <div className = "col-" >
                   <span class="display-4 text-info">成功留学移民公司</span>
                </div>
                <div className="col-auto mr-auto mt-auto">

                </div>
                <div className = "col-auto  mt-sm-auto" >
                    <button type="button" className="btn btn-info btn-lg  align-items-md-end" onClick={this.props.parentHandleMenuItem}>联系我们</button>
                </div>
            </div>
            </div>
        )
    };
}

