import React, { Component } from 'react'
import { CheckOutlined } from '@ant-design/icons';
import Products from '../global/Product'
import Goods from '../global/Goods';
import { Link } from 'react-router-dom'
class Foodordering extends Component {
    render() {
        return (
            <Goods text={
                <div className="goods-pic" id="food-pic">

                </div>
            }
                text2={<div className="goods-features">
                    <div className="feature-heading">Features and pricing</div>
                    <p>Our Food Ordering website allows a user to show there Resturant/Food delivery business online and reach out to more customers. It allows multiple users to contact you.The different sections inlcudes:
                        <ul>
                            <li>Lannding page </li>
                            <li>Restaurant Menu</li>
                            <li>Packages</li>
                            <li>Offers</li>
                            <li>Your Services Page</li>
                            <li>Terms and Conditions polices</li>
                            <li>About us</li>
                            <li>Contact Form</li>
                        </ul>
                        Below are the plans with different features including custom views and content managment.
                    </p>
                </div>}
                text3={
                    <div className="good-pricing-left">

                        <div className="good-pricing-heading">BASIC</div>
                        <div className="good-pricing-saving">₹30k</div>
                        <div className="good-pricing-content">It includes all the sections listed above<br />
                            <CheckOutlined className="pricing-cart-icons" />Lannding Page<br />
                            <CheckOutlined className="pricing-cart-icons" />Resturant Menus<br />
                            <CheckOutlined className="pricing-cart-icons" />Packages<br />
                            <CheckOutlined className="pricing-cart-icons" />Visitors can Contact via Email<br />
                            <CheckOutlined className="pricing-cart-icons" />Delivery on Call<br />
                            <CheckOutlined className="pricing-cart-icons" />Contact Form<br />
                            {/* <CheckOutlined className="pricing-cart-icons" />8.1X Allocated Resources<br />
                            <CheckOutlined className="pricing-cart-icons" />9.Free SSL Certificate<br />
                            <CheckOutlined className="pricing-cart-icons" />10.Limited Bandwidth (100 GB)<br />
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
                    <div className="good-pricing-saving">₹80k</div>
                    <div className="good-pricing-content">It includes all the sections listed above<br />
                        <CheckOutlined className="pricing-cart-icons" />Online Payments<br />
                        <CheckOutlined className="pricing-cart-icons" />Push Notifications<br />
                         <CheckOutlined className="pricing-cart-icons" />Menu Management<br />
                         <CheckOutlined className="pricing-cart-icons" />Single Restaurant management<br />
                        <CheckOutlined className="pricing-cart-icons" />Admin dashboard <br />
                        <CheckOutlined className="pricing-cart-icons" />New order notification<br />
                        <CheckOutlined className="pricing-cart-icons" />insights of the sales and earnings<br />
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
                        <div className="good-pricing-saving">₹1.6L</div>
                        <div className="good-pricing-content">It includes all the sections listed above<br/>
                            <CheckOutlined className="pricing-cart-icons" />Delivery tracking<br />
                            <CheckOutlined className="pricing-cart-icons" />Online Payments<br />
                        <CheckOutlined className="pricing-cart-icons" />Push Notifications<br />
                            <CheckOutlined className="pricing-cart-icons" />Menu Management<br />
                            <CheckOutlined className="pricing-cart-icons" />Multiple restaurant management<br />
                            <CheckOutlined className="pricing-cart-icons" />Admin dashboard <br />
                            <CheckOutlined className="pricing-cart-icons" />User Panel<br />
                            <CheckOutlined className="pricing-cart-icons" />Delivery Boy Panel<br />
                            {/* <CheckOutlined className="pricing-cart-icons" /> 6.Unlimited Email Accounts<br />
                        <CheckOutlined className="pricing-cart-icons" />7.Unlimited Number of Websites<br />
                        <CheckOutlined className="pricing-cart-icons" />8.1X Allocated Resources<br />
                        <CheckOutlined className="pricing-cart-icons" />9.Free SSL Certificate<br />
                        <CheckOutlined className="pricing-cart-icons" />10.Limited Bandwidth (100 GB)<br />
                        <CheckOutlined className="pricing-cart-icons" />11.1 Email<br /> */}
                        </div>
                        <div className="good-pricing-footer">
                        <Link to="/support"><div className="good-pricing-button">
                                Buy Now
                        </div></Link>
                        </div>
                    </div>
                } />
        )
    }
}
export default Foodordering;