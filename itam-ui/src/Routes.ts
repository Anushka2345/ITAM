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
import About from "./Views/About";
import page1 from "./Views/page1";
import page2 from "./Views/page2";
import Page3 from "./Views/Page3";
// Dashboard
import Dashboard from "./Views/Dashboard";
// Pages
import BlankPage from "./Views/Pages/BlankPage";
import Page404 from "./Views/Pages/Page404";
import Page403 from "./Views/Pages/Page403";
import Page500 from "./Views/Pages/Page500";
import Login from "./Views/Pages/Login";
import register from "./Views/Pages/register";
import welcome from "./Views/Pages/welcome";

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
        path: "/pages",
        name: "Pages",
        icon: FileOutlined,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
        subMenu: [
            {
                path: "/pages/blank",
                name: "Blank Page",
                icon: MinusOutlined,
                component: BlankPage,
                layout: "/admin",
                isSidemenu: true,
            },
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
                path: "/register",
                name: "Logout",
                icon: MinusOutlined,
                component: register,
                layout: "/auth",
                isSidemenu: false,
            }
        ]
    },
    {
        path: "/page1",
        name: "Page1",
        icon: GithubOutlined,
        component: page1,
        layout: "/admin",
        isSidemenu: true,
    },
     {
        path: "/page2",
        name: "Page2",
        icon: GithubOutlined,
        component: page2,
        layout: "/admin",
        isSidemenu: true,
    },
     {
        path: "/Page3",
        name: "Page3",
        icon: GithubOutlined,
        component: Page3,
        layout: "/admin",
        isSidemenu: true,
    },
     {
        path: "/about",
        name: "About",
        icon: GithubOutlined,
        component: About,
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
        path: "/register",
        name: "Logout",
        icon: MinusOutlined,
        component: register,
        layout: "/auth",
        isSidemenu: false,
    }

]

export default Routes;