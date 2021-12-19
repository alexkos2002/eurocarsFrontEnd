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
        Авторизація
      </p>
      <form>
        <div>
          <input type="text" placeholder="Логін" v-model="userAuthDto.username">
        </div>
        <div>
          <input type="password" placeholder="Пароль" v-model="userAuthDto.password">
        </div>
        <input type="submit" value="Увійти">
      </form>
      <div v-if="loginFormSent && loginSuccess" class="alert alert-success">You've succesfully logged in</div>
      <div v-if="loginFormSent && !loginSuccess" class="alert alert-danger">Bad credentials</div>
    </main>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";
import VueRouter from "../router/index"
import StringConstants from "../constants/StringConstants"
import Pathes from "../constants/Pathes"

export default {
  name: 'Login',
  data() {
    return {
      userAuthDto: {
        username: null,
        password: null,
      },
      loginMessage: "You've successfully logged in!",
      loginFormSent: false,
      loginSuccess: true,
    }
  },
  methods: {
    login(e) {
      console.warn(this.userRegDto);
      e.preventDefault();
      AuthService.login(this.userAuthDto)
          .then((response) => {
            if (response.data.jwt) {
              localStorage.setItem('jwt', response.data.jwt);
              localStorage.setItem('roles', response.data.roles);
              this.loginSuccess = true;
              if (response.data.roles.includes(StringConstants.USER_ROLE)) {
                VueRouter.push(Pathes.HOME_RENTAL_PATH);
              }
            }
          })
          .catch((error) => {
            if (error.response) {
              this.loginSuccess = false;
            }
          });
      this.loginFormSent = true;
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
  margin-bottom: 15vh;
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