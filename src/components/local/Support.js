import React, { Component } from 'react';
import { MailFilled, InteractionFilled, PhoneFilled, HomeFilled, TwitterCircleFilled, InstagramFilled, GithubFilled, LinkedinFilled, FacebookFilled } from '@ant-design/icons';
import { Form, Input, Button, Radio } from 'antd';
import { message } from 'antd';
class Support extends Component {
    contactus = (values) => {
        console.log(values)
        var formData = new FormData();
        formData.append("fromEmail", values.email)
        formData.append("fromName", values.name)
        formData.append("toName", "online-sales")
        formData.append("toEmail", "namankumar@appnivi.com")
        formData.append('message', values.description)
        fetch("https://appnivi.com/server/v1/mail/sendWorksContactMail", {
            method: "POST",
            body: formData,
          })
          .then((response) => response.json())
        .then((response) => {
            console.log(response)
            if(response.error == false){
                message.success("Thank You Contacting Us. We will reply you soon.")
            }
            else{
                message.error("Error in sending mail.Please try again.")
            }
        })
        .catch((err) => {
            console.log(err);
        });

    }
    render() {
        return (<div className="pad-div" style={{ backgroundColor: "white" }}>
            <div className="goods-pic responsive-pic" id="good-pic" >

            </div>
            <div className="support-container">

                <div className="support-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110586.15867396198!2d78.06854056607393!3d29.98467561769372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU2JzA0LjUiTiA3OMKwMDQnMTMuMiJF!5e0!3m2!1sen!2sin!4v1598986357560!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div id="contact-form-detail" class="support-contact">
                    <Form
                        layout="vertical"
                        onFinish={this.contactus}
                    >

                        <Form.Item label="Name" name="name" required>
                            <Input placeholder="Enter Your Name" />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input placeholder="Enter Your Email" />
                        </Form.Item>
                        <Form.Item label="Description" name="description" >
                            <Input.TextArea placeholder="Your message" style={{ height: "100px" }} />
                        </Form.Item>
                        <Form.Item style={{ textAlign: "center" }}>
                            <Button type="primary" htmlType="submit" >Submit</Button>
                        </Form.Item>
                    </Form>
                    {/* <h4 style={{ fontSiz: "60px" ,textDecoration:"underline"}}>Contact Us</h4>
                    <p style={{ lineHeight: "30px", fontSize: "26px",color:"#333" }}><MailFilled /> naman233848@gmail.com</p>
                    <p style={{ lineHeight: "30px", fontSize: "26px",color:"#333" }}><HomeFilled /> shivalik nagar,Haridwar</p>
                    <p style={{ lineHeight: "30px", fontSize: "26px",color:"#333" }}><PhoneFilled /> +919568866332</p>
                    <p style={{ lineHeight: "30px", fontSize: "26px",color:"#333" }}><InteractionFilled /> <a href="https://www.appnivi.com/">appnivi.com</a></p>
                    <span style={{ fontSize: "40px" ,marginTop:"20px",display:"block",fontWeight:"bold",lineHeight:"40px"}}>Our Social Link</span>
                    <span className="social-icon"><TwitterCircleFilled /></span>
                    <span className="social-icon"><InstagramFilled /></span>
                    <span className="social-icon"><GithubFilled /></span>
                    <span className="social-icon"><LinkedinFilled /></span>
                    <span className="social-icon"><FacebookFilled /></span> */}

                </div>
            </div>
        </div>
        )
    }
}
export default Support;