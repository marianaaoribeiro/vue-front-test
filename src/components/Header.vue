<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/home" class="active">Home</router-link>
    <a @click="logout">Logout</a>
    <a href="javascript:void(0);" class="icon" @click="openSidemenu()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>
    <script>
export default {
  name: "HeaderView",
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    },
    openSidemenu() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>
<style scoped>

.topnav {
  overflow: hidden;
  background-color: #3b5274;
 
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #9c667d;
  color: white;
}

.topnav .icon {
  display: none;
}

a {
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
      