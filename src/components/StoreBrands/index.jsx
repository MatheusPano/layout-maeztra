import brand1 from "../../assets/brand-1.png";
import brand2 from "../../assets/brand-2.png";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";
import brand5 from "../../assets/brand-5.png";

import "./style.scss";

const StoreBrands = () => {

  return (
    <div className="home-storeBrands container">
        <h2>Marcas Parceiras</h2>
        <div className="home-storeBrands-content">
            <div className="home-storeBrands-content-card">
                <img src={brand1} alt="Logo de marca" />
            </div>
            <div className="home-storeBrands-content-card">
                <img src={brand2} alt="Logo de marca" />
            </div>
            <div className="home-storeBrands-content-card">
                <img src={brand3} alt="Logo de marca" />
            </div>
            <div className="home-storeBrands-content-card">
                <img src={brand4} alt="Logo de marca" />
            </div>
            <div className="home-storeBrands-content-card">
                <img src={brand5} alt="Logo de marca" />
            </div>
        </div>
    </div>
  );
};

export default StoreBrands;