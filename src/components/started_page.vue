<template>
<div>
  <div>
    <p class="name">{{firstName}} {{name}}</p>
  </div>
  <div class="desc">
    <p>{{desc}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'StartedPage',
  props: {
    name: String,
    firstName: String,
    desc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.name {
  font-family: "Baloo Tamma", Apple Chancery, Bradley Hand, Snell Roundhand, cursive;
  color: #c8efb7;
  font-size: 80px;
  letter-spacing: 0.2em;
  margin-top: -40px;
  text-shadow: -1px -1px 0px #31313a, 3px 3px 0px #31313a, 6px 6px 0px #f5e550;
}
.desc p{
    color: #b4b4b4;
    font-weight: 400;
    font-size: 1em;
}
</style>
