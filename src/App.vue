<template>
  <div id="app" class="back" style="">
    <div id="about" class="align-self-start position-relative" :style="{'min-height': `${heightAbout}px`}">
        <div class="position-absolute top-50 start-50 translate-middle name">
            <StartedPage :name="me.name" :firstName="me.firstName" :desc="desc"/>
        </div>
      <a href="#" id="arrowDown"><font-awesome-icon icon="fa-solid fa-arrow-down" /></a>
    </div>
    <div id="resume" class="align-self-start position-relative" :style="{'min-height': `${heightAbout}px`}">
        <Resume :me="me"/>
    </div>
    <div id="education" class="align-self-start position-relative" :style="{'min-height': `${calcEduc}px`}">
        <Education :edu="me.edu"/>
    </div>
    <!-- <div id="work" class="align-self-start position-relative" :style="{'min-height': `${heightAbout}px`}">
        <Work :me="me"/>
    </div> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <StartedPage msg="Welcome to Your Vue.js App"/> -->
    <div id="ololo">
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
    </div>
    <!-- footer -->
    <Footer />
    <!-- borders -->
    <div class="line top"></div>
    <div class="line bottom"></div>
    <div class="line left"></div>
    <div class="line right"></div>
  </div>
</template>

<script>
import StartedPage  from './components/StartedPage.vue';
import Resume       from './components/resume.vue';
import Education    from './components/education.vue';
// import Work         from './components/work.vue';
import Footer       from './components/footer.vue';

export default {
  name: 'app',
  components: {
    StartedPage,
    Resume,
    Education,
    // Work,
    Footer
  },
  data() {
    return {
      me:{
        firstName: 'Serov',
        name: 'Sergei',
        age: 23,
        specialization: 'DevOps Engineer',
        city: 'Moscow',
        country: 'Russia',
        email: 'Moonlight234@yandex.ru',
        edu:[
          {
            id: 0,
            title: 'Московский государственный технический университет им. Н. Э. Баумана',
            degree: 'Бакалавр',
            period: '2015 - 2019',
            description: 'Факультет "Информатика и системы управления"; Кафедра "Системы обработки информации и управления"',
            gpa: 4.81,
          },
          {
            id: 1,
            title: 'Московский государственный технический университет им. Н. Э. Баумана',
            degree: 'Магистр',
            period: '2019 - 2021',
            description: 'Факультет "Информатика и системы управления"; Кафедра "Системы обработки информации и управления"',
            gpa: 4.89,
          },
        ],
      },
      
      desc: 'My name is Sergei, I am a DevOps Engineer and you are on my webpage.',
    }
  },
  mounted(){
    // alert(document.documentElement.clientHeight);
    // document.title = "Edit Case " + this.name;
    // console.log(this.$scrollTo.options);
  },
  computed: {
    heightAbout(){
      return document.documentElement.clientHeight
    },
    calcEduc(){
      return document.documentElement.clientHeight/10
    }
  },
}
</script>

<style>
body{
    background-color: #31313a!important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
    width: 90%;
    margin: 0 auto;
}
#app #about{
    /* width: 90%; */
    margin: 0 auto;
    height: 100%;
                                                                                    /* display: none; */
}
#app #about .name p#me{
    color:#f0f0f0;
    font-size: 4.7em;
    font-weight: 700;
    font-stretch: extra-expanded;
}
#app .vertical{
  display: table-cell !important;
  vertical-align: middle !important;
}
/* arrow */
#app #arrowDown{
  position: absolute;
  bottom: 100px;
  padding: 6px;
  border: 3px solid white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
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
