<template>
    <div id="skills" class="skills row">
      <p id="title">Навыки</p>
      <!-- <pre>
        {{data}}
      </pre> -->
        <div class="com-sm-12 col-lg-6">
          <p class="mini_title" @click="Height('DevOps')">DevOps</p>
          <div id="DevOps" v-show-slide:700:linear="DevOps" class="DevOps">
            <div v-for="i in data.DevOps" :key="i.title" class="skill">
              <p><span class="tech">{{i.title}} </span><span class="year">({{i.level}} year)</span></p>
              <div class="progress">
                <div class="progress-bar progress-bar-animated" role="progressbar" :style="{width: i.level+1+ '0%' }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="com-sm-12 col-lg-6">
          <p class="mini_title" @click="Height('Develop')">Develop</p>
          <div id="Develop" v-show-slide:260:linear="Develop" class="Develop">
            <div v-for="i in data.Develop" :key="i.title" class="skill ">
              <p>{{i.title}}</p>
              <div class="progress">
                <div class="progress-bar progress-bar-animated" role="progressbar" :style="{width: i.level+1+ '0%' }">{{i.level}} year</div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="com-sm-12 col-lg-6">
          <h2 @click="Height('Develop')" aria-controls="Develop" :aria-expanded="Develop ? 'true' : 'false'">Develop</h2>
          <ul id="Develop" v-show-slide:4000:linear="Develop" class="Develop">
            <li v-for="i in data.Develop" :key="i.title" class="skill">
              {{i.title}}
            </li>
        </ul>
        </div> -->
    </div>
</template>


<script>
export default {
  name: 'skills',
  props: {
    data: Object
  },
  data() {
    return {
      DevOps: true,
      Develop: true,
    }
  },
  mounted() {
    // console.log(this.data);
  },
  methods: {
    Height (name){
      this[name] = !this[name];
    },
  },
  computed: {
    
  }
}
</script>

<style scoped>
#skills{
  color: #b4b4b4;
  /* font-size: 1.2em; */
  position: relative;
  width: 100%;
  padding: 0 80px 150px 80px;
}
#title{
    text-align: left;
    font-size: 1.4em;
}
.mini_title{
    width: 30%;
    margin: 0 auto;
    font-size: 1.2em;
    padding: 0;
    padding: 0 80px 0px 77px;
    border: 2px solid #b4b4b4;
    /* cursor: pointer; */
}
.skills{
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 80px 150px 80px;
}
.skill{
  text-align: left;
  /* transition-duration: 500ms; */
  padding: 15px 30px 0px 30px;
}
.skill p{
  padding-bottom: 0px;
  margin-bottom: 0;
}
/* .skill:hover{
  font-size: 1.37em;
  font-weight: 600;
  font-variation-settings: 'wght' 700, 'wdth' 50;
} */
.progress-bar{
  background-color: #f26b38;
}
.tech{
  font-size: 1em;
  /* font-weight: 400; */
  font-variation-settings: 'wght' 600, 'wdth' 50;
  display: inline-block;
  width: 9em;
}
.year{
  
}
.progress{
  height: 0.17em;
  /* font-size: 1em; */
  /* color: blueviolet; */
  /* transition-duration: 500ms; */

}
.skill:hover .progress{
  /* font-size: 2.37em; */
}
</style>