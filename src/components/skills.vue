<template>
    <div id="skills" class="skills row">
      <p id="title">Skills</p>
        <div class="com-sm-12 col-lg-6 column">
          <!-- <p class="mini_title" @click="Height('DevOps')">DevOps</p> -->
          <p class="mini_title">DevOps</p>
          <div id="DevOps" class="DevOps">
            <div v-for="i in data.DevOps" :key="i.title" class="skill">
              <p><span class="tech">{{i.title}} </span><span class="year">({{i.dateStart}} years)</span></p>
              <div class="progress">
                <div class="progress-bar progress-bar-animated" role="progressbar" :style="{width: (i.dateStart/maxim.DevOps)*100+ '%' }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="com-sm-12 col-lg-6 column">
          <!-- <p class="mini_title" @click="Height('Develop')">Develop</p> -->
          <p class="mini_title">Develop</p>
          <div id="Develop" class="Develop">
            <div v-for="i in data.Develop" :key="i.title" class="skill">
              <p><span class="tech">{{i.title}} </span><span class="year">({{i.dateStart}} years)</span></p>
              <div class="progress">
                <div class="progress-bar progress-bar-animated" role="progressbar" :style="{width: (i.dateStart/maxim.Develop)*100+ '%' }"></div>
              </div>
            </div>
          </div>
        </div>
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
      maxim:{}
    }
  },
  mounted() {
    this.convert();
  },
  methods: {
    convert(){
      var term={};
      this.maxim={};
      let act,iter;
        let check = new Date();
        let milliDays = 1000*60*60*24;
      for ( act in this.data){
        term[act]=[]
        for (iter in this.data[act]) {
          // console.log(this.data[act][iter])
          let years = new Date(this.data[act][iter].dateStart);
          let AgeInDays = (check - years)/milliDays;
          this.data[act][iter].dateStart = Math.ceil(AgeInDays/365);

          // console.log(this.data[act][iter].dateStart);
          term[act].push(this.data[act][iter].dateStart);
        }
      }
      this.maximum(term);
    },
    maximum(term){
      for (let act in term){
        this.maxim[act] = Math.max.apply(null, term[act]);
      }
    }
  },
  computed: {
    info(){
      return 0
    }
  }
}
</script>

<style scoped>
#skills{
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 8%;
}
#title{
    text-align: left;
    font-size: 1.4em;
}
.mini_title{
    width: 50%;
    margin: 0 auto;
    font-size: 1.2em;
    padding: 0;
    padding: 0 7%;
    border: 2px solid #b4b4b4;
}
.skills{
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 80px 150px 80px;
}
.column{
  margin-bottom: 10%;
}
.skill{
  text-align: left;
  padding: 15px 30px 0px 30px;
}
.skill p{
  padding-bottom: 0px;
  margin-bottom: 0;
  width: 100%;
  text-align: right;
}
.progress-bar{
  background-color: #f26b38;
}
.tech{
  font-size: 1em;
  font-variation-settings: 'wght' 600, 'wdth' 50;
  display: inline-block;
  float: left;
}
.year{
  text-align: right;
  padding-right: 0%;
}
.progress{
  height: 0.17em;
}
.skill:hover .progress{
}
</style>