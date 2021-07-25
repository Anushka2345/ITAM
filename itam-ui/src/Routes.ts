/*
    Routes belongs in this file. use 'isSidemenu' if you want the route to show in sidebar.
    Use @ant-design/icons for the icon in sidebar.
    You can change the code in Sidebar.tsx
*/
import {
    AppstoreOutlined,
    MinusOutlined,
    FileOutlined,
    GithubOutlined,
} from "@ant-design/icons"
// type for route
import {RouteType} from "./Models"
// About
import UDP from './Views/UDP'
import TCP from './Views/TCP'
import Stats from "./Views/DeviceStats";
import HostDetails from "./Views/HostDetails";
// Dashboard
import Dashboard from "./Views/Dashboard";
// Pages
import Page404 from "./Views/Pages/Page404";
import Page403 from "./Views/Pages/Page403";
import Page500 from "./Views/Pages/Page500";
import Login from "./Views/Pages/Login";
import register from "./Views/Pages/register";


const Routes: RouteType[] = [
    // Default 404 Not Found Page

    {
        path: "/error/404",
        name: "Dashboard",
        icon: AppstoreOutlined,
        component: Page404,
        layout: "/admin",
        isSidemenu: false,
    },
    {
        path: "/index",
        name: "Dashboard",
        icon: AppstoreOutlined,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        path: "/profile",
        name: "Profile",
        icon: AppstoreOutlined,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        path: "/pages",
        name: "Pages",
        icon: FileOutlined,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: false,
        subMenu: [
            {
                path: "/pages/404",
                name: "404",
                icon: MinusOutlined,
                component: Page404,
                layout: "/admin",
                isSidemenu: true,
            },

            {
                path: "/pages/500",
                name: "500",
                icon: MinusOutlined,
                component: Page500,
                layout: "/admin",
                isSidemenu: true,
            },
            {
                path: "/pages/403",
                name: "403",
                icon: MinusOutlined,
                component: Page403,
                layout: "/admin",
                isSidemenu: true,
            },
            {
                path: "/login",
                name: "Login",
                icon: MinusOutlined,
                component: Login,
                layout: "/auth",
                isSidemenu: false,
            },
            {
                path: "/login",
                name: "Logout",
                icon: MinusOutlined,
                component: Login,
                layout: "/auth",
                isSidemenu: false,
            }
        ]
    },
    {
        path: "/devicesDiscovered",
        name: "Daily Scan Devices",
        icon: GithubOutlined,
        component: Stats,
        layout: "/admin",
        isSidemenu: false,
    },
    {
        path: "/hostDetails",
        name: "Host Details",
        icon: GithubOutlined,
        component: HostDetails,
        layout: "/admin",
        isSidemenu: false,
    },
    {
        path: "/tcp",
        name: "TCP Details",
        icon: GithubOutlined,
        component: TCP,
        layout: "/admin",
        isSidemenu: false,
    },
    {
        path: "/udp",
        name: "UDP Details",
        icon: GithubOutlined,
        component: UDP,
        layout: "/admin",
        isSidemenu: false,
    },
    {
        path: "/login",
        name: "Login",
        icon: MinusOutlined,
        component: Login,
        layout: "/auth",
        isSidemenu: false,
    },
    {
        path: "/register",
        name: "Register",
        icon: MinusOutlined,
        component: register,
        layout: "/auth",
        isSidemenu: false,
    },
    {
        path: "/login",
        name: "Logout",
        icon: MinusOutlined,
        component: Login,
        layout: "/auth",
        isSidemenu: true,
    },
]

// @ts-ignore
export default Routes;