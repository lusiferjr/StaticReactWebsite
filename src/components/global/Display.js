import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="display-wrap pad-div">
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
                    <div className="rescue-div" style={{

                        backgroundImage: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(" + this.props.image[1] + ")",

                    }} />
                    <div className="second-text">
                        {this.props.text2}
                    </div>
                    <div className="second-pic" style={{

                        backgroundImage: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(" + this.props.image[1] + ")",

                    }}>

                    </div>
                </div>
                <div className="display-container" style={{display:this.props.style}}>

                    <div className="first-pic" style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(" + this.props.image[2] + ")",
                    }}>
                    </div>
                    <div className="first-text">
                        {this.props.text3}
                    </div>
                </div>
            </div>
        )
    }
}
export default Display;