import React, { Component } from 'react';
import Display from '../global/Display';
class Upcoming extends Component {
    render() {
        return ( <div className = "upcomming-container" >

            <Display 
            style={"none"}
            image = {
                [
                    "assets/images/nivilearn.gif",
                    "assets/images/nivishare.gif"
                ]
            }
            text2 = {
                [ <div>
                    <h1 > Nivi Share </h1> 
                    <p > It is a fast, secure file sharing tool that allows the transfer of files up to 2GB. Use Nivi Share if you are tired of facing the problem of restrictions being 
imposed on the size of the file in email attachments. To share just upload the file, copy the generated link and share it with your team.</p> 
                    </div>
                ]
            }
            text1 = {
                [ <div>
                    <h1> Nivi Learn </h1> 
                    <p> An online learning platform that brings together courses having impressive quality content along with certification offers. 
Monitor your progress by keeping track of your course modules in your personalized dashboard in an organized way. Learn and grow in a collaborative environment.
</p>

                    </div>
                ]
            }
            />

            </div>
        )
    }
}
export default Upcoming;