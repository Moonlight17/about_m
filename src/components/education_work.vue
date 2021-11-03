<template>
    <div id="educ" class="row">
        <p id="title">Образование и опыт работы</p>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
            Column
            <vue-timeline-update v-for="i in edu" :key="i.id"
                :date="i.dateStart"
                :title="i.degree"
                :description="i.description"
                :category="i.category"
                icon="school"
                color="white"
                is-last
            />
        </div>
        
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
            text
            <vue-timeline-update v-for="i in work" :key="i.id"
                :date="i.dateStart"
                :title="i.title"
                :description="i.description"
                :category="i.category"
                icon="code"
                color="white"

            />
        </div>
    </div>
</template>


<script>

export default {
  name: 'Education',
  props: {
    work: Array,
    edu: Array,
  },
  data() {
      return {
          color: '#b4b4b4'
      }
  },
  created(){
    this.convert();
  },
  mounted(){
    // alert(document.documentElement.clientHeight);
    // document.title = "Edit Case " + this.name;
    // console.log(this.$scrollTo.options);
    this.colorer();
    
  },
  methods: {
      colorer(){
        let x = document.getElementsByClassName("gb-vue-timeline-update__description"),themeChange,i;
        for(i = 0; (themeChange = x[i]); i++) {
            themeChange.style.color = this.color;
        }
        x = document.getElementsByClassName("gb-base-badge__focuser"),themeChange,i;
        for(i = 0; (themeChange = x[i]); i++) {
            themeChange.style.color = this.color;
        }
      },
      convert(){
        // console.log(this.edu);
        for(let i in this.work){
          for(let j in this.work[i]){
            if (j == 'dateStart' || j == 'dateEnd'){
              this.work[i][j] = new Date(this.work[i][j]);
            }
          }
        }
        for(let i in this.edu){
          for(let j in this.edu[i]){
            if (j == 'dateStart' || j == 'dateEnd'){
              this.edu[i][j] = new Date(this.edu[i][j]);
            }
          }
        }
      }
  }
}
</script>

<style scoped>
#educ{
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
[class^="gb-"]:not(.gb-base-icon) {
  font-family: Arial, Helvetica, sans-serif !important;
  color: #f26b38;
}
.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__description{
    
  color: #f26b38 !important;
}
</style>