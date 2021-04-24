import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Goods from '../global/Goods';
import Portfolio from '../local/portfolio';
const { Header, Footer, Content } = Layout;
class Portfoliopage extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <Portfolio />
                </Content>

            </Layout>
        )
    }
}
export default Portfoliopage;