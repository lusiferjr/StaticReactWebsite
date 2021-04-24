import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Wireframe from '../local/Wireframe';
const { Header, Footer, Content } = Layout;
class Wireframepage extends Component {
    render() {
        return (
            <Layout>
            <Content>
                <Wireframe
                         image={[
                                "assets/images/wireframe.jpg",
                                "assets/images/wireframe2.jpg",
                                "assets/images/wirefame3.jpg",
                                "assets/images/homepage/4.jpg"
                            ]} 
                />
            </Content>
        </Layout>
        )
    }
}
export default Wireframepage;