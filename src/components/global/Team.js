import React, { Component } from 'react';
class Team extends Component {
    render() {
        return (
            <div className="team-content">
                <h1>MEET THE TEAM</h1>
                <div className="team-main">
                    <div className="team-figure">
                        <div className="team-pic-wrapper">
                        <div className="team-box" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(assets/images/team/jeena.jpeg)", backgroundSize: "100% 100%" }} />
                        </div><h4>JATIN JEENA</h4>
                        <h6 style={{textTransform:"capitalize"}}>backend developer</h6>
                    </div>
                    <div className="team-figure">
                    <div className="team-pic-wrapper">
                        <div className="team-box" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(assets/images/team/avneet.jpeg)", backgroundSize: "100% 100%" }} />
                        </div><h4 style={{textTransform:"uppercase"}}>avneet kaur</h4>
                        <h6 style={{textTransform:"capitalize"}}>front-End developer</h6>
                    </div>
                    <div className="team-figure">
                    <div className="team-pic-wrapper">
                        <div className="team-box" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(assets/images/team/marshi.jpg)", backgroundSize: "100% 100%" }} />
                        </div><h4 style={{textTransform:"uppercase"}}>marshi shastri</h4>
                        <h6 style={{textTransform:"capitalize"}}>backend developer</h6>
                    </div>
                    <div className="team-figure">
                    <div className="team-pic-wrapper">
                        <div className="team-box" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(assets/images/team/pratyush.jpeg)", backgroundSize: "100% 100%" }} />
                        </div><h4 style={{textTransform:"uppercase"}}>pratyush aswal</h4>
                        <h6 style={{textTransform:"capitalize"}}>front-End developer</h6>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;