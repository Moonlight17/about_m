<template>
    <div id="softs" class="softs row">
      <p id="title">Soft Skills</p>
        <div class="com-sm-12 col-lg-6">
          <div id="SoftSkills" class="SoftSkills">
            <div v-for="i in data" :key="i.title" class="soft">
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
  name: 'softs',
  props: {
    data: Array
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
#softs{
  color: #b4b4b4;
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
}
.softs{
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 80px 150px 80px;
}
.soft{
  text-align: left;
  padding: 15px 30px 0px 30px;
}
.soft p{
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
  width: 90%;
  max-width: 250px;
}
.year{
}
.progress{
  height: 0.17em;
}
.soft:hover .progress{
}
</style>