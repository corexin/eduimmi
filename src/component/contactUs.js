import React from 'react';
import WechatQC from '../img/contact.png'

export default class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <p>
                    地址: 362 George Street, Brisbane, QLD 4000<br/>
                    电话: 0061-7-32100916<br/>
                    手机: 0061-433456981<br/>
                    邮件: eduimmi@gmail.com<br/>
                    网址: www.eduimmi.com.au<br/>
                 </p>
                 <p>
                    微信:  eduimmi
                  </p>
                 <img src={WechatQC} alt={'Contact us'} />
            </div>
        )
    };
}

