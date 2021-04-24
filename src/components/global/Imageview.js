import React from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Carousel } from 'antd';
const { Component } = require("react")
const CarouselImageStyle = {
  width: "100%",
  height: "550px",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat"
}
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const holder = {
  overflow: "hidden",
  height: "700px"
}
class Imageview extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Carousel  autoplay="true" className="imageview-carousel">
        <div >
          <div className="imageview-carousel-image" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(" + this.props.image[2] + ")" }} />
        </div>
        <div >
          <div className="imageview-carousel-image" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(" + this.props.image[1] + ")" }} />
        </div>
        <div >
          <div className="imageview-carousel-image" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(" + this.props.image[0] + ")" }} />
        </div>

      </Carousel>
    )
  }
}
export default Imageview;