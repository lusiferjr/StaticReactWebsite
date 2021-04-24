import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Eventandblog from '../local/Eventandblogs';
const { Header, Footer, Content } = Layout;
class Eventandblogspage extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <Eventandblog />
                </Content>

            </Layout>
        )
    }
}
export default Eventandblogspage;