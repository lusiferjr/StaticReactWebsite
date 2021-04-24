import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'

import Foodordering from '../local/Foodordering';
const { Header, Footer, Content } = Layout;
class Foodoerderingpage extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <Foodordering />
                </Content>

            </Layout>
        )
    }
}
export default Foodoerderingpage;