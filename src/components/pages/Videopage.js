import React, { Component } from 'react'
import Video from '../local/video';
import { Layout } from 'antd';
import Headerstructure from '../global/Headerstructure';
import Userfooter from '../global/Userfooter'
const { Header, Footer, Content } = Layout;
class Videopage extends Component {
    render() {
        return (
            <Layout>

                <Content>
                    <Video
                        image={[
                            "assets/images/products/1.jpg",
                            "assets/images/products/2.jpg"
                        ]
                        }
                        text2={[
                            <div>
                                <h1>Hungertables</h1>
                                <p >AppNivi presents Food Ordering and Restaurant Application. Take your business online and reach out to more customers.<br />
Why do I need to take my restaurant online?<br />
1. Easy Menu Management<br />
2. Customer Registration and Login Management<br />
3. Customer Order History Management <br />
4. Increase customer engagement with offers and subscriptions<br />
5. Restaurant Booking Management<br />
6. Easy and Secure Payment Modes<br />
7. Sales Insights with Admin Dashboard<br />
8. Food Delivery Management with location tracking<br />
9. Increase in sales according to user preferences<br />
10. Keep things in track with Customer Feedback<br />
Contact teams@appnivi.com to get one for your restaurant/ food delivery business today.<br />
Customizations available according to your requirements.<br />
Contact us to know more about Admin/ User dashboard!<br />
To see our live work please visit :
                                    <a href="http://hungertables.in/">Hungertables.in</a></p>
                            </div>
                        ]
                        }
                        text1={[
                            <div>
                                <h1>Ironfists</h1>
                                <p >AppNivi presents the Martial Arts website.
Go online with our martial arts website, show your classes and schedules, share your knowledge via blogs, and introduce your team.
Get one for your own academy today!
Increase your connections and reach out to a larger audience.
Visit www.appnivi.com to get your website.<br />
The website will contain -<br />
1. Landing Page<br />
2. Programs Offered Page<br />
3. Upcoming Events Page<br />
4. Core Team Page<br />
5. Blogs Listing Page<br />
6. Blog Page<br />
7. Contact Page<br />
Customizations available according to your requirements.<br />
To see our live work please visit :
                                    <a href="www.ironfists.in">Ironfist.in</a></p>

                            </div>

                        ]} 
                        text3={[
                            <div>
                                <h1>onepercent-cg</h1>
                                <p >
                                Getting confused about where to show your stunning work? Dont be confused any more. <br />
Go online with your portfolio website with AppNivi.<br />
Increase your connections and get hired.<br />
Visit www.appnivi.com to get your portfolio.<br />
Your portfolio website will contain,<br />
1.  Landing Page<br />
2.  Portfolio section to show your work<br />
3.  About yourself (know me section)<br />
4.  Experience<br />
5.  Platforms you have worked on<br />
6.  Services you provide<br />
7.  Contact details<br />
8.  Social Links<br />
Customisation available according to your requirements.<br />
To see our live work please visit: <br />
<a href="http://www.onepercent-cg.com/">onepercent-cg.com</a></p>

                            </div>

                        ]} />
                </Content>

            </Layout>
        )
    }
}
export default Videopage;