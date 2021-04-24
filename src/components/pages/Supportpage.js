import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Support from '../local/Support';
const { Header, Footer, Content } = Layout;
class Supportpage extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <Support />
                </Content>

            </Layout>
        )
    }
}
export default Supportpage;