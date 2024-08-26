import Home from "./page/Home/Home";
import Location from "./page/location/Location";
import Shop from "./page/Shop/Shop";
import Shopping from "./page/Shopping/Shopping";
import Favorite from "./page/Favorite/Favorite";
import Profiles from "./page/Profiles/Profiles";
import ShopDetails from './page/ShopDetails/ShopDetails';
import LoginRegister from "./page/LoginRegister/LoginRegister";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Location" , element:<Location/>},
    {path:"/Shop" , element:<Shop/>},
    {path:"/Shopping" , element:<Shopping/>},
    {path:"/Favorite" , element:<Favorite/>},
    {path:"/Profiles" , element:<Profiles/>},
    {path:"/Shop-d" , element:<ShopDetails/>},
    {path:"/LoginRegister" , element:<LoginRegister/>},
]

export default routes;