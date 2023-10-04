
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../Demo/Style.css';


 
    const Imgslider = ({images})=>{
        const settings ={

            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 2000,
          };
    
          //console.log(settings);
          console.log(images)
    
          return(
             
                <div className="imgslider">
                    <Slider {...settings}>
                        {images.map((item) => (
                            <div key={item.id}>
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </Slider>
                    
            </div>
                    
        
            
            )
    }

export default Imgslider ;