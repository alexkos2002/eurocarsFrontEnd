import VueRouter from "vue-router";

import AllUsers from "../components/AllUsers";
import HomeSelling from "../components/HomeSelling";
import HomeRental from "../components/HomeRental";
import Login from "../components/Login"
import Registration from "../components/Registration"

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
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: "/registration",
            name: "registration",
            component: Registration
        }
    ]
})