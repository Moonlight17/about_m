<template>
  <div id="app" class="back">
    <div id="about" class="align-self-start position-relative" :style="{'height': `${heightAbout}px`}">
      <!-- <div id="vertical"> -->
        <div class="position-absolute top-50 start-50 translate-middle name">
          <p id="me">Serov Sergei</p>
          <div class="desc">
            <p>My name is Sergei, I am an DevOps Engineer and you are on my webpage.</p>
          </div>
        </div>
      <!-- </div> -->
    </div>
    <div id="resume" class="align-self-start position-relative" :style="{'height': `${heightAbout}px`}">
      <!-- <div id="vertical"> -->
        <div class="position-absolute top-50 start-50 translate-middle">
          <h3>Hi 👋</h3>
          <p>My name is Sergei, I am an DevOps Engineer and you are on my webpage.</p>
        </div>
      <!-- </div> -->
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- footer -->
    <div class="footer">
      <div class="d-flex align-items-center justify-content-between" style="height: 100%;">
        <div class="p-1 text-muted vertical">
          <p class="year">© 2021</p>
        </div>
        <div class="p-1 text-muted vertical">
          <a target="blank" href="https://github.com/Moonlight17"><font-awesome-icon icon="fa-brands fa-github" class="icons"/></a>
          <a target="blank" href="https://www.linkedin.com/in/moonlight1790"><font-awesome-icon icon="fa-brands fa-linkedin" class="icons"/></a>
          <a target="blank" href="https://www.facebook.com/profile.php?id=100015795815781"><font-awesome-icon icon="fa-brands fa-facebook" class="icons"/></a>
          <a target="blank" href="https://www.instagram.com/moonlight1790/"><font-awesome-icon icon="fa-brands fa-instagram" class="icons"/></a>
        </div>
      </div>
    </div>
    <!-- borders -->
    <div class="line top"></div>
    <div class="line bottom"></div>
    <div class="line left"></div>
    <div class="line right"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data() {
    return {
      firstName: 'Serov',
      name: 'Sergei',
    }
  },
  mounted(){
    // alert(document.documentElement.clientHeight);
  },
  computed: {
    heightAbout(){
      return document.documentElement.clientHeight
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#app #about{
    width: 90%;
    margin: 0 auto;
    height: 100%;
}
#app #about .name p#me{
    color:#f0f0f0;
    font-size: 4.7em;
    font-weight: 700;
    font-stretch: extra-expanded;
}
#app #about .name .desc p{
    color: #a2a2a6;
    font-size: 13px;
}
#app .vertical{
  display: table-cell !important;
  vertical-align: middle !important;
}

/* footer */

#app .footer{
  position: fixed;
  bottom: 30px;
  left: 30px;
  height: 50px;
  width: calc(100% - 60px);
  padding: 0;
  background-color: #31313a;
}
#app .footer p{
  margin: 0;
}
#app .footer .year{
  padding: 15px;
}
#app .footer .icons{
  color: white;
  font-size: 1.3em;
  padding: 5px;
  display: inline-block;
  vertical-align: middle;
}
#app .footer .icons:hover{
  color: #f26b38;
  transition-duration: 0.5s;
  transform: scale(1.3);
  padding: 5px;
}

/* lines */
#app .line{
  background: #26262d;
  content: '';
  position: fixed;
  z-index: 105;
}
#app .line.top{
    left: 0;
    top: 0;
    width: 100%;
    height: 30px;
}
#app .line.bottom{
    left: 0;
    top: auto;
    bottom: 0;
    width: 100%;
    height: 30px;
}
#app .line.left{
    left: 0;
    top: 0;
    width: 30px;
    height: 200%;
}
#app .line.right{
    left: auto;
    right: 0;
    top: 0;
    width: 30px;
    height: 200%;
}
.back{
  background-color: #31313a;
}
</style>
