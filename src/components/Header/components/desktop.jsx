import logo from "../../../assets/logo-header.svg";
import user from "../../../assets/icon-user.svg";
import heart from "../../../assets/icon-heart.svg";
import bag from "../../../assets/icon-shoppingbag.svg";

const HeaderDesktop = () => {
  return (
    <div className="header-content">
      <div className="container">
        <div className="header-content-logo">
          <img src={logo} width="147" alt="Maeztra Store" />
        </div>

        <div className="header-content-search">
          <input type="text" placeholder="O Que Você Busca?" />
          <button type="button" title="Buscar">Buscar</button>
        </div>

        <div className="header-content-interactive">
          <div className="header-content-interactive-account header-content-interactive-item">
            <a href="/" title="Minha conta">
              <img src={user} width="14" alt="Ícone de usuário" />
              <p>Minha Conta</p>
            </a>
          </div>

          <div className="header-content-interactive-wishlist header-content-interactive-item">
            <a href="/" title="Meus Favoritos">
              <img src={heart} width="18" alt="Ícone de coração" />
              <p>Meus Favoritos</p>
            </a>
          </div>

          <div className="header-content-interactive-cart header-content-interactive-item">
            <button title="Meu Carrinho">
              <img src={bag} width="14" alt="Ícone de sacola" />
              <p>Meu Carrinho</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
