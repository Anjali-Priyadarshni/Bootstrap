import Imgslider from "./CarousalEx";
import img1 from '../Demo/img1.jpg';
import img2 from '../Demo/img2.jpg';
import img3 from '../Demo/img3.jpg';
import img4 from '../Demo/img4.jpg';
import img5 from '../Demo/img5.jpg';


 function Image (){

     const images =
    
    [
        {
            id: 1,
            src: img1,
            alt: "image1",
            title:"WoodPaint"
        },
    
        {
            id: 2,
            src:img2,
            alt:"image2",
            title: "WoodPaint"
        },
    
        {
            id: 3,
            src: img3,
            alt: "image3",
            title:"Paint"
        },
    
        {
            id:4,
            src: img4,
            alt: "image4",
            title:"NaturePaint"
        },
    
        {
            id:5,
            src: img5,
            alt: "image5",
            title:"Paint"
        }
    ]
    return(
        <div>
            <Imgslider images={images}></Imgslider>
        </div>
    )
 }
 export default Image;
   
   
    

