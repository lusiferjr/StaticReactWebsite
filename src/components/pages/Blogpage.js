import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Homeproduct from '../local/Homeproducts';
import Homeimage from '../local/Homeimage';
import Userfooter from '../global/Userfooter'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Blog from '../local/Blog';
const { Header, Footer, Content } = Layout;
class Blogpage extends Component {
    render() {
        return (
            <Layout>
                <Content>
            <Blog
            image={[
                "assets/images/obs.jpg",
                "assets/images/client.jpg",
                "assets/images/css.jpg",
                "assets/images/aws2.jpg"
            ]
            }
                text2={[
                    <div>
                    <h1>Client Server Program in Python</h1>
                    <p >Making a client server program in Python is now no more a stressing and confusing task. In this article, we will explain you step by step, 
how to make your own private chatroom by using sockets and client &amp; server functions in Python in a much easy and understandable way.
What are Sockets? Sockets are the endpoints of a bidirectional communication channel. They are used to send and receive data bi-directionally. 
Sockets may be implemented using different channel types TCP, UDP and so on. Sending and receiving of the data is done is bytes. 
Therefore encoding and decoding of the data is done before sending and receiving respectively. Python provides SOCKETS module to implement sockets.
<a href="http://appnivi.com/blog/client-server.html">Read more.</a></p>
                    </div>
                ]
                } 
                text1={[
                    <div>
                        <h1>Live Streaming with OBS</h1>
                    <p >Live streaming can be a strenuous and confusing task. In this article, we will show you step by step how to set up your own live stream.
Streaming can be done using your pc or by your mobile phone. In this article, we will go through an easy method to stream using your computer or laptop. 
In order to start a live stream you would need a stable internet connection to provide a smooth and good quality video stream to your viewers. 
Other then internet, you would need a high performance computer to handle the stress that you would put on your device while encoding the video for streaming platform.<a href="http://appnivi.com/blog/live-streaming-using-OBS.html">Read more.</a></p>

                        </div>
                ]}
                text3={[
                    <div>
                        <h1>Sliding background effect using CSS</h1>
                    <p >In this article, we will explain you step by step, how to implement cool css sliding animation using CSS in an easy way. Here is a nice hover effect which can be seen and 
is often used in a wide variety of websites.  The effect we have made here uses css properties and no frameworks like bootstrap.  If you are in a hurry or are here just 
for the functionality, let us begin with the non-aesthetic functionality only version. 
<a href="http://appnivi.com/blog/live-streaming-using-OBS.html">Read more.</a></p>

                        </div>
                ]}
                text4={[
                    <div>
                        <h1>Hosting website using nginx on AWS</h1>
                    <p >Hosting your website is the best way to show the world your talent. But hosting a website can be a stressing and confusing task. 
You have to make important decisions before hosting your website like what service to choose? Will that service have the support for the technology that 
is been used in that website?<a href="http://appnivi.com/blog/aws-ec2.html">Read more.</a></p>

                        </div>
                ]}/>
                </Content>

            </Layout>
        )
    }
}
export default Blogpage;