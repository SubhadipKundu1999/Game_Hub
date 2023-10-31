import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import GameDetails from "./Pages/GameDetails";
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