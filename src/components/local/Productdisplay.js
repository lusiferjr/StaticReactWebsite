import React, { Component } from 'react';
import Display from '../global/Display';
class Productdisplay extends Component {
    render() {
        return (
            <div style={{ height: "fit-content", backgroundColor: "white" }}>

                <Display image={[
                    "assets/images/products/1.jpg",
                    "assets/images/products/2.jpg"
                ]
                }
                    text2={[
                        <div>
                        <h1>Nivi Learn</h1>
                        <p >An online learning platform that brings together courses having impressive quality content along with certification offers.</p><p >Monitor your progress by keeping track of your course modules in your personalized dashboard in an organized way.</p><p > Learn and grow in a collaborative environment.</p>
                        </div>
                    ]
                    } 
                    text1={[
                        <div>
                            <h1>Nivi Share</h1>
                        <p >An online learning platform that brings together courses having impressive quality content along with certification offers.</p><p >Monitor your progress by keeping track of your course modules in your personalized dashboard in an organized way.</p><p > Learn and grow in a collaborative environment.</p>

                            </div>
                    ]}/>

            </div>
        )
    }
}
export default Productdisplay;