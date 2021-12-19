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
            <li class="one chosen">
                <a href="/room/admin">
                    <img src="../assets/icons/admin.png">
                </a>
            </li>
            <li class="two">
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
    <div class="adminMainPage">
        <div class="approvalArea">
          <img src="../assets/icons/tick.png" v-on:click="updateAdmin">
        </div>
      <form method="put" ref="adminUpdateForm">
          <div class="currentAdminPhoto">
            <img src="../assets/icons/adminPhoto.png">
          </div>
          <div>
            <input type="text" name="username" class="currentAdminName" v-model.trim="userUpdateDto.username" :placeholder="userUpdateDto.username">  
          </div>
          <div>
            <input type="text" name="email" class="currentAdminNick" v-model.trim="userUpdateDto.email" :placeholder="userUpdateDto.email">
          </div>
          <div>
            <input type="text" name="telephoneNum" class="currentAdminPhone" v-model.trim="userUpdateDto.telephoneNum" :placeholder="userUpdateDto.telephoneNum">
          </div>
            <input type="hidden" name="roles" v-model.trim="userUpdateDto.roles">
            <input type="hidden" name="active" v-model.trim="userUpdateDto.active">
          <div>
          </div>
          <div v-if="updateFormSent && !updateSuccess" class="alert alert-warning">The user with this name is already registered!</div>
      </form>
      <div class="logoutArea">
        <div class="logOutLink" v-on:click="logout">Вийти</div>
      </div>
    </div>
</main>
<div class="bottom">
    <img class="src" src="../assets/icons/bigSearch.png">
</div>
</div>
</template>

<script>

import PersonalRoomService from '../services/PersonalRoomService';
import UserService from '../services/UserService';
import AuthService from '../services/AuthService';
import VueRouter from "../router/index";
import Pathes from "../constants/Pathes";

    export default {
        name: 'AdminRoom',
        data() {
            return {
                admin : null,
                userUpdateDto: {
                  username: null,
                  email: null,
                  telephoneNum: null,
                  active: true,
                  roles: [],
                },
                updateSuccess:  true,
                updateFormSent: false
            }
        }, 
        methods: {
            getAdminData() {
                PersonalRoomService.getAdminData().then((response) => {
                    this.admin = response.data;
                    this.userUpdateDto = response.data;
                })
                .catch((error) => {
                    console.log(error);
                    VueRouter.push(Pathes.SIGN_IN_PATH);
                });
            },
            updateAdmin(e) {
                e.preventDefault();
                UserService.updateUser(this.admin.id, this.userUpdateDto)
                .then((response) => {
                    this.updateSuccess = response.data.success;
                });
                this.updateFormSent = true;
            },
            submitAdminUpdateForm() {
              this.$refs.adminUpdateForm.submit();
            },
            logout() {
              AuthService.logout();
              VueRouter.push(Pathes.HOME_RENTAL_PATH);
            }
        },
        created() {
          this.getAdminData();
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
  background: #FFFFFF;
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
  border-radius: 7px 7px 0 0;
  margin: 0 1.2% 0 1.2%;
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

.approvalArea{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1.5em;
  padding-right: 1em;
  padding-bottom: 2em;
}

.chosen{
  background-color: mediumslateblue !important
}

.adminMainPage{
  background-color: mediumslateblue;
  margin: 0 8px;
  height: 74vh;
  font-size: 14px
}

.adminMainPage div input {
  background-color: mediumslateblue;
  color: white;
}

.adminMainPage div input:hover {
  border-color: white;
}

.adminMainPage div input:focus {
  border-color: white;
}

.adminMainPage div input::placeholder {
  font-size: 14px;
  color: white;
  margin: 0;
  font-family: "Gogh", sans-serif;
  font-weight: 700;
}

.currentAdminPhoto{
  width: 71px;
  height: 71px;
  margin: auto auto 20px
}

.currentAdminName{
  width: 185px;
  height: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 9px;
  border-color: darkslateblue;
  line-height: 30px;
  text-align: center;
  margin: 11px auto
}

.currentAdminNick{
  width: 185px;
  height: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 9px;
  border-color: darkslateblue;
  line-height: 30px;
  text-align: center;
  margin: 11px auto;
}

.currentAdminPhone{
  width: 185px;
  height: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 9px;
  border-color: darkslateblue;
  line-height: 30px;
  text-align: center;
  margin: 11px auto
}

.logoutArea{
  padding-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logOutLink{
  width: 104px;
  height: 28px;
  background-color: darkslateblue;
  border-radius: 5px;
  margin: 7px auto auto;
  padding-top: 3px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}

.adminList ul {
  margin: 0
}

.adminList ul li{
  display: flex;
  padding-top: 29px
}

.adminInfo{
  margin-left: 34px;
  font-size: 14px
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