//pages
import Home  from "../pages/Home"
import  User from "../pages/User"
import Error404 from "../pages/Error404"
import LayoutBasic from "../layouts/LayoutBasic"


const routes = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
        exact: true
    },
    {
        path: "/:username",
        component: User,
        layout: LayoutBasic,
        exact: true
    },
    {
        component: Error404,
        layout: LayoutBasic
    },
]

export default routes


