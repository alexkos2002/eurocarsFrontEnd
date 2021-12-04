import VueRouter from "vue-router";

import AllUsers from "../components/AllUsers";
import HomeSelling from "../components/HomeSelling";
import HomeRental from "../components/HomeRental";
import Login from "../components/Login"
import Registration from "../components/Registration"
import Error403 from "../components/Error403"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/user',
            name: 'allUsers',
            component: AllUsers
        },
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
        }
    ]
})