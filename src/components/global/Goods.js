import React, { Component } from 'react';
import { CheckOutlined } from '@ant-design/icons';
class Goods extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="good-container">
                {this.props.text}
                {/* <div className="goods-pic" id="good-pic">

                </div> */}
                <div className="goods-items">
                    {this.props.text2}

                </div>
                <div className="good-pricing">
                    <div className="good-pricing-container">
                        {this.props.text3}
                        {this.props.text4}
                        {this.props.text5}
                    </div>
                </div>
            </div>
        )
    }
}
export default Goods;