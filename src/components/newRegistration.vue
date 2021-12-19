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
      <div class="top">
        <a class="close" href="#">
          <img src="../assets/icons/X.png" alt="X">
        </a>
      </div>
      <p class="secTop">
        Реєстрація
      </p>
      <form>
        <div>
          <input type="text" placeholder="Логін" v-model="userRegDto.username">
        </div>
        <div>
          <input type="password" placeholder="Пароль" v-model="userRegDto.password">
        </div>
        <div>
          <input type="email" placeholder="E-mail" v-model="userRegDto.email">
        </div>
        <div>
          <input type="tel" placeholder="Телефон" v-model="userRegDto.telephoneNum">
        </div>
        <input type="submit" value="Зареєструватися">
      </form>
      <div v-if="regFormSent && regSuccess" class="alert alert-success">You've succesfully registered</div>
      <div v-if="regFormSent && !regSuccess" class="alert alert-warning">The user with this name is already registered</div>
    </main>
  </div>
</template>

<script>
import AuthService from '../services/AuthService';

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
      AuthService.registerUser(this.userRegDto)
          .then((response) => {
            this.regSuccess = response.data.success
          });
      this.regFormSent = true;
    }
  }
}
</script>

<style scoped>

main{
  height: 100vh;
}

.top{
  text-align: right;
}

a{
  margin-right: 15px;
  margin-top: 15px;
}

p{
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 10vh;
}

input[type='text']{
  background: #2f134b;
  border-color: deeppink;
  color: white;
  border-radius: 9px;
  width: 184px;
  height: 51px;
  margin-bottom: 20px;
}

input[type='password']{
  background: #2f134b;
  border-color: deeppink;
  color: white;
  border-radius: 9px;
  width: 184px;
  height: 51px;
  margin-bottom: 20px;
}

input[type='email']{
  background: #2f134b;
  border-color: deeppink;
  color: white;
  border-radius: 9px;
  width: 184px;
  height: 51px;
  margin-bottom: 20px;
}

input[type='tel']{
  background: #2f134b;
  border-color: deeppink;
  color: white;
  border-radius: 9px;
  width: 184px;
  height: 51px;
  margin-bottom: 30px;
}

input[type='submit']{
  background: deeppink;
  border-color: deeppink;
  color: white;
  border-radius: 9px;
  width: 184px;
  height: 51px;
}

::placeholder{
  color: white;
}

</style>