import React from 'react';

export default class MainFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Company Info",
            content: <div><p> 公司名称: <b>成功国际教育移民公司</b></p>
                <p> 澳大利亚商业注册号码(ABN): <b>64 124 030 897</b></p>
                <p>成功国际(Victor International Pty Ltd)是一家经澳大利亚政府注册的专业留学移民公司，具有合法的注册移民代理和教育代理资格.</p>
                <p>公司得到大量澳大利亚大学、专科、高中及语言学校授权，而且与中国和澳大利亚的政府、学校和商界建立了广泛和密切的联系。本公司的业务范围包括澳洲各类院校课程免费咨询及申请、学生签证申请、澳洲本地学生升学及转学、技术移民、投资移民、家庭成员移民及工作签证办理，为中澳两地的客户提供“留学、移民、就业”的一条龙服务.</p>
                <p>公司总部位于澳大利亚昆士兰州的布里斯本市中心，并在中国北京市、上海市、杭州市、哈尔滨市等地设有代表处。通过两地的紧密合作，成功国际的精英队伍致力于为客户提供诚信和专业的服务。</p>
            </div>


        }
    }


    render() {

        return (
            <div id="frames_center">
                <div id="frame_main" className="frame">
                    <div className="frame_title">{this.state.title}</div>
                    <div className="frame_body">
                        {this.state.content}
                    </div>
                </div>
            </div>
        )
    };
}

