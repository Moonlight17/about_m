<template>
  <div>
  <p>{{firstName}} {{name}}</p>
</div>
</template>

<script>
export default {
  name: 'StartedPage',
  props: {
    name: String,
    firstName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-family: "Baloo Tamma", Apple Chancery, Bradley Hand, Snell Roundhand, cursive;
  /* width: 100%; */
  /* margin: 0px auto; */
  color: #c8efb7;
  font-size: 80px;
  letter-spacing: 0.2em;
  /* top: 50%; */
  /* position: absolute; */
  margin-top: -40px;
  text-shadow: -1px -1px 0px #31313a, 3px 3px 0px #31313a, 6px 6px 0px #f5e550;
}
</style>
