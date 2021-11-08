<template>
    <div id="softs" class="row justify-content-md-center">
      <p id="title">Soft Skills</p>
      <div class="col-sm-12 col-lg-12">
        <div id="SoftSkills" class="SoftSkills">
          <p id="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum unde molestias consectetur eos cum quod doloremque molestiae, et aliquid quisquam magnam earum iste ab quis, odio fugit accusamus porro.
          </p>
          <p id="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum unde molestias consectetur eos cum quod doloremque molestiae, et aliquid quisquam magnam earum iste ab quis, odio fugit accusamus porro.
          </p>
          <p id="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum unde molestias consectetur eos cum quod doloremque molestiae, et aliquid quisquam magnam earum iste ab quis, odio fugit accusamus porro.
          </p>
          <p id="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum unde molestias consectetur eos cum quod doloremque molestiae, et aliquid quisquam magnam earum iste ab quis, odio fugit accusamus porro.
          </p>
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
  padding: 0 10%;
}
#title{
    text-align: left;
    font-size: 1.4em;
}
#desc{
  padding: 15px 0px 0px 0px;
  text-align: justify;
}
.soft{
  text-align: left;
  padding: 15px 0px 0px 0px;
}
.soft p{
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
.soft:hover .progress{
}
</style>