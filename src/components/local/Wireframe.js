import React, { Component } from 'react';
import { Carousel } from 'antd';
import Display from '../global/Display';
class Wireframe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="wireframe-carousel">
          <Carousel autoplay="true" className="imageview-carousel" >
            <div >
              <div className="imageview-carousel-image" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(" + this.props.image[2] + ")" }} />
            </div>
            <div >
              <div className="imageview-carousel-image" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(" + this.props.image[1] + ")" }} />
            </div>
            <div >
              <div className="imageview-carousel-image" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(" + this.props.image[0] + ")" }} />
            </div>

          </Carousel></div>
        <div className="display-container">
          <div className="wireframe-text">
            <h1>Purpose of Wireframing</h1>
              <p>One of the great advantages of wireframing is that it provides an early visual that can be used to review with the client. 
Users can also review it as an early feedback mechanism for prototype usability tests. Not only are wireframes easier to amend than concept designs, once approved by 
the client and the users they provide confidence to the designer. Therefore, wireframes keep the concept user-focused.
Wireframing specific features will clearly communicate to your clients how they’ll function and what purpose they’ll serve. 
Wireframes clarify and define website features as it enables all stakeholders to gauge how much space will need to be allocated for each feature, 
connect the site’s information architecture to its visual design, and clarify the page’s functionality.</p>
<h1>Need of Wireframing</h1>
<p> Wireframes should be used early in a project to get user and client approval on the layout of key pages and the navigation. This will provide the project team, 
specifically the designers, confidence in moving forward. Wireframes will also save considerable time and money in the testing and amends phase later in the project.
They may seem basic enough to be overlooked, but wireframes will enable you to get vital user, client, and stakeholder approval when it comes to the layout and navigation 
of the product’s key pages. Armed with this approval, you can move forward with the confidence that you’re designing something that your clients and users will love. 
The bonus? Wireframes save heaps of time and money in the long run!</p>
<p>We offer intuitive UI/UX designs and high fidelity wireframes for all types of applications. Our team of UI designers having expertise in website development 
technologies makes sure to deliver best UI designs for all screen sizes so that your application looks excellent when viewed on mobiles, tablets, laptops and pcs.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Wireframe;