import React, { Component } from 'react';
import Display from '../global/Display';
class Service extends Component {
    render() {
        return (
            <div style={{ height: "fit-content", backgroundColor: "white" }}>

                <Display image={[
                    "assets/images/services/1.jpg",
                    "assets/images/services/2.jpg",
                    "assets/images/services/3.jpg"
                ]
                }
                    text2={[
                        <div>
                            <h1>Web Development</h1>
                            <p >Get intuitive UI/UX designs, high fidelity wireframes, customized and elegant websites for all business purposes.Build your brand and increase your customer engagement with your website today. </p>
                        </div>
                    ]
                    }
                    text1={[
                        <div>
                            <h1>Mobile App Development</h1>
                            <p >We provide engaging and powerful mobile application services starting from design, development, testing, and support. 
We focus on creating feature-rich android and ios apps for a customer or an enterprise at cost-effective rates</p>

                        </div>
                    ]} 
                    text3={[
                            <div>
                            <h1>Software Development</h1>
                            <p >We offer optimized software solutions flexible with changing technology and business goals. 
We are customer-centric and continuously work towards delivering and leveraging the best possible solutions for our clients.</p>

                        </div>
                        ]}/>
            </div>
        )
    }
}
export default Service;