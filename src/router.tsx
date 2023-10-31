import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import GameDetails from "./GameDetails";
import AppLayout from "./AppLayout";



const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/games/:slug',
                element:<GameDetails/>
            }
        ]
    }
  
])

export default appRouter;