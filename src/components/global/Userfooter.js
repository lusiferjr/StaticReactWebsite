import { Menu, Layout } from 'antd';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Userfooter extends Component {
    toggle(a) {
        var item = document.getElementById("menu" + a);
        if (item.style.display == "block") {
            item.style.transition = "all 0.9s";
            item.style.display = "none";
        }
        else {
            item.style.display = "block";
            item.style.transition = "all 0.9s";
        }

    }
    render() {
        return (
            <div className="footer-container">
                <div className="responsive-footer">
                    <div className="responsive-footer-menu" onClick={() => this.toggle("1")}>Live Work</div>
                    <div className="responsive-footer-submenu" id="menu1">
                        <div className="responsive-footer-link"><a href="http://hungertables.in/" style={{ color: "white" }}>Hungertables</a></div>
                        <div className="responsive-footer-link"><a href="http://onepercent-cg.com/" style={{ color: "white"}}></a>onepercent-cg</div>
                        <div className="responsive-footer-link"><a href="http://ironfists.in/" style={{ color: "white" }}>Ironfists</a></div>
                    </div>
                    <div className="responsive-footer-menu" onClick={() => this.toggle("2")}>Checkout</div>
                    <div className="responsive-footer-submenu" id="menu2">
                        <div className="responsive-footer-link"><Link to="/blog" style={{ color: "white" }}>Blogs</Link></div>
                        <div className="responsive-footer-link"><Link to="/wireframe" style={{ color: "white" }}>Wireframe</Link></div>
                        <div className="responsive-footer-link"><Link to="/video" style={{ color: "white" }}>Video</Link></div>
                        <div className="responsive-footer-link"><Link to="/team" style={{ color: "white" }}>AppNivi Teams</Link></div>
                    </div>
                    <div className="responsive-footer-menu" onClick={() => this.toggle("3")}>Quick Links</div>
                    <div className="responsive-footer-submenu" id="menu3">
                        <div className="responsive-footer-link"><Link to="/service" style={{ color: "white" }}>Services</Link></div>
                        <div className="responsive-footer-link"><Link to="/support" style={{ color: "white" }}>Support</Link></div>
                        <div className="responsive-footer-link"><Link to="/upcoming" style={{ color: "white" }}>Upcomings</Link></div>
                    </div>
                    <div className="responsive-footer-menu" onClick={() => this.toggle("4")}>Media Links</div>
                    <div className="responsive-footer-submenu" id="menu4">
                        <div className="responsive-footer-link"><a href="https://www.instagram.com/appnivi/?hl=en" style={{color:"white"}}>Instagram</a></div>
                        <div className="responsive-footer-link"><a href="https://www.facebook.com/appnivi" style={{color:"white"}}>Facebook</a></div>
                        <div className="responsive-footer-link"><a href="https://www.youtube.com/channel/UC3PIMMKZiPL7PDX-LAcvk1A" style={{color:"white"}}>Youtube</a></div>
                        <div className="responsive-footer-link"><a href="https://www.linkedin.com/company/appnivi-it-solutions/" style={{color:"white"}}>LinkedIn</a></div>
                    </div>

                </div>
                <div className="footer-firstpart">
                    <div className="footer-sectioncover">
                    <div className="footer-section">

                        {/* <div style={{height:"30px",width:"100%",paddingLeft:"10px",color:"white",fontSize:"18px",marginBottom:"10px",fontWeight:"500"}}><Link to="/product" style={{color:"white"}}>website</Link></div> */}
                        <div className="footer-section-head">Live Works</div>
                        <div className="footer-section-option"><a href="http://hungertables.in/" style={{ color: "white" }}>Hungertables</a></div>
                        <div className="footer-section-option"><a href="http://onepercent-cg.com/" style={{ color: "white" }}>onepercent-cg</a></div>
                        <div className="footer-section-option"><a href="http://ironfists.in/" style={{ color: "white" }}>Ironfists</a></div>

                    </div>
                    <div className="footer-section" >

                        <div className="footer-section-head">Checkout</div>
                        <div className="footer-section-option"><Link to="/blog" style={{ color: "white" }}>Blogs</Link></div>
                        <div className="footer-section-option"><Link to="/wireframe" style={{ color: "white" }}>Wireframes</Link></div>
                        <div className="footer-section-option"><Link to="/video" style={{ color: "white" }}>Video</Link></div>
                        <div className="footer-section-option"><Link to="/team" style={{ color: "white" }}>AppNivi Team</Link></div>

                    </div>
                    <div className="footer-section" >

                        <div className="footer-section-head">Quick Links</div>

                        <div className="footer-section-option"><Link to="/service" style={{color:"white"}}>Services</Link></div>
                        <div className="footer-section-option"><Link to="/support" style={{color:"white"}}>Support</Link></div>
                        <div className="footer-section-option"><Link to="/upcoming" style={{color:"white"}}>Upcomings</Link></div>
                        {/* <div style={{height:"30px",width:"100%",paddingLeft:"10px",color:"white"}}>PRODUCTS</div> */}

                    </div>
                    <div className="footer-section" >

                        <div className="footer-section-head">  Media Links</div>
                        <div className="footer-section-option"><a href="https://www.instagram.com/appnivi/?hl=en" style={{color:"white"}}>Instagram</a></div>
                        <div className="footer-section-option"><a href="https://www.facebook.com/appnivi" style={{color:"white"}}>Facebook</a></div>
                        <div className="footer-section-option"><a href="https://www.youtube.com/channel/UC3PIMMKZiPL7PDX-LAcvk1A" style={{color:"white"}}>Youtube</a></div>
                        <div className="footer-section-option"><a href="https://www.linkedin.com/company/appnivi-it-solutions/" style={{color:"white"}}>LinkedIn</a></div>

                    </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <h6 style={{ color: "white" }}>Copyright © 2020 appnivi product website All rights reserved. <br/>We recommend using latest browser version.</h6>
                    
                    
                    <a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=7662866&style=0006&nbdigits=5&type=ip&initCount=0" title="Total Website Hits" Alt="Web Hits"   border="0" style={{display:"none"}} /></a>       

                </div>
                
<a href="https://www.webfreecounter.com/" target="_blank"><img src="https://www.webfreecounter.com/hit.php?id=grrfapka&nd=6&style=2" border="0" alt="free counter" style={{display:"none"}}/></a>

            </div>
        )
    }
}
export default Userfooter;