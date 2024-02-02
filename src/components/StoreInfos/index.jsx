import StoreInfo from "../StoreInfo/index";

import world from "../../assets/icon-world.svg";
import garage from "../../assets/icon-garage.svg";
import exchanges from "../../assets/icon-exchanges.svg";
import tag from "../../assets/icon-tag.svg";
import truck from "../../assets/icon-truck.svg";

import "./style.scss";

const StoreInfos = () => {

  return (
    <div className="container home-storeInfos">
        <h3>Por que comprar na Maeztra?</h3>
        <div className="home-storeInfos-content">
            <StoreInfo title="Produtos importados" subtitle="Produto de Alta Qualidade" icon={world} />
            <StoreInfo title="Estoque no Brasil" subtitle="Produtos mais perto de você!" icon={garage} />
            <StoreInfo title="Trocas Garantidas" subtitle="Trocas em até 48 horas, vejas as regras" icon={exchanges} />
            <StoreInfo title="Ganhe 5% off" subtitle="Pagando à vista no Cartão" icon={tag} />
            <StoreInfo title="Frete Grátis" subtitle="Em compras acima de R$ 499,00" icon={truck} />
        </div>
    </div>
  );
};

export default StoreInfos;