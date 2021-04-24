import { Menu, Layout } from 'antd';
import React from 'react'
import '../../index.css'
import { createFromIconfontCN } from '@ant-design/icons';
import { InstagramFilled, LinkedinFilled, YoutubeFilled, MenuOutlined,CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const { Component } = require("react")
const { SubMenu } = Menu;
const { Header } = Layout;
class headerstructure extends Component {
  constructor() 
  { 
    super() 
    this.state={
      dropdownmenu:false,
    }
    this.dropmenu=this.dropmenu.bind(this)
  }
  dropmenu() {
    var item = document.getElementById("dropdown");
    if (item.style.bottom == "-400px") {
      item.style.bottom = "0px";
      console.log("true");
      this.setState({
        dropdownmenu:true
      })
    }
    else { 
      console.log("false");
      this.setState({
        dropdownmenu:false
      })
      item.style.bottom = "-400px"; }
  }
  render() {
    return (
      <Header>
        <div className="header-logo">
          <Link to="/" style={{ color: "white" }}>
            <img src="assets/images/logo.jpg" className="logo-image"></img>
          </Link>
        </div>
        <div className="header-icons">
          <div className="header-icon-circle">
          <a href="https://www.instagram.com/appnivi/?hl=en"><InstagramFilled className="header-icon" /></a></div>
          <div className="header-icon-circle">
          <a href="https://www.youtube.com/channel/UC3PIMMKZiPL7PDX-LAcvk1A"><YoutubeFilled className="header-icon" /></a></div>
          <div className="header-icon-circle">
          <a href="https://www.linkedin.com/company/appnivi-it-solutions/"><LinkedinFilled className="header-icon" /></a></div>
        </div>
        <div className="header-menu">
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1" className="menu-list" ><Link to="/service">Services</Link></Menu.Item>
            <Menu.Item key="4" className="menu-list" ><Link to="/upcoming">Upcoming</Link></Menu.Item>
            <Menu.Item key="5" className="menu-list" ><Link to="/support">Support</Link></Menu.Item>
          </Menu>
        </div>
        <div className="responsive-menu-icon">
          <div className="responsive-spacer" />
          {
            this.state.dropdownmenu===true?<CloseOutlined className="responsive-icon" onClick={this.dropmenu} />:<MenuOutlined className="responsive-icon" onClick={this.dropmenu} />
          }
        </div>
        <div className="responsive-dropdown" id="dropdown">
        <div className="responsive-header-menu" onClick={this.dropmenu}><Link to="/service" style={{color:"white"}}>Services</Link></div>
        <div className="responsive-header-menu" onClick={this.dropmenu}><Link to="/upcoming"style={{color:"white"}}>Upcoming</Link></div>
        <div className="responsive-header-menu" onClick={this.dropmenu}><Link to="/support" style={{color:"white"}}>Support</Link></div>
        <div className="responsive-header-icons">
          <div className="header-icon-circle">
            <a href="https://www.instagram.com/appnivi/?hl=en" onClick={this.dropmenu}><InstagramFilled className="header-icon" /></a></div>
          <div className="header-icon-circle">
           <a href="https://www.youtube.com/channel/UC3PIMMKZiPL7PDX-LAcvk1A" onClick={this.dropmenu}> <YoutubeFilled className="header-icon" /></a></div>
          <div className="header-icon-circle">
            <a href="https://www.linkedin.com/company/appnivi-it-solutions/" onClick={this.dropmenu}><LinkedinFilled className="header-icon" /></a></div>
        </div>
        </div>
      </Header>
    )
  }
}
export default headerstructure;