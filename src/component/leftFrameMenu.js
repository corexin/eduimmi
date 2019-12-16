import React from 'react';

export default class LeftFrameMenu extends React.Component {

    render() {
        const result = this.props.menuItems.map((item, i)=>{
            return (<a key={i} href="'#" onClick={this.props.parentHandleMenuItem}>{item}</a>)
        });

        return (

            <div className='card border-primary mt-1'>
                <p className="card-header bg-info text-center">{this.props.heading}</p>
                <div className="menu_body">

                    {result}

                </div>
            </div>
        )
    };
}

