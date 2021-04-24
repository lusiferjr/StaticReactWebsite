import React, { Component } from 'react';
import Display from '../global/Display';
class Applicaion extends Component {
    render() {
        return (
            <div className="application-main">

                <Display image={[
                    "assets/images/products/1.jpg",
                    "assets/images/products/2.jpg"
                ]
                }
                    text2={[
                        <div>
                        <h1>naman</h1>
                        <p >An online learning platform that brings together courses having impressive quality content along with certification offers.Monitor your progress by keeping track of your course modules in your personalized dashboard in an organized way. Learn and grow in a collaborative environment.</p>
                        </div>
                    ]
                    } 
                    text1={[
                        <div>
                            <h1>Nivi Share</h1>
                        <p >An online learning platform that brings together courses having impressive quality content along with certification offers.Monitor your progress by keeping track of your course modules in your personalized dashboard in an organized way. Learn and grow in a collaborative environment.</p>

                            </div>
                    ]}/>

            </div>
        )
    }
}
export default Applicaion;