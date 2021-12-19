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
            <a href="">
              <img src="../assets/icons/manager.png" alt="one">
            </a>
          </li>
          <li class="two">
            <a href="">
              Авто
            </a>
          </li>
          <li class="three chosen">
            <a href="">
              Замовлення
            </a>
          </li>
          <li class="four">
            <a href="">
              Історія
            </a>
          </li>
          <li class="helper"></li>
        </ul>
      </div>
      <div class="order">
        <input type="text" v-model.trim="returnedNum" placeholder="№000">
        <div class="holder">
          <div class="left">
            <p class="num">№ {{num}} ({{type}})</p>
            <p>{{holderName}}</p>
            <p>{{KH}}</p>
            <p class="holderNum">{{holderNum}}</p>
            <p class="place">{{place}}</p>
          </div>
          <div class="right">
            <div class="rate">
              {{holderRate}}
              <img class="star" src="../assets/icons/Star.png" alt="star">
            </div>
            <img class="holderPhoto" src="../assets/icons/adminPhoto.png" alt="holderPhoto">
          </div>
        </div>
        <div class="car">
          <div class="left">
            <img src="../assets/icons/car.png" alt="car">
          </div>
          <div class="right">
            <p>{{carName}}</p>
            <p>{{carPrice}}</p>
            <p>{{date}}</p>
          </div>
        </div>
        <div class="orderBottom">
          <p>Сплачено: {{paid}}</p>
          <p class="status">Статус: {{status}}</p>
        </div>
        <div class="buttons">
          <input class="confirm" type="button" value="Затвердити" @click="confirm">
          <input class="reject" type="button" value="Відхилити" @click="reject">
        </div>
      </div>
    </main>
    <div class="bottom">
      <img class="src" src="../assets/icons/bigSearch.png" alt="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data(){
    return{
      num: 1,
      type: "оренда",
      holderName: "Александр Михайлович",
      holderRate: 5.00,
      KH: "KH 0003412341",
      holderNum: "+38096134232",
      place: "Аеропорт Жульяни м.Київ",
      carName: "BMW X5 M50i",
      carPrice: "300$",
      date: "08.10.21 - 11.10.21",
      paid: "0$",
      status: "очікують підтверження",
      returnedNum: ""
    }
  },
  methods:{
    confirm() {
      console.log("Confirmed")
    },
    reject() {
      console.log("Rejected")
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
  margin-top: 5px;
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

.order {
  background-color: mediumslateblue;
  margin: 0 8px;
  height: 80vh;
  font-size: 14px;
  padding: 20px;
}

.holder{
  width: 100%;
  height: 25vh;
  margin: 20px auto auto;
}

.holderNum{
  color: yellow;
  font-size: 15px;
}

.place{
  font-size: 10px;
}

.holder .right{
  position: relative;
}

.holder .right .holderPhoto{
  height: 71px;
  width: 71px;
  position: absolute;
  bottom: 50%;
  transform: translate(0, -50%)
}

.holder .right .rate{
  height: 20px;
  width: 20vw;
  line-height: 30px;
  text-align: center;
  position: absolute;
  bottom: 50%;
  transform: translate(-38%, -50%)
}

.car{
  margin-bottom: 0;
}

.car .left img{
  margin-bottom: 40px;
}

.left{
  display: inline-block;
  margin-right: 20px;
}

.right{
  display: inline-block;
}

.orderBottom{
  margin-bottom: 40px ;
}

.status{
  margin-top: 5px;
  color: yellow;
}

.order .num{
  font-size: 16px;
}

.order input{
  width: 128px;
  height: 29px;
  background: white;
  border: none;
  border-radius: 22px;
}

.order input:focus{
  border: 2px solid grey;
}

.order input[type="button"]{
  width: 140px;
  height: 34px;
  background: darkslateblue;
  border: none;
  border-radius: 9px;
  color: white;
}

.buttons{
  margin: 0 10px;
}

.confirm{
  float: left;
}

.reject{
  float: right;
}

::placeholder{
  color: silver;
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