import React, { Component } from 'react'
import '../../index.css'
import { SettingOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
// const { Component } = require("react");
const threeproducts = {
    color: "white",
    WebkitTextStroke: "1px black"
}
const motoText = {

}
const textservice = {
    position: "relative",

    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    border: "1px solid white",
    height: "100px",
    width: "100px"
}
class Products extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="product">
                    <div className="product-inner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.props.proimage[1] + ")" }}>
                        <Link to="/portfolio">
                            <span className="product-inner-span" >
                                <h3 style={{ color: "white" }}>Portfolio Website</h3>
                                <h5 style={{ color: "#bfbfbf" }}>Get Recognition</h5>
                            </span>
                        </Link>
                    </div>
                    <div className="product-inner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(" + this.props.proimage[0] + ")" }}>
                        <Link to="/foodordering"> <span className="product-inner-span" >
                            <h3 style={{ color: "white" }}>Food Ordering Application</h3>
                            <h5 style={{ color: "#bfbfbf" }}>Your Food Cart</h5>
                        </span></Link>
                    </div>
                    <div className="product-inner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.props.proimage[2] + ")" }}>
                        <Link to="/blogandevent"> <span className="product-inner-span" >
                            <h3 style={{ color: "white" }}>Sports Academy Website</h3>
                            <h5 style={{ color: "#bfbfbf" }}>Manage Blogs / Event</h5>
                        </span></Link>
                    </div>
                    <div className="product-inner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.props.proimage[3] + ")" }}>
                        <Link to="/upcoming"><span className="product-inner-span" >
                            <h3 style={{ color: "white" }}>UpComing</h3>
                            <h5 style={{ color: "#bfbfbf" }}>Explore ideas</h5>
                        </span></Link>
                    </div>
                </div>
                <div className="moto" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(" + this.props.motoimage + ")" }} />
                <div className="service">
                    <div className="serviceInner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.props.seimage[0] + ")" }}>
                        <Link to="/service" style={{ color: "white" }}>
                            <span id="plusspan" className="service-inner-span" >
                                <PlusSquareOutlined id="plus" className="service-icon" />
                                <h3 style={{ color: "white" }}>Services</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="serviceInner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.props.seimage[1] + ")" }}>
                        <Link to="/support" style={{ color: "white" }}>
                            <span id="plusspan1" className="service-inner-span">
                                <SettingOutlined id="plus1" className="service-icon" />
                                <h3 style={{ color: "white" }}>Support &amp; Contact</h3>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="otherInfo">
                    <div className="otherInner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3)),url(" + this.props.otherimage[0] + ")" }}>
                        <Link to="/blog">
                            <span className="otherInfo-span" >
                                <h3 style={{ color: "white" }}>
                                    Blogs
                                </h3>
                            </span>
                        </Link>
                    </div>
                    <div className="otherInner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3)),url(" + this.props.otherimage[1] + ")" }}>
                        <Link to="/wireframe" >
                            <span className="otherInfo-span" >
                                <h3 style={{ color: "white" }}>
                                    WireFrames
                                </h3>

                            </span>
                        </Link>
                    </div>
                    <div className="otherInner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3)),url(" + this.props.otherimage[2] + ")" }}>
                        <Link to="/video">
                            <span className="otherInfo-span" >
                                <h3 style={{ color: "white" }}>
                                Videos
                                </h3>
                            </span>
                        </Link>
                    </div>
                    <div className="otherInner" style={{ backgroundImage: "linear-gradient(rgba(0,0,0, 0.3),rgba(0,0,0, 0.3)),url(" + this.props.otherimage[3] + ")" }}>
                        <Link to="/team" >
                            <span className="otherInfo-span" >
                                <h3 style={{ color: "white" }}>Meet Us</h3>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }

}
export default Products;