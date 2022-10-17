<template>
  <div id="app">
    <router-view name="header">
      <Header />
    </router-view>
    <router-view class="content" />
    <router-view name="footer">
      <Footer />
    </router-view>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Footer,
    Header
  },
};
</script>
<style>
*{
    margin:0;
    padding:0;
    border:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}


</style>
