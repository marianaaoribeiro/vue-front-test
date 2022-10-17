<template>
  <div class="body">
    <div class="center">
      <h1>Login</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>
      <script>
export default {
  name: "LoginView",
  methods: {},
};
</script>
  <style scoped>
.body {
  /* background:linear-gradient(120deg,#099a6a,#8e44ad); */
  background-image: radial-gradient(circle at 20.91% 70.37%, #5643f0 0, #7536e7 16.67%, #8c26dd 33.33%, #9f09d2 50%, #af00c6 66.67%, #bc00ba 83.33%, #c700ad 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 15px;
  width: 400px;
  padding: 2%;
  opacity: 0.9;
}
.center h1 {
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #ce938b;
  color: #2a2929;
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0;
  height: 2px;
  background: #9c667d;
  transition: 0.5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #9c667d;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
.pass {
  margin: -5px 0 20px 5px;
  color: #666666;
  cursor: pointer;
}
.pass:hover {
  text-decoration: underline;
}
input[type="submit"] {
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid;
  background: #9c667d;
  color: #e9f4fb;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  outline: none;
}
input[type="submit"]:hover {
  border-color: #2691d9;
  transition: 0.5s;
}
.singup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.singup_link a {
  color: #2691d9;
  text-decoration: none;
}
.singup_link a:hover {
  text-decoration: underline;
}
</style>
        