//import Slider from "react-slick";
import useWindowWidth from "../WindowWidth/index";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner from "../../assets/main-banner.png";
import bannerMobile from "../../assets/main-banner-mobile.png";

import "./style.scss";

const MainBanner = () => {
    const { width } = useWindowWidth();

    /*var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };*/
    


    return (
        <div className="home-mainBanner">
            <Carousel autoPlay={false} showArrows={true} showThumbs={false} >
                <div>
                    <img
                        src={width < 1024 ? bannerMobile : banner}
                        alt="Banner"
                    />
                </div>
                <div>
                    <img
                        src={width < 1024 ? bannerMobile : banner}
                        alt="Banner"
                    />
                </div>
                <div>
                    <img
                        src={width < 1024 ? bannerMobile : banner}
                        alt="Banner"
                    />
                </div>
            </Carousel>
            

            {/*<Slider {...settings}>
        {
          [...Array(5)].map((_, i) => {
            return (
              <div key={i} className="home-mainBanner-item">
                <img src={width < 1024 ? bannerMobile : banner} alt="Banner" />
              </div>
            )
          })
        }
      </Slider>*/}
        </div>
    );
};

export default MainBanner;
