import { useState } from 'react';

import "./style.scss";

const Product = (props) => {
    const [selectedSku, setSelectedSku] = useState(0);

    return (
        <div className="product">
            <a href={props.url}>
                <div className="product-img">
                    <img src={props.img} alt={props.name} width="100%" />
                </div>
            </a>
            <div className="product-section">
                <div className="product-section-infos">
                    <div className="product-section-skus">
                        {
                            props.colors.map((color, index) => {
                                return (
                                    <div 
                                        className={`product-section-skus-item${selectedSku === index ? ' product-section-skus-item--active' : ''}`}
                                        key={index} 
                                        style={{background: color}}
                                        onClick={() => setSelectedSku(index)} 
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="product-section-price">
                        <p>{props.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <div className="product-section-name">
                        <p>{props.name}</p>
                    </div>
                    <div className="product-section-description">
                        <p>{props.description}</p>
                    </div>
                </div>
                <button className="product-section-addToCart" title="Adicionar">
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default Product;