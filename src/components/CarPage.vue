<template>
  <div class="root">
    <header>
      <div class="sideMenu">
        <div class="rectangle"></div>
        <div class="rectangle"></div>
        <div class="rectangle"></div>
        <div class="sideMenuFull">
          <div class="X">
            <img src="../assets/icons/X.png" alt="X">
          </div>
          <ul>
            <li><a>Акції та пропозиції</a></li>
            <li><a>Компанії, що співпрацюють з нами</a></li>
            <li><a>Про нас</a></li>
            <li><a>Стати партнером</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>FAQ</a></li>
            <li><a>Admin profile</a></li>
          </ul>
        </div>
      </div>
      <div class="shop">
        <img src="../assets/icons/shop.png" alt="shop">
      </div>
      <a class="logo" @click="$router.push('/home/rental')">
        <img src="../assets/icons/logo.png">
      </a>
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
      <!--<div class="chose">
        <div class="buy chosen">
          <h2>Купити</h2>
        </div>
        <div class="rent">
          <h2>Орендувати</h2>
        </div>
      </div> -->
      <div class="carsMenu">
        <!--<div class="searchLine">
          <div class="sort">Сортування</div>
          <div class="find">
            <p>Пошук</p>
            <img src="../assets/icons/search.png">
          </div>
          <div class="filters">Фільтри</div>
        </div> -->
        <div class="car">
          <div class="carBlock">
            <div class="carTopLine">
              <div class="carLike">
                <img src="../assets/icons/liked.png">
              </div>
              <div class="rateBlock">
                <div class="rate">
                  <p>{{ CarRating }}</p>
                </div>
                <div class="star">
                  <img src="../assets/icons/Star.png">
                </div>
              </div>
            </div>
            <div class="slider">
              <div class="slider__items">
                <div class="slider__item">
                  <img src="../assets/icons/silverCar.png">
                </div>
                <div class="slider__item">
                  <!-- Контент 2 слайда -->
                </div>
                <div class="slider__item">
                  <!-- Контент 3 слайда -->
                </div>
                <div class="slider__item">
                  <!-- Контент 4 слайда -->
                </div>
                <div class="slider__item">
                  <!-- Контент 5 слайда -->
                </div>
              </div>
              <a href="#" class="sliderLeft">
                <img src="../assets/icons/left.png">
              </a>
              <a href="#" class="sliderRight">
                <img src="../assets/icons/right.png">
              </a>
            </div>
            <div class="carNameBlock">
              <div class="carName"><p> {{ CarName }} </p></div>
              <div class="carPrice"><p>{{ CarPrice }}</p></div>
            </div>
            <div class="carButtonLine">
              <div class="carBuyButton">
                <p>Купити</p>
              </div>
              <div class="carReserveButton">
                <p>Забронювати</p>
              </div>
            </div>
            <div class="carParameters">
              <ul>
                <li><p class="parameter">Тип авто</p>   <p class="parameterValue"> {{CarType}} </p> </li>
                <li><p class="parameter">Локація</p>   <p class="parameterValue"> {{CarLocation}} </p> </li>
                <li><p class="parameter">Рік</p>   <p class="parameterValue"> {{CarYear}} </p> </li>
                <li><p class="parameter">Рейтинг</p>   <p class="parameterValue"> {{CarRate}} </p> </li>
                <li><p class="parameter">Категорія авто</p>   <p class="parameterValue"> {{CarCategory}} </p> </li>
                <li><p class="parameter">Країна виробник</p>   <p class="parameterValue"> {{CarCountry}} </p> </li>
                <li><p class="parameter">Розгін</p>   <p class="parameterValue"> {{Car1_100}} </p> </li>
                <li><p class="parameter">Макс. швидкість</p>   <p class="parameterValue"> {{CarMaxSpeed}} </p> </li>
                <li><p class="parameter">Потужність</p>   <p class="parameterValue"> {{CarPower}} </p> </li>
                <li><p class="parameter">Об'єм двигуна</p>   <p class="parameterValue"> {{CarEngine}} </p> </li>
                <li><p class="parameter">Тип палива</p>   <p class="parameterValue"> {{CarFuelType}} </p> </li>
                <li><p class="parameter">Витрата палива</p>   <p class="parameterValue"> {{CarFuel}} </p> </li>
                <li><p class="parameter">КПП</p>   <p class="parameterValue"> {{CarKPP}} </p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="bottom">
      <img class="src" src="../assets/icons/bigSearch.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "CarPage",
  data() {
    return {
      CarRating : "5.00",
      CarName: "BMW X5 M50i",
      CarPrice: "150 000$",
      CarType: "CarType",
      CarLocation: "CarLocation",
      CarYear: "CarYear",
      CarRate: "CarRate",
      CarCategory: "CarCategory",
      CarCountry: "CarCountry",
      Car1_100: "Car1_100",
      CarMaxSpeed: "CarMaxSpeed",
      CarPower: "CarPower",
      CarEngine: "CarEngine",
      CarFuelType: "CarFuelType",
      CarFuel: "CarFuel",
      CarKPP: "CarKPP"
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

ul {
  padding: 0;
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

.chose h2{
  color: white;
  font-size: 20px;
  line-height: 40px;
}

.chose {
  color: white;
  display: flex;
  font-family: "Gogh", sans-serif;
  font-size: small;
  text-align: center;
}

.chose div {
  height: 50px;
  width: 100%;
  text-align: center;
  background: #4f0154;
  border-radius: 10px 10px 1px 1px;
  margin: auto 8px;
}

.chosen {
  background: #77026d;
}

.carsMenu {
  border-radius: 10px;
  padding-top: 40px;
  margin: auto 8px;
  background: #77026d;
}

.searchLine {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.find {
  height: 29px;
  width: 128px;
  margin: auto;
  background: white;
  border-radius: 16px;
  text-align: center;
  display: flex;
}

.find {
  color: silver;
  font-family: "Gogh", sans-serif;
  font-size: 15px;
  font-weight: 600;
}

.find p {
  margin: 6px 16px;
}

.find img {
  margin: 6px 12px;
}

.sort {
  width: 115px;
  height: 43px;
  margin-left: -8px;
  background: deeppink;
  border-radius: 0px 9px 9px 0px;
  text-align: center;
  line-height: 42px;
  font-weight: 600;
}

.filters {
  width: 115px;
  height: 43px;
  margin-right: -8px;
  background: deeppink;
  border-radius: 9px 0 0 9px;
  text-align: center;
  line-height: 42px;
  font-weight: 600;
}

.carTopLine {
  display: flex;
  margin: 0 15% 0 15%;
}

.rateBlock {
  display: flex;
  vertical-align: center;
}

.rate {
  vertical-align: center;
  margin-right: 2px;
}

.carLike {
  margin-left: 0;
  margin-right: auto;
}

.slider {
  margin: auto;
}

.slider .sliderLeft{
  position: absolute;
  top: 25%;
  left: 7%;
}

.slider .sliderRight{
  position: absolute;
  top: 25%;
  right: 7%;
}

.slider__items {
  height: 150px;
  margin-top: 20px;
}

.slider__item {
  text-align: center;
}

.slider__item img {
  max-width: 75%;
  max-height: 150px;
}

.carNameBlock {
  text-align: center;
}

.carNameBlock p {
  margin: 2px;
}

.carPrice {
  color: yellow;
}

.carButtonLine {
  display: flex;
  margin-top: 12px;
}

.carBuyButton {
  width: 157px;
  height: 46px;
  border-radius: 9px;
  background-color: deeppink;
  margin-left: 7%;
  margin-right: 3%;
  line-height: 46px;
  text-align: center;
}

.carReserveButton {
  width: 157px;
  height: 46px;
  border-radius: 9px;
  border-style: solid;
  border-color: deeppink;
  margin-right: 7%;
  margin-left: auto;
  line-height: 46px;
  text-align: center;
}

.carParameters {
  margin-top: 40px;
  padding-bottom: 40px;
}

.carParameters li {
  list-style: none;
  display: flex;
  margin-top: 5px;
}

.parameter {
  margin-left: 12%;
  margin-right: auto;
}

.parameterValue {
  margin-left: 3%;
  margin-right: 12%;
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

.sideMenuFull {
  display: none;
  background-color: midnightblue;
  width: 203px;
  height: 100vh;
  position: absolute;
  margin-left: auto;
  margin-right: 0;
  text-align: center;
  border-radius: 0 9px 9px 0;
  font-size: 15px;
  z-index: 3;
  top: 0;
  left: 0;
}

.sideMenu:hover .sideMenuFull {
  display: block;
}

.sideMenuFull ul {
  padding: 0;
  margin: 0;
}

.sideMenuFull li {
  margin-top: 30%;
}

.sideMenuFull .X {
  position: absolute;
  right: 12px;
  top: 10px;
  height: 12px;
}

</style>