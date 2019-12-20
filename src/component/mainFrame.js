import React from 'react';
import { Markup } from 'interweave';
import 'bootstrap/dist/css/bootstrap.min.css'
import SkilledIndependentVisas from "./skilledIndpendentVisas";
import ContactUs from "./contactUs";

export default class MainFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Company Info",
            content: "<div>\n" +
                "                <p><b>Company Name</b> Victor International Pty Ltd</p>\n" +
                "                <p><b>Australian Business Registration Number (ABN)</b> 64 124 030 897</p>\n" +
                "                <p>Victor International Pty Ltd is a professional study and immigration company registered with the Australian Government. It has legal registration of migration agent and education agent qualifications.</p>\n" +
                "                <p>The company is accredited by a number of Australian universities, colleges, high schools and language schools, and has extensive and close links with governments, schools and business in China and Australia.</p>\n" +
                "                <p>The company's business scope includes free consultation and application for various institutions in Australia, student visa application, Australian students applying for continuing study and transfer, skilled immigration, investment immigration, family member immigration and work visa application.</p>\n" +
                "                <p>We provide customers in China and Australia one-stop service of \"Study abroad, immigration, employment\". The company is headquartered in Brisbane, Queensland, Australia and Beijing, China. Through the close cooperation between the two places, the successful international elite team is committed to providing customers with integrity and professional services.</p>\n" +
                "            </div>"
        }
    }

    render() {
        const output = this.state.content;
        return (
            <div id="frames_center" >
                <div id="frame_main" className='card border-primary'>
                    <div className="card-header bg-info"><h4>{this.state.title}</h4></div>
                    <div className="card-body">
                        <Markup content={output} />
                        {this.state.title === ("Skilled Independent Visas") &&  <SkilledIndependentVisas /> }
                        {this.state.title === ("Contact Info") &&  <ContactUs /> }
                    </div>
                </div>
            </div>
        )
    };
}

