import React,{ Component} from 'react'
import Imageview from '../global/Imageview'
class Homeimage extends Component{
    render(){
        return(
            <Imageview image={[
                "assets/images/homepage/1.jpg",
                "assets/images/homepage/2.jpg",
                "assets/images/homepage/3.jpg",
                "assets/images/homepage/4.jpg"
            ]} />
        )
    }
}
export default Homeimage;