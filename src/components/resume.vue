<template>
    <div id="me" class="me">
        <p id="title">ABOUT MYSELF</p>
        <div class="clearfix desc">
            <img src="../assets/logo.png" class="col-lg-5 float-md-start mb-3 ms-md-3">

            <p>
                A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
            </p>

            <p>
                As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
            </p>

            <p>
                And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
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
#me img{
    max-width: 200px;
    padding: 10px;
}
</style>
