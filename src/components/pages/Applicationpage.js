import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Application from '../local/Application';
const { Header, Footer, Content } = Layout;
class Applicationpage extends Component {
    render() {
        return (
            <Layout>
            <Content>
                <Application/>
            </Content>
        </Layout>
        )
    }
}
export default Applicationpage;