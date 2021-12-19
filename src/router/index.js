import VueRouter from "vue-router";

import AllManagers from "../components/AllManagers";
import AllUsers from "../components/AllUsers";
import HomeSelling from "../components/HomeSelling";
import HomeRental from "../components/HomeRental";
import Login from "../components/Login"
import Registration from "../components/Registration"
import Error403 from "../components/Error403"
import AdminRoom from "../components/AdminRoom"
import CreateManager from "../components/CreateManager"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home/selling',
            name: 'homeSelling',
            component: HomeSelling
        },
        {
            path: '/home/rental',
            name: 'homeRental',
            component: HomeRental
        },
        {
            path: '/auth/signin',
            name: 'login',
            component: Login
        },
        {
            path: "/auth/signup",
            name: "registration",
            component: Registration
        },
        {
            path: "/error/403",
            name: "error403",
            componennt: Error403
        },
        {
            path: "/room/admin",
            name: "adminRoom",
            component: AdminRoom
        },
        {
            path: '/manager',
            name: 'allManagers',
            component: AllManagers
        },
        {
            path: '/user',
            name: 'allUsers',
            component: AllUsers
        },
        {
            path: '/manager/create',
            name: 'createManager',
            component: CreateManager
        }
    ]
})