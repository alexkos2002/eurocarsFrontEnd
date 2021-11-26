<template>
    <div class="container mt-4" style="width: 20em; border: 2px solid #999; border-radius: 5px">
    <form method="post" @submit="registerUser" class="form-group" id="regForm">
        <div>
            <p text="${addUserMessage}" class="cRed"></p>
        </div>
        <label for="username">Enter name: </label>
        <input type="text" name="username" v-model="userRegDto.username" class="form-control" id="username">
        <br/>
        <label for="password">Enter password: </label>
        <input type="text" name="password" v-model="userRegDto.password" class="form-control" id="password">
        <br/>
        <label for="email">Enter email: </label>
        <input type="text" name="email" v-model="userRegDto.email" class="form-control" id="email">
        <br/>
        <label for="telephoneNum">Enter phone number: </label>
        <input type="text" name="telephoneNum" v-model="userRegDto.telephoneNum" class="form-control" id="telephoneNum">
        <br/>
        <input type="submit" value="Register" class="btn btn-info mb-2 d-flex justify-content-start" id="regSubmit">
        <div v-if="regFormSent && regSuccess" class="alert alert-success">You've succesfully registered</div>
        <div v-if="regFormSent && !regSuccess" class="alert alert-warning">The user with this name is already registered</div>
    </form>
</div>
</template>

<script>
import UserService from '../services/UserService';

    export default {
        name: 'Registration',
        data() {
            return {
                userRegDto: {
                    username: null,
                    email: null,
                    password: null,
                    telephoneNum: null
                },
                regFormSent: false,
                regSuccess: false
            }
        },
        methods: {
            registerUser(e) {
                console.warn(this.userRegDto);
                e.preventDefault();
                UserService.registerUser(this.userRegDto)
                .then((response) => {
                    this.regSuccess = response.data.success
                });
                this.regFormSent = true;
            }
        }
    }
</script>

<style>
    #regForm>label{
        float: left;
        text-align: left;
    }
</style>