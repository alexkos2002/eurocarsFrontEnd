<template>
<div class="container mt-5" style="width: 24em; border: 2px solid #999; border-radius: 5px;">
    <form method="post" @submit="login" class="form-group" id="loginForm">
        <div class="mt-2">
            <label for="usernameId">User Name :</label>
            <input type="text" name="username" v-model="userAuthDto.username" class="form-control" id="usernameId"/>
        </div>
        <div class="mt-2">
            <label for="passwordId"> Password:</label>
            <input type="password" name="password" v-model="userAuthDto.password" class="form-control" id="passwordId"/> </div>
        <div class="row mt-4 mb-2">
            <div class="col-sm-3"><input type="submit" value="Sign In" class="btn btn-success"/></div>
            <div class="col-sm d-flex justify-content-around align-items-center">
                <span>Still not registered?</span>
                <a href="/auth/signup">Register here</a>
            </div>
        </div>
        <div v-if="loginFormSent && loginSuccess" class="alert alert-success">You've succesfully logged in</div>
        <div v-if="loginFormSent && !loginSuccess" class="alert alert-danger">Bad credentials</div>
    </form>
</div>
</template>

<script>

import AuthService from "../services/AuthService";
import VueRouter from "../router/index"
import StringConstants from "../constants/StringConstants"
import Pathes from "../constants/Pathes"

    export default {
        name: 'Login',
        data() {
            return {
                userAuthDto: {
                    username: null,
                    password: null,
                },
                loginMessage: "You've successfully logged in!",
                loginFormSent: false,
                loginSuccess: true, 
            }
        },
        methods: {
            login(e) {
                console.warn(this.userRegDto);
                e.preventDefault();
                AuthService.login(this.userAuthDto)
                .then((response) => {
                    if (response.data.jwt) {
                        localStorage.setItem('jwt', response.data.jwt);
                        localStorage.setItem('roles', response.data.roles);
                        this.loginSuccess = true;
                        if (response.data.roles.includes(StringConstants.USER_ROLE)) {
                            VueRouter.push(Pathes.HOME_RENTAL_PATH);
                        }
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        this.loginSuccess = false;
                    }
                });
                this.loginFormSent = true;
            }
        }
    }
</script>

<style>
    #loginForm>div>label{
        float: left;
        text-align: left;
    }
</style>
