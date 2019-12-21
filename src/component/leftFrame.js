import React from 'react';
import './leftFrameMenu'
import LeftFrameMenu from "./leftFrameMenu";
import Menu from "./data"

export default class LeftFrame extends React.Component {

    renderMenuItems= () => {
        const allItems = Menu.MENU;
        const allMenuItems = Object.keys(allItems).map( (key) =>(
            <LeftFrameMenu key={key} heading={key} menuItems={allItems[key]} parentHandleMenuItem={this.props.parentHandleMenuItem} />
        ));
        console.log(allMenuItems);
        return allMenuItems;
    }

    render() {
        return (
            <div id="frames_left">
                <div className='card border-primary'>
                    <div className="card-header bg-info text-center"><h4>Menu</h4></div>
                    <div className="frame_body m-2">
                        <div className="menu_list">
                            {this.renderMenuItems()}
                        </div>
                    </div>
                </div>
            </div>

        )
    };
}

