import React, { Component } from 'react';
class Blog extends Component {
    render() {
        return (
            <div className="pad-div">
                <div className="display-container">

                    <div className="first-pic" style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(" + this.props.image[0] + ")",
                    }}>
                    </div>
                    <div className="first-text">
                        {this.props.text1}
                    </div>
                </div>
                <div className="display-container">

                    <div className="first-pic" style={{

                        backgroundImage: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(" + this.props.image[1] + ")",

                    }}></div>
                    <div className="first-text">
                        {this.props.text2}
                    </div>
                </div>
                <div className="display-container">

                    <div className="first-pic" style={{

                        backgroundImage: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(" + this.props.image[2] + ")",

                    }}></div>
                    <div className="first-text">
                        {this.props.text3}
                    </div>
                </div>
                <div className="display-container">

                    <div className="first-pic" style={{

                        backgroundImage: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(" + this.props.image[3] + ")",
                    }}></div>
                    <div className="first-text">
                        {this.props.text4}
                    </div>
                </div>
            </div >
        )
    }
}
export default Blog;