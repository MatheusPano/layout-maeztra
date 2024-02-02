import useWindowWidth from "../WindowWidth/index";

import "./style.scss";

import banner from "../../assets/collection-banner.png";
import bannerDesktop from "../../assets/collection-banner-desktop.png";

const CollectionAbout = () => {
    const { width } = useWindowWidth();

    return (
        <div className="home-collectionAbout container">
            <div className="home-collectionAbout-infos">
                <h2>Lorem ipsum </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque.</p>
            </div>

            <div className="home-collectionAbout-img">
                {width < 1024 ? <img src={banner} width="100%" alt="Imagem da coleção" /> : <img src={bannerDesktop} width="100%" alt="Imagem da coleção" />}
            </div>
        </div>
    )
}

export default CollectionAbout;