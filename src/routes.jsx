import Home from "./page/Home/Home";
import Location from "./page/location/Location";
import Shop from "./page/Shop/Shop";
import Shopping from "./page/Shopping/Shopping";
import Favorite from "./page/Favorite/Favorite";
import Profiles from "./page/Profiles/Profiles";
import ShopDetails from './page/ShopDetails/ShopDetails';
import LoginRegister from "./page/LoginRegister/LoginRegister";
import Search from "./page/Search/Search";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Location" , element:<Location/>},
    {path:"/Shop" , element:<Shop/>},
    {path:"/Shopping" , element:<Shopping/>},
    {path:"/Favorite" , element:<Favorite/>},
    {path:"/Profiles" , element:<Profiles/>},
    {path:"/Shop-d/:id" , element:<ShopDetails/>},
    {path:"/LoginRegister" , element:<LoginRegister/>},
    {path:"/Search/:value" , element:<Search/>},
]

export default routes;