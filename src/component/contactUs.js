import React from 'react';
import WechatQC from '../img/contact.png'

export default class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Address: 362 George Street, Brisbane, QLD 4000<br/>
                    Telephone: 0061-7-32100916<br/>
                    Mobile: 0061-433456981<br/>
                    Email:eduimmi@gmail.com<br/>
                    Address: www.eduimmi.com.au<br/>
                 </p>
                 <p>
                    Wechat:  eduimmi
                  </p>
                 <img src={WechatQC} alt={'Contact us'} />
            </div>
        )
    };
}

