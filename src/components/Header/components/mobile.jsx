import menu from '../../../assets/icon-menu.svg';
import bag from '../../../assets/icon-shoppingbagmobile.svg';
import logo from '../../../assets/logo-header.svg';
import search from '../../../assets/icon-busca.svg';

const HeaderMobile = () => {
    return (
        <div className="header-content">
            <div className="header-content-left">
                <button title="Menu" className="header-content-left-menu">
                    <img src={menu} width="24" alt="Ícone de menu" />
                </button>

                <div className="header-content-left-logo">
                    <img src={logo} width="110" alt="Maeztra Store" />
                </div>
            </div>

            <div className="header-content-right">
                <button title="Pesquisar" className="header-content-right-search">
                    <img src={search} width="24" alt="Ícone de pesquisa" />
                </button>
                <button title='Meu Carrinho' className="header-content-right-cart">
                    <img src={bag} width="21" alt="Ícone de sacola" />
                </button>
            </div>
        </div>
    )
}

export default HeaderMobile;