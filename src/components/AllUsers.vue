<template>
<div class="mainWrapper">
    <header>
    <div class="sideMenu">
        <div class="rectangle"></div>
        <div class="rectangle"></div>
        <div class="rectangle"></div>
    </div>
    <div class="shop">
        <img src="../assets/icons/shop.png">
    </div>
    <div class="logo">
        <img src="../assets/icons/logo.png">
    </div>
    <div class="topRight">
        <div class="lang">
            <img src="../assets/icons/UK.png">
        </div>
        <div class="cash">
            <img src="../assets/icons/$.png">
        </div>
        <div class="profile">
            <img src="../assets/icons/profile.png">
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
            <li class="two">
                <a href="/manager">
                    Адміни
                </a>
            </li>
            <li class="three chosen">
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
    <div class="adminList">
        <ul>
            <li v-for="user in users" v-bind:key="user.id">
                <div class="deleteButton">
                    <img src="../assets/icons/delete.png" v-on:click="deleteUser(user.id)">
                </div>
                <div class="adminPhoto">
                    <img src="../assets/icons/adminPhoto.png">
                </div>
                <div class="adminInfo">
                    <p class="adminName">{{user.username}}</p>
                    <p class="adminNick">{{user.email}}</p>
                    <p class="adminNumber">{{user.telephoneNum}}</p>
                </div>
                <div class="banArea">
                  <div class="banForm">
                    <img src="../assets/icons/banIcon.png" v-if="user.active" class="banButton" id="banButtonId" v-on:click="changeUserActiveStatus(user.id, false)">
                  </div>
                  <div class="banForm">
                    <img src="../assets/icons/unbanIcon.png" v-if="!user.active" type="submit" class="banButton" id="unbanButtonId" v-on:click="changeUserActiveStatus(user.id, true)">
                  </div>
                </div>
            </li>
        </ul>
    </div>
</main>
<div class="bottom">
    <img class="src" src="../assets/icons/bigSearch.png">
</div>
</div>
</template>

<script>

import StringConstants from "../constants/StringConstants"
import UserService from '../services/UserService';
import VueRouter from "../router/index"
import Pathes from "../constants/Pathes"

    export default {
        name: 'AllUsers',
        data() {
            return {
                userUpdateDto: {
                  username: null,
                  email: null,
                  telephoneNum: null,
                  active: true,
                  roles: [],
                },
                users : [],
                authUserRoles : [],
                banSuccess: false,
            }
        }, 
        methods: {
            getUsers() {
                UserService.getUsersByRole(StringConstants.USER_ROLE).then((response) => {
                    this.users = response.data;
                })
                .catch((error) => {
                    console.log(error);
                    VueRouter.push(Pathes.ERROR_403_PATH);
                });
            },
            getAuthUserRoles() {
                this.authUserRoles = localStorage.getItem('roles');
            },
            deleteUser(id) {
                UserService.deleteUser(id);
                window.location.reload();
            },
            changeUserActiveStatus(userId, active) {
                let userToChange = this.users.find(user => user.id == userId);
                console.log(userToChange.username);
                this.userUpdateDto.username = userToChange.username;
                this.userUpdateDto.email = userToChange.email;
                this.userUpdateDto.telephoneNum = userToChange.telephoneNum;
                this.userUpdateDto.active = active;
                this.userUpdateDto.roles = userToChange.roles;
                UserService.updateUser(userId, this.userUpdateDto)
                .then((response) => {
                  if (response.data.success) {
                    window.location.reload();
                  }
                });
            }
        },
        created() {
            this.getUsers();
            this.getAuthUserRoles();
        }
    }
</script>

<style>
.mainWrapper{
  background: #2f134b;
  color: white;
  margin: 0;
  font-family: "Gogh", sans-serif
}

header{
  height: 62px;
  background-color: #2f134b;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center
}

main{
  padding-bottom: 58px
}

p{
  margin: 0
}

.rectangle{
  margin: 3px;
  width: 25px;
  height: 2px;
  background: #FFFFFF
}

.logo{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}

.sideMenu{
  margin-left: 20px;
  margin-right: 15px
}

.topRight{
  width: 75px;
  height: 20px;
  display: flex;
  margin-left: auto;
  margin-right: 26px
}

.topRight div{
  margin-right: 19px
}

.topBar ul{
  margin-bottom: 0;
  list-style-type: none;
  padding: 0;
  text-align: justify;
  height: 43px;
  margin-left: 8px;
  margin-right: 8px
}

.topBar li{
  display: inline-block;
  height: 43px;
  line-height: 43px;
  text-align: center;
  border-radius: 7px 7px 0 0
}

a{
  text-decoration: none;
  margin: auto;
  color: #FFFFFF
}

.topBar .one{
  background-color: #483d8b;
  width: 15%
}

.topBar .two{
  background-color: darkslateblue;
  width: 25%
}

.topBar .three{
  background-color: darkslateblue;
  width: 25%
}

.topBar .four{
  background-color: darkslateblue; 
  width: 25%
}

.helper{
  width: 100%;
  height: 0;
  visibility: hidden
}

.chosen{
  background-color: mediumslateblue !important
}

.adminList {
  background-color: mediumslateblue;
  height: 74vh;
  margin: 0 8px
}

.adminList ul {
  margin: 0
}

.adminList ul li{
  display: flex;
  padding-top: 29px
}

.adminInfo{
  text-align: left;
  margin-left: 34px;
  font-size: 14px
}

.banArea{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.banForm{
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
}

.banButton{
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 7px auto auto;
  padding-bottom: 3px;
}

.companyList{
  display: none;
  height: 74vh;
  background-color: mediumslateblue;
  margin: 0 8px;
  font-size: 14px
}

.companyList ul{
  margin: 0;
  padding-top: 36px
}


.companyList ul li{
  display: flex;
  height: 50px;
  margin-left: 50px;
  line-height: 50px;
  margin-bottom: 16px
}

.companyLogo{
  margin-right: 40px
}

.arrow{
  margin-right: 15%;
  margin-left: auto;
  position: relative
}


.arrow img{
  position: absolute;
  top: 50%;
  transform: translate(0, -50%)
}

.companyPage{
  display: none;
  position: relative;
  height: 74vh;
  background-color: mediumslateblue;
  margin: 0 8px;
  font-size: 14px;
  padding-top: 40px
}

.backArrow{
  position: absolute;
  left: 23px;
  top: 23px
}

.currentCompanyLogo{
  height: 50px;
  width: 50px;
  margin: auto
}


.currentCompanyName{
  margin-top: 10px;
  text-align: center;
}

.actionButton{
  position: relative;
  text-align: center;
  display: flex;
  width: 140px;
  margin: 40px auto
}

.autoListButton{
  position: relative;
  text-align: center;
  display: flex;
  width: 140px;
  margin: 40px auto
}


.currentArrow{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -30%)
}


.carList{
  display: none;
  position: relative;
  background-color: mediumslateblue;
  margin: 0 8px;
  font-size: 14px;
  padding-top: 40px
}

.cars{
  margin-top: 25px
}

.cars{
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))
}


.cars li{
  width: 170px;
  height: 200px;
  text-align: center;
  margin: auto;
  padding: 2px 5px
}


li .like{
  text-align: left
}


.chButton{
  width: 104px;
  height: 24px;
  border: solid mediumpurple;
  color: mediumpurple;
  border-radius: 5px;
  margin: 7px auto auto;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center
}


.price{
  color: yellow;
  margin-top: 2px
}
 

.name{
  margin-top: 12px
}
  
li .img{
  position: relative;
  width: 151px;
  height: 75px;
  margin: auto
}

.cars .addCar{
  height: 100px;
}
  

.addCarButton{
  width: 80%;
  text-align: center;
  line-height: 43px;
  margin: auto;
  height: 43px;
  border: solid mediumpurple;
  color: mediumpurple;
  border-radius: 9px
}



.bottom{
  height: 58px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #2f134b;
  z-index: 1000
}

.src{
  margin: 14px auto auto 15%
}
</style>
