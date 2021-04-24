import React, { Component } from 'react'
import { CheckOutlined } from '@ant-design/icons';
import Products from '../global/Product'
import Goods from '../global/Goods';
import { Link } from 'react-router-dom'
class Portfolio extends Component {
    render() {
        return (
            <Goods text={
                <div className="goods-pic" id="portfolio-pic">

                </div>
            }
                text2={<div className="goods-features">
                    <div className="feature-heading">Features and pricing</div>
                    <p>Our Portfolio website inlcudes multiple sections to show your works, platforms,education and experience. It allows multiple users to contact you.The different sections inlcudes:
                        <ul>
                            <li>Lannding Section </li>
                            <li>Portfolio</li>
                            <li>Platform</li>
                            <li>About Me</li>
                            <li>Client Testimonial</li>
                            <li>Your Services Page</li>
                            <li>Bio (Education/ exprience)</li>
                            <li>Contact Form</li>
                        </ul>
                        Below are the plans with different features including custom views and content managment. 
                    </p>
                </div>}
                text3={
                    <div className="good-pricing-left">

                        <div className="good-pricing-heading">BASIC</div>
                        <div className="good-pricing-saving">₹5k</div>
                        <div className="good-pricing-content">It includes all the sections listed above <br />
                            <CheckOutlined className="pricing-cart-icons" />Landing Section <br />
                            <CheckOutlined className="pricing-cart-icons" />Portfolio<br />
                            <CheckOutlined className="pricing-cart-icons" />Platform<br />
                            <CheckOutlined className="pricing-cart-icons" />About Me<br />
                            <CheckOutlined className="pricing-cart-icons" />Client Testimonial<br />
                            <CheckOutlined className="pricing-cart-icons" />Your Services Page<br />
                            <CheckOutlined className="pricing-cart-icons" />Bio (Education/ exprience)<br />
                            <CheckOutlined className="pricing-cart-icons" />Contact Form<br />
                            {/* <CheckOutlined className="pricing-cart-icons" />10.Limited Bandwidth (100 GB)<br />
                            <CheckOutlined className="pricing-cart-icons" />11.1 Email<br /> */}
                        </div>
                        <div className="good-pricing-footer">
                        <Link to="/support"> <div className="good-pricing-button">
                                Buy Now
                        </div></Link>
                        </div>
                    </div>
                }
                text4={<div className="good-pricing-left">
                    <div className="good-pricing-heading">ADVANCED</div>
                    <div className="good-pricing-saving">₹12k</div>
                    <div className="good-pricing-content">It include all the features in basic plan with custom views as listed below<br />
                        <CheckOutlined className="pricing-cart-icons" />7 Landing sections<br />
                        <CheckOutlined className="pricing-cart-icons" />3 Portfolio sections<br/>
                        <CheckOutlined className="pricing-cart-icons" />3 Custom sections for your platfoms<br />
                        <CheckOutlined className="pricing-cart-icons" />5 About sections<br />
                        <CheckOutlined className="pricing-cart-icons" />List / grid view for testimonials<br />
                        <CheckOutlined className="pricing-cart-icons" />4 servicie sections<br />
                        <CheckOutlined className="pricing-cart-icons" />3 contact form<br />

                    </div>
                    <div className="good-pricing-footer">
                    <Link to="/support">  <div className="good-pricing-button">
                            Buy Now
                    </div></Link>
                    </div>
                </div>} 
                text5={
                    <div className="good-pricing-left">
                    <div className="good-pricing-heading">PRO</div>
                    <div className="good-pricing-saving">₹25k</div>
                    <div className="good-pricing-content">It include all the features in advanced plan with Content management system<br />
                        <CheckOutlined className="pricing-cart-icons" />Add Portfolio items<br />
                        <CheckOutlined className="pricing-cart-icons" />Update your Bio<br />
                        <CheckOutlined className="pricing-cart-icons" />Manage your works <br />
                        <CheckOutlined className="pricing-cart-icons" />Add client testimonial<br />
                        <CheckOutlined className="pricing-cart-icons" />Update your services<br />
                        <CheckOutlined className="pricing-cart-icons" />Add multiple platform<br />
                        <CheckOutlined className="pricing-cart-icons" />maps in contact form<br />
                        {/* <CheckOutlined className="pricing-cart-icons" />9.Free SSL Certificate<br />
                        <CheckOutlined className="pricing-cart-icons" />10.Limited Bandwidth (100 GB)<br />
                        <CheckOutlined className="pricing-cart-icons" />11.1 Email<br /> */}
                    </div>
                    <div className="good-pricing-footer">
                    <Link to="/support"> <div className="good-pricing-button">
                            Buy Now
                        </div></Link>
                    </div>
                </div>
                }/>
        )
    }
}
export default Portfolio;