import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Service from '../local/Service';
const { Header, Footer, Content } = Layout;
class Servicepage extends Component {
    render() {
        return (
            <Layout>
            <Content>
                <Service/>
            </Content>

        </Layout>
        )
    }
}
export default Servicepage;