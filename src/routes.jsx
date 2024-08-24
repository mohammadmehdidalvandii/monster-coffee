import Home from "./page/Home/Home";
import Location from "./page/location/Location";
import Shop from "./page/Shop/Shop";
import Shopping from "./page/Shopping/Shopping";
import Favorite from "./page/Favorite/Favorite";
import Profiles from "./page/Profiles/Profiles";


const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Location" , element:<Location/>},
    {path:"/Shop" , element:<Shop/>},
    {path:"/Shopping" , element:<Shopping/>},
    {path:"/Favorite" , element:<Favorite/>},
    {path:"/Profiles" , element:<Profiles/>},
]

export default routes;