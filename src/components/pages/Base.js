import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Homeproduct from '../local/Homeproducts';
import Homeimage from '../local/Homeimage';
import Userfooter from '../global/Userfooter'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
class Base extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <Homeimage />
                    <Homeproduct />
                </Content>

            </Layout>
        )
    }
}
export default Base;