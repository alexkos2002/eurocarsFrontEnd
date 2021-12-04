<template>
    <div class="container">
        <h1 class="text-center">All Users</h1>
        <table class="table table-stripped">
            <thead>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Telephone number</th>
                <th>Active</th>
                <th>Roles</th>
            </thead>
            <tbody>
                <tr v-for = "user in users" v-bind:key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.telephoneNum}}</td>
                    <td>{{user.active}}</td>
                    <td>{{user.roles}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import UserService from '../services/UserService';
import VueRouter from "../router/index"
import Pathes from "../constants/Pathes"

    export default {
        name: 'All',
        data() {
            return {
                users : [],
                authUserRoles : []
            }
        }, 
        methods: {
            getUsers() {
                UserService.getUsers().then((response) => {
                    this.users = response.data;
                }).catch((error) => {
                    console.log(error);
                    VueRouter.push(Pathes.ERROR_403_PATH);
                });
            },
            getAuthUserRoles() {
                this.authUserRoles = localStorage.getItem('roles');
            }
        },
        created() {
            this.getUsers();
            this.getAuthUserRoles();
        }
    }
</script>

<style>

</style>
