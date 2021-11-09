<template>
    <div id="me" class="me">
        <p id="title">ABOUT MYSELF</p>
        <div class="clearfix desc">
            <img id="photo" :src="publicPath+'photo.jpg'" class="col-lg-5 float-md-start mb-3 ms-md-3">

            <p v-for="item in me.resume" :key="item.id">
                {{item.text}}
            </p>
        </div>
        <div id="data" class="container">
            <div class="row ">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <p><span class="data">Name:</span><span class="info"> {{me.name}} {{me.firstName}}</span></p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <p><span class="data">Age:</span><span class="info"> {{me.age}}</span></p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <p><span class="data">Specialization:</span><span class="info"> {{me.specialization}}</span></p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <p><span class="data">Country:</span><span class="info"> {{me.country}}</span></p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <p><span class="data">City:</span><span class="info"> {{me.city}}</span></p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <p><span class="data">E-mail:</span><a class="info" :href="'mailto:'+me.email"> {{me.email}}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'resume',
  props: {
    me: Object
  },
  data() {
      return {
        publicPath: process.env.BASE_URL
          
      }
  },
  mounted(){
      this.convert();
  },
  methods:{
      convert(){
        let age = new Date(this.me.age);
        let check = new Date();
        let milliDays = 1000*60*60*24;
        let AgeInDays = (check - age)/milliDays;
        this.me.age = Math.floor(AgeInDays/365) + " y.o.";
      }
  },
}
</script>

<style scoped>
#me {
    color: #b4b4b4;
    position: relative;
    width: 100%;
    padding: 0 10% 10% 10%;
}
#title{
    text-align: left;
    font-size: 1.4em;
}
img#photo{
    padding: 0;
    max-width: 200px;
    border-radius: 7%;
    /* border: 2px solid red; */
    zoom: 100%;
    margin: 10px;
}
#data{
    text-align: left;
    font-size: 1em;
}
.desc{
    text-align: justify;
    font-size: 1em;
}
#data span.data{
    color: #f26b38;
}
#data .info{
    color: #b4b4b4;
    text-decoration: none;
}
</style>
