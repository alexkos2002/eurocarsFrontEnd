<template>
    <div>
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
          <div class="chose">
                  <div class="buy selected">
                  <a href="/home/selling">Купити</a>
              </div>
              <div class="rent unselected">
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
              <div class="rentLine"> <!-- Element which appears only on rental page-->
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

p {
  margin: 0;
}

.mainwrapper {
  background: #2f134b;
  color: white;
  margin: 0;
  font-family: "Gogh", sans-serif;
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
  color: #4f0154;
  border-radius: 10px 10px 1px 1px;
  margin: auto 8px;
}

.chose div a {
  text-decoration: none;
  font-size: 2em;
  color: #FFFFFF;
}

.chose div:hover{
  width: 100%;
  text-align: center;
  background: #77026d;
  border-radius: 10px 10px 1px 1px;
  margin: auto 8px;
}

.unselected {
  background: #4f0154;
}

.selected {
  background: #77026d;
}

.carsMenu {
  margin: auto 8px;
  background: #77026d;
}

/*.searchLine // Купити; Під запитанням
 * display: flex
 * align-items: center
 * margin-bottom: 50px */
.searchLine {
  display: flex;
  align-items: center;
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
  border-radius: 0 9px 9px 0;
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

.rentLine {
  display: flex;
  align-items: center;
  margin: 25px auto;
}

.date {
  height: 29px;
  width: 128px;
  margin-right: 21px;
  margin-left: auto;
  background: white;
  border-radius: 16px;
  text-align: center;
  display: flex;
}

.date {
  color: silver;
  font-family: "Gogh", sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.date p {
  margin: auto;
}

.city {
  height: 29px;
  width: 128px;
  margin-left: 21px;
  background: white;
  border-radius: 16px;
  text-align: center;
  display: flex;
}

.city {
  color: silver;
  font-family: "Gogh", sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.city p {
  margin: auto;
}

.cars {
  margin-top: 25px;
}

.cars {
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.cars li {
  width: 170px;
  height: 200px;
  text-align: center;
  margin: auto;
  padding: 2px 5px;
}

li .like {
  text-align: left;
}

.chButton {
  width: 104px;
  height: 24px;
  border: solid deeppink;
  border-radius: 5px;
  margin: 7px auto auto;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}

.price {
  color: yellow;
  margin-top: 2px;
}

.name {
  margin-top: 12px;
}

li .img {
  position: relative;
  width: 151px;
  height: 75px;
  margin: auto;
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

.filtersFull {
  display: none;
  background-color: deeppink;
  width: 203px;
  position: absolute;
  margin-left: auto;
  margin-right: 0;
  text-align: center;
  border-radius: 9px 0 0 9px;
  font-size: 15px;
  z-index: 1;
  top: 121px;
  right: 0;
  height: 500px;
  overflow: scroll;
}

.filters:hover .filtersFull {
  display: block;
}

.filtersFull::-webkit-scrollbar {
  width: 0 !important;
}

.filtersFull ul {
  padding: 0;
}

.filtersFull li {
  list-style-type: none;
  margin: auto;
}

.Fline1 {
  display: flex;
  height: 43px;
}

.Fline1 img {
  height: 12px;
  margin-left: 12px;
  margin-top: 13px;
}

.Fline1 p {
  margin: auto;
  position: relative;
  right: 11px;
}

.fromTo {
  display: flex;
  font-size: 9px;
  margin: auto;
}

.fromTo p {
  margin: 0;
}

.from {
  margin-left: 29px;
  margin-right: 33px;
}

.fromVal {
  width: 56px;
  height: 18px;
  border-radius: 5px;
  border-color: #FFFFFF;
  border-style: solid;
  line-height: 18px;
  text-align: center;
}

.fromN {
  position: relative;
  line-height: 15px;
  color: #AE007D;
  right: 20%;
}

.toVal {
  width: 56px;
  height: 18px;
  border-radius: 5px;
  border-color: #FFFFFF;
  border-style: solid;
  line-height: 18px;
  text-align: center;
}

.toN {
  position: relative;
  line-height: 15px;
  color: #AE007D;
  left: 20%;
}

.sortFull {
  display: none;
  background-color: deeppink;
  width: 203px;
  position: absolute;
  margin-left: auto;
  margin-right: 0;
  text-align: center;
  border-radius: 0 9px 9px 0;
  font-size: 15px;
  z-index: 1;
  top: 121px;
  left: 0;
  height: 500px;
  overflow: scroll;
}

.sort:hover .sortFull {
  display: block;
}

.sortFull::-webkit-scrollbar {
  width: 0 !important;
}

.sortFull ul {
  padding: 0;
  margin: 0;
}

.sortFull li {
  margin-top: 45px;
}

.sortFull .X {
  position: absolute;
  right: 12px;
  top: 10px;
  height: 12px;
}
</style>