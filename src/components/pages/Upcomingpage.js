import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
import Upcoming from '../local/Upcoming';
const { Header, Footer, Content } = Layout;
class Upcomingpage extends Component {
    render() {
        return (
            <Layout>

                <Content>
                    <Upcoming />
                </Content>
            </Layout>
        )
    }
}
export default Upcomingpage;