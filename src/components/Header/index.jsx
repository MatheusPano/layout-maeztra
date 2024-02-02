import useWindowWidth from '../WindowWidth/index';

import HeaderDesktop from "./components/desktop";
import HeaderMobile from "./components/mobile";
import MenuItem from "../MenuItem/index";

import dress from "../../assets/icon-dress.svg";

import "./style.scss";

const Header = () => {
  const { width } = useWindowWidth();

  return (
    <header className="header">
      <div className="header-top-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>
      {width > 1024 ? <HeaderDesktop /> : <HeaderMobile />}
      {
        width > 1024 && (
          <div className="header-menu">
            <MenuItem label="Novidades" link="#" highlight={dress} />
            <MenuItem label="Vestidos" link="#" />
            <MenuItem label="Roupas" link="#" />
            <MenuItem label="Sapatos" link="#" />
            <MenuItem label="Lingerie" link="#" />
            <MenuItem label="Acessórios" link="#" />
            <MenuItem label="OUTLET" link="#" />
          </div>
        )
      }
    </header>
  );
};

export default Header;
