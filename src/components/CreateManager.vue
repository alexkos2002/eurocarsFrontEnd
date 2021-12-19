<template>
  <div class="root">
    <header>
      <div class="sideMenu">
        <div class="rectangle"></div>
        <div class="rectangle"></div>
        <div class="rectangle"></div>
      </div>
      <div class="shop">
        <img src="../assets/icons/shop.png" alt="shop">
      </div>
      <div class="logo">
        <img src="../assets/icons/logo.png" alt="logo">
      </div>
      <div class="topRight">
        <div class="lang">
          <img src="../assets/icons/UK.png" alt="lang">
        </div>
        <div class="cash">
          <img src="../assets/icons/$.png" alt="cash">
        </div>
        <div class="profile">
          <img src="../assets/icons/profile.png" alt="prof">
        </div>
      </div>
    </header>
    <main>
      <div class="topBar">
        <ul class="tabGroup">
          <li class="one">
            <a href="/room/admin">
                <img src="../assets/icons/admin.png">
            </a>
          </li>
          <li class="two chosen">
            <a href="/manager">
                Адміни
            </a>
          </li>
          <li class="three">
              <a href="/user">
                  Користувачі
              </a>
          </li>
          <li class="four">
              <a href="#four">
                  Історія
              </a>
          </li>
          <li class="helper"></li>
        </ul>
      </div>
      <div class="addAdmin">
        <div class="currentAdminPhoto">
          <img src="../assets/icons/adminPhoto.png" alt="admin">
        </div>
        <form method="post" class="form" @submit="createManager">
          <ul class="forms">
            <li class="currentAdminName">
              <input type="text" name="username" placeholder="Ім'я Прізвище" v-model.trim="userCreationDto.username">
            </li>
            <li class="currentAdminName">
              <input type="email" name="email" placeholder="Пошта" v-model.trim="userCreationDto.email">
            </li>
            <li class="currentAdminName">
              <input type="tel" name="telephoneNum" placeholder="Телефон" v-model.trim="userCreationDto.telephoneNum">
            </li>
            <li class="currentAdminName">
              <input type="password" name="password" placeholder="Придумайте пароль" v-model.trim="userCreationDto.password">
            </li>
            <input type="hidden" name="roleName" v-model="userCreationDto.roleName">
          </ul>
          <input type="submit" value="Створити новоги адміна">
          <div v-if="creationFormSent && !creationSuccess" class="alert alert-warning">The user with this name is already registered!</div>
        </form>
      </div>
    </main>
    <div class="bottom">
      <img class="src" src="../assets/icons/bigSearch.png" alt="search">
    </div>
  </div>
</template>

<script>

import StringConstants from '../constants/StringConstants';
import UserService from '../services/UserService';
import VueRouter from "../router/index"
import Pathes from "../constants/Pathes"

export default {
  name: "CreateManager",
  data() {
    return{
      userCreationDto: {
        username: null,
        email: null,
        telephoneNum: null,
        password: null,
        roleName: StringConstants.MANAGER_ROLE
      },
      creationFormSent: false,
      creationSuccess: false 
    }
  },
  methods: {
    createManager(e) {
      e.preventDefault();
      UserService.createUser(this.userCreationDto)
      .then((response) => {
        if (response.data.success) {
          VueRouter.push(Pathes.ALL_MANAGERS_PATH);
        }
        this.creationSuccess = response.data.success;
      });
      this.creationFormSent = true; 
    }
  }
}
</script>

<style>
.root {
  background: #2f134b;
  color: white;
  margin: 0;
  font-family: "Gogh", sans-serif;
}
header {
  height: 62px;
  background-color: #2f134b;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
main {
  padding-bottom: 58px;
}
p {
  margin: 0;
}
.rectangle {
  margin: 3px;
  width: 25px;
  height: 2px;
  background: #FFFFFF;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.sideMenu {
  margin-left: 20px;
  margin-right: 15px;
}
.topRight {
  width: 75px;
  height: 20px;
  display: flex;
  margin-left: auto;
  margin-right: 26px;
}
.topRight div {
  margin-right: 19px;
}
.topBar ul {
  margin-bottom: 0;
  list-style-type: none;
  padding: 0;
  text-align: justify;
  height: 43px;
  margin-left: 8px;
  margin-right: 8px;
}
.topBar li {
  display: inline-block;
  height: 43px;
  line-height: 43px;
  text-align: center;
  border-radius: 7px 7px 0 0;
  margin-left: 1.66%;
  margin-right: 1.66%;
}

.tabGroup>li {
  font-weight: 600;
}

a {
  text-decoration: none;
  margin: auto;
  color: #FFFFFF;
}
.topBar .one {
  margin-left: 0;
  background-color: darkslateblue;
  width: 15%;
}
.topBar .two {
  background-color: darkslateblue;
  width: 25%;
}
.topBar .three {
  background-color: darkslateblue;
  width: 25%;
}
.topBar .four {
  margin-right: 0;
  background-color: darkslateblue;
  width: 25%;
}
.helper {
  width: 100%;
  height: 0;
  visibility: hidden;
}
.chosen {
  background-color: mediumslateblue !important;
}
.addAdmin {
  background-color: mediumslateblue;
  margin: 0 8px;
  height: 74vh;
  font-size: 14px;
}
.currentAdminPhoto {
  width: 71px;
  height: 150px;
  padding-top: 65px;
  margin: auto auto 20px;
}
.forms li{
  width: 185px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 20px auto;
  list-style-type: none;
}
form{
  text-align: center;
}

input{
  border: 2px solid darkslateblue;
  border-radius: 9px;
  background: mediumslateblue;
  outline: none;
  width: 185px;
  height: 30px;
  color: #cccccc;
  font-size: 16px;
  font-family: "Gogh", sans-serif;
  text-align: center;
}
input:focus {
  box-shadow: 1px 1px 2px 0 darkslateblue;
}
::placeholder {
  color: darkslateblue;
  font-size: 16px;
  font-family: "Gogh", sans-serif;
}
.bottom {
  height: 58px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #2f134b;
  z-index: 1000;
}
.src {
  margin: 14px auto auto 15%;
}
</style>