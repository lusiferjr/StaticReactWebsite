import React, { Component } from 'react';
class Video extends Component {
    render() {
        return (
            <div className="display-wrap pad-div">
                <div className="display-container">
                <div className="rescue-div">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ShxAgYwRIMg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="video-text">
                        {this.props.text1}
                    </div>

                    <div className="video-pic">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ShxAgYwRIMg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="display-container">
                <div className="rescue-div">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/19IBLyZ9ki4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="video-text">
                        {this.props.text2}
                    </div>

                    <div className="video-pic">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/19IBLyZ9ki4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="display-container">
                <div className="rescue-div">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/19IBLyZ9ki4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="video-text">
                        {this.props.text3}
                    </div>

                    <div className="video-pic">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/19IBLyZ9ki4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
export default Video;
