import React,{ Component} from 'react'
import Products from '../global/Product'
class Homeproduct extends Component{
    render(){
        return(
            <Products proimage={
                [
                    "assets/images/products/1.jpg",
                    "assets/images/products/2.jpg",
                    "assets/images/products/3.jpg",
                    "assets/images/products/4.jpg"
                ]}
                motoimage={
                    "assets/images/products/moto.jpg"
                }
                seimage={[
                    "assets/images/products/s1.jpg",
                    "assets/images/products/s2.jpg"
                ]
                }
                otherimage={
                    [
                        "assets/images/products/p1.jpg",
                        "assets/images/products/p2.jpg",
                        "assets/images/products/p3.jpg",
                        "assets/images/products/p4.jpg"
                    ]
                }/>
        )
    }
}
export default Homeproduct;