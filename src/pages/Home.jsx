import MainBanner from "../components/MainBanner/index";
import StoreInfos from "../components/StoreInfos/index";
import StoreBrands from "../components/StoreBrands/index";
import Shelf from "../components/Shelf/index";
import CollectionAbout from "../components/CollectionAbout/CollectionAbout";
import PopUpNews from "../components/PopUpNews/index";

const Home = () => {
  return (
    <div className="home">
        <PopUpNews />
        <MainBanner />
        <StoreInfos />
        <StoreBrands />
        <Shelf />
        <CollectionAbout />
        
    </div>  
  );
};

export default Home;