<template>
  <footer>
    <p>
      Autor: Mariana Ribeiro<br />
      <a href="mariana.alvesdor@gmail.com">mariana.alvesdor@gmail.com</a> <br/>
      <a href="https://www.linkedin.com/in/mariana-alves-oliveira-ribeiro/">linkedin.com/in/mariana-alves-oliveira-ribeiro</a>
    </p>
  </footer>
</template>
  <script>
export default {
  name: "FooterView",
};
</script>
<style scoped>
footer {
  text-align: center;
  color: white;
  padding: 3px;
  background-color: #2c3e50;
  position: fixed;
  left: 0px;
  bottom: 0px;
  padding: 2% 0 5% 0;
  height: 30px;
  width: 100%;
}

a {
  text-decoration: none;
  color: white;
}
</style>
    