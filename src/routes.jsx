import Home from "./page/Home/Home";
import Location from "./page/location/Location";
import Shop from "./page/Shop/Shop";
import Shopping from "./page/Shopping/Shopping";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Location" , element:<Location/>},
    {path:"/Shop" , element:<Shop/>},
    {path:"/Shopping" , element:<Shopping/>},
]

export default routes;