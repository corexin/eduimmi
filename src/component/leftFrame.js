import React from 'react';
import './leftFrameMenu'
import LeftFrameMenu from "./leftFrameMenu";

export default class LeftFrame extends React.Component {
    render() {
        const myItems = ['item 1','item 2'];
        const myItems1 = ['item 3','item 4'];


        return (
            <div id="frames_left">
                <div className="frame">
                    <div className="frame_title">Menu</div>
                    <div className="frame_body">
                        <div className="menu_list">
                            <LeftFrameMenu heading={'Heading1'} menuItems={myItems} parentHandleMenuItem={this.props.parentHandleMenuItem}/>

                            <LeftFrameMenu heading={'Heading2'} menuItems={myItems1} parentHandleMenuItem={this.props.parentHandleMenuItem}/>
                        </div>

                    </div>
                </div>
            </div>

        )
    };
}

