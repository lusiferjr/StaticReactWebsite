import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Productdisplay from '../local/Productdisplay';
const { Header, Footer, Content } = Layout;
class productpage extends Component {
    render() {
        return (
            <Layout>

            <Content>
                <Productdisplay/>
            </Content>
 
        </Layout>
        )
    }
}
export default productpage;