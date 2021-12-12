<template>
<div>
         <header>
          <div class="sideMenu">
              <div class="rectangle"></div>
              <div class="rectangle"></div>
              <div class="rectangle"></div>

              <div class="sideMenuFull">
                  <div class="X">
                      <img src="../assets/icons/X.png">
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
          <div class="chose">
                  <div class="buy" id="chosen">
                  <a href="/home/selling">Купити</a>
              </div>
              <div class="rent">
                  <a href="/home/rental">Орендувати</a>
              </div>
          </div>
          <div class="carsMenu">
              <div class="searchLine">
                  <div class="sort">
                      Сортування
                      <div class="sortFull">
                          <div class="X">
                              <img src="../assets/icons/X.png">
                          </div>
                          <ul>
                              <li><p>Сортування:</p></li>
                              <li><p>За рейтингом</p></li>
                              <li><p>Новинки</p></li>
                              <li><p>Популярні</p></li>
                              <li><p>Акційні</p></li>
                              <li><p>Від дорогих до дешевих</p></li>
                              <li><p>Від дешевих до дорогих</p></li>
                          </ul>
                      </div>
                  </div>
                  <div class="find">
                      <p>Пошук</p>
                      <img src="../assets/icons/search.png">
                  </div>
                  <div class="filters">
                      Фільтри
                      <div class="filtersFull">
                          <div class="Fline1">
                              <img src="../assets/icons/X.png">
                              <p>Фільтр</p>
                          </div>
                          <div class="Fline2">
                              <p>Наразі є 20 435</p>
                          </div>
                          <div class="Fline3">
                              <p>Ціна</p>
                              <img src="../assets/icons/slideLine.png">
                              <div class="fromTo">
                                  <div class="from">
                                      <div class="fromVal"><p>3 000</p></div>
                                      <div class="fromN"><p>Від</p></div>
                                  </div>
                                  <div class="to">
                                      <div class="toVal"><p>3 000 000</p></div>
                                      <div class="toN"><p>До</p></div>
                                  </div>
                              </div>
                          </div>
                          <ul>
                              <li><p>Тип авто</p></li>
                              <li><p>Марка</p></li>
                              <li><p>Модель</p></li>
                              <li><p>Локація</p></li>
                              <li><p>Рік</p></li>
                              <li><p>Рейтинг</p></li>
                              <li><p>Категорія авто</p></li>
                              <li><p>Тип кузова</p></li>
                              <li><p>Країна виробник</p></li>
                              <li><p>Розгін</p></li>
                              <li><p>Макс. швидкість</p></li>
                              <li><p>Потужність</p></li>
                              <li><p>Об'єм двигуна</p></li>
                              <li><p>Тип палива</p></li>
                              <li><p>Витрата палива</p></li>
                              <li><p>КПП</p></li>
                              <li><p>Тип </p></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="rentLine"> <!-- Блок, що з'являється лише при оренді -->
                  <div class="city"><p>Місто</p></div>
                  <div class="date"><p>Дата</p></div>
              </div>
              <ul class="cars">
                  <li class="car">
                      <div class="like active"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like active"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like active"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
                  </li>
                  <li class="car">
                      <div class="like"><img src="../assets/icons/like.png"></div>
                      <div class="img"><img src="../assets/icons/car.png"></div>
                      <div class="name">BMW X5 M50i</div>
                      <div class="price">150 000$</div>
                      <div class="chButton">Обрати</div>
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

</script>

<style>
        @charset "UTF-8";

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

.chose {
  display: flex;
  font-family: "Gogh", sans-serif;
  font-size: small;
}

.chose div {
  width: 100%;
  text-align: center;
  background: #4f0154;
  border-radius: 10px 10px 1px 1px;
  margin: auto 8px;
}

#chosen {
  background: #77026d;
}

.carsMenu {
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

.sliderLeft {
  position: absolute;
  top: 40%;
  left: 7%;
}

.sliderRight {
  position: absolute;
  top: 40%;
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
</style>