import React, { Component } from 'react'
import { CheckOutlined } from '@ant-design/icons';
import Products from '../global/Product'
import Goods from '../global/Goods';
import { Link } from 'react-router-dom'
class Eventandblog extends Component {
    render() {
        return (
            <Goods text={
                <div className="goods-pic" id="event-pic">

                </div>
            }
                text2={<div className="goods-features">
                    <div className="feature-heading">Features and pricing</div>
                    <p>Our Sports Academy website allows a user to take there sports Academy business online.It has a perfect design for all types of academies . It allows multiple users to contact you.The different sections inlcudes:
                        <ul>
                            <li>Lannding page</li>
                            <li>Training programs/Classes page</li>
                            <li>Sports events page</li>
                            <li>Blogs Page</li>
                            <li>Groups</li>
                            <li>About us</li>
                            <li>Contact Form</li>
                        </ul>
                        Below are the plans with different features including custom views and content managment.
                    </p>
                </div>}
                text3={
                    <div className="good-pricing-left">

                        <div className="good-pricing-heading">Basic</div>
                        <div className="good-pricing-saving">₹15k</div>
                        <div className="good-pricing-content">It includes all the sections listed above<br />
                        <CheckOutlined className="pricing-cart-icons" />Lannding page<br />
                            <CheckOutlined className="pricing-cart-icons" />Training programs/Classes page<br />
                            <CheckOutlined className="pricing-cart-icons" />Sports events page<br />
                            <CheckOutlined className="pricing-cart-icons" />Blogs Pages<br />
                            <CheckOutlined className="pricing-cart-icons" />Classes/ Programs<br />
                            <CheckOutlined className="pricing-cart-icons" /> Groups<br />
                            <CheckOutlined className="pricing-cart-icons" />About us<br />
                            <CheckOutlined className="pricing-cart-icons" />Contact Form<br />
                            {/* <CheckOutlined className="pricing-cart-icons" />9.Delivery on Call<br />
                            <CheckOutlined className="pricing-cart-icons" />10.Restaurant management<br />
                            <CheckOutlined className="pricing-cart-icons" />11.1 Email<br /> */}
                        </div>
                        <div className="good-pricing-footer">
                            <Link to="/support"><div className="good-pricing-button">
                                Buy Now
                        </div></Link>
                        </div>
                    </div>
                }
                text4={<div className="good-pricing-left">
                    <div className="good-pricing-heading">STANADARD</div>
                    <div className="good-pricing-saving">₹35k/<sub>mo</sub></div>
                    <div className="good-pricing-content">It includes all the sections listed above<br />
                        <CheckOutlined className="pricing-cart-icons" />7 Landing Pages<br />
                        <CheckOutlined className="pricing-cart-icons" />3 Training programs/Classes pages<br />
                        <CheckOutlined className="pricing-cart-icons" />2 Sports events pages<br />
                        <CheckOutlined className="pricing-cart-icons" />4 Classes/ Programs pages<br />
                        <CheckOutlined className="pricing-cart-icons" />List / grid view for testimonials<br />
                        <CheckOutlined className="pricing-cart-icons" />2 Blogs<br />
                        <CheckOutlined className="pricing-cart-icons" />Content Management System<br />
                        {/* <CheckOutlined className="pricing-cart-icons" />9.Free SSL Certificate<br />
                        <CheckOutlined className="pricing-cart-icons" />10.Limited Bandwidth (100 GB)<br />
                        <CheckOutlined className="pricing-cart-icons" />11.1 Email<br /> */}
                    </div>
                    <div className="good-pricing-footer">
                        <Link to="/support"><div className="good-pricing-button">
                            Buy Now
                    </div></Link>
                    </div>
                </div>} 
                text5={
                    <div className="good-pricing-left">
                    <div className="good-pricing-heading">PRO</div>
                    <div className="good-pricing-saving">₹1.2L</div>
                    <div className="good-pricing-content">
                    It includes all the sections listed above<br />
                        <CheckOutlined className="pricing-cart-icons" />Payment Functionality<br />
                        <CheckOutlined className="pricing-cart-icons" />Student enrollment<br />
                        <CheckOutlined className="pricing-cart-icons" />Notice and classes Management<br />
                        <CheckOutlined className="pricing-cart-icons" />7 Landing Pages<br />
                        <CheckOutlined className="pricing-cart-icons" />3 Training programs/Classes pages<br />
                        <CheckOutlined className="pricing-cart-icons" />4 Classes/ Programs pages<br />
                        <CheckOutlined className="pricing-cart-icons" />Content Management System<br />
                        {/* <CheckOutlined className="pricing-cart-icons" />Notice and classes management<br />
                        <CheckOutlined className="pricing-cart-icons" />Students enrolment<br />
                        <CheckOutlined className="pricing-cart-icons" />Payment<br /> */}
                    </div>
                    <div className="good-pricing-footer">
                    <Link to="/support"><div className="good-pricing-button">
                            Buy Now
                        </div></Link>
                    </div>
                </div>
                }/>
        )
    }
}
export default Eventandblog;