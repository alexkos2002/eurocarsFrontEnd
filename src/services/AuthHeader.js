export default function authHeader() {
    let jwt = localStorage.getItem('jwt');
    console.log('JWT' + jwt)

    if (jwt) {
      return { Authorization: 'Bearer ' + jwt};
    } else {
      return {};
    }
  }