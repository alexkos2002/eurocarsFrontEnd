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
          <li class="three">
            <a href="">
              Замовлення
            </a>
          </li>
          <li class="four chosen">
            <a href="">
              Історія
            </a>
          </li>
          <li class="helper"></li>
        </ul>
      </div>
      <div class="history">
        <ul class="rentList">
          <li class="auto" v-for="(curCar, curIndex) in cars" :key="curIndex">
            <div class="carBlock">
              <p>№{{curIndex}}</p>
              <img src="../assets/icons/car.png" alt="car">
              <p class="currName">{{curCar.name}}</p>
              <p class="currPrice">{{curCar.price}} день</p>
            </div>
            <div class="holderBlock">
              <p>{{curCar.holderName}}</p>
              <p>{{curCar.holderNum}}</p>
              <p>{{curCar.date}}</p>
              <p>{{curCar.totalPrice}}</p>
              <p class="status">Статус: {{curCar.status}}</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <div class="bottom">
      <img class="src" src="../assets/icons/bigSearch.png" alt="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      cars:[
        {
          name: "BMW X5 M50i",
          price: "300$",
          holderName: "Александр",
          holderNum: "+38068023420",
          date: "08.10.21 - 11.10.21",
          totalPrice: "1200$",
          status: "завершено"
        },
        {
          name: "BMW X5 M50i",
          price: "300$",
          holderName: "Александр",
          holderNum: "+38068023420",
          date: "08.10.21 - 11.10.21",
          totalPrice: "1200$",
          status: "завершено"
        }
      ]
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

.history {
  background-color: mediumslateblue;
  margin: 0 8px;
  height: 80vh;
  font-size: 14px;
}

.rentList{
  padding-top: 40px;
}

.auto{
  list-style: none;
  width: 75vw;
  margin: auto auto 30px;
}

.carBlock{
  display: inline-block;
  margin-right: 5%;
}

.holderBlock{
  display: inline-block;
  position: relative;
}

.currName{
  text-align: center;
}

.currPrice{
  text-align: center;
}

.status{
  margin-top: 20px;
  color: yellow;
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