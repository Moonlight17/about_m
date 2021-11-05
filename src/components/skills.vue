<template>
    <div id="skills" class="skills row">
      <p id="title">Навыки</p>
        <div class="com-sm-12 col-lg-6 column">
          <p class="mini_title" @click="Height('DevOps')">DevOps</p>
          <div id="DevOps" class="DevOps">
            <div v-for="i in data.DevOps" :key="i.title" class="skill">
              <p><span class="tech">{{i.title}} </span><span class="year">({{i.level}} year)</span></p>
              <div class="progress">
                <div class="progress-bar progress-bar-animated" role="progressbar" :style="{width: i.level+1+ '0%' }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="com-sm-12 col-lg-6 column">
          <p class="mini_title" @click="Height('Develop')">Develop</p>
          <div id="Develop" class="Develop">
            <div v-for="i in data.Develop" :key="i.title" class="skill">
              <p><span class="tech">{{i.title}} </span><span class="year">({{i.level}} year)</span></p>
              <div class="progress">
                <div class="progress-bar progress-bar-animated" role="progressbar" :style="{width: i.level+1+ '0%' }"></div>
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
    }
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    
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
    width: 30%;
    margin: 0 auto;
    font-size: 1.2em;
    padding: 0;
    padding: 0 80px 0px 77px;
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
}
.progress-bar{
  background-color: #f26b38;
}
.tech{
  font-size: 1em;
  font-variation-settings: 'wght' 600, 'wdth' 50;
  display: inline-block;
  width: 9em;
}
.year{
}
.progress{
  height: 0.17em;
}
.skill:hover .progress{
}
</style>