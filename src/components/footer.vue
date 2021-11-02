
<template>
    <div class="footer">
      <div class="d-flex align-items-center justify-content-between" style="height: 100%;">
        <div class="p-1 text-muted vertical">
          <p class="year">© 2021</p>
        </div>
        <div class="p-1 text-muted vertical">
          <a target="blank" href="https://github.com/Moonlight17"><font-awesome-icon icon="fa-brands fa-github" class="icons"/></a>
          <a target="blank" href="https://www.linkedin.com/in/moonlight1790"><font-awesome-icon icon="fa-brands fa-linkedin" class="icons"/></a>
          <a target="blank" href="https://www.facebook.com/profile.php?id=100015795815781"><font-awesome-icon icon="fa-brands fa-facebook" class="icons"/></a>
          <a target="blank" href="https://www.instagram.com/moonlight1790/"><font-awesome-icon icon="fa-brands fa-instagram" class="icons"/></a>
        </div>
      </div>
    </div>
</template>
<style>
/* footer */

#app .footer{
  position: fixed;
  bottom: 30px;
  left: 30px;
  height: 50px;
  width: calc(100% - 60px);
  padding: 0;
  background-color: #31313a;
}
#app .footer p{
  margin: 0;
}
#app .footer .year{
  padding: 15px;
}
#app .footer .icons{
  color: white;
  font-size: 1.3em;
  padding: 5px;
  display: inline-block;
  vertical-align: middle;
}
#app .footer .icons:hover{
  color: #f5e550;
  transition-duration: 0.5s;
  transform: scale(1.3);
  padding: 5px;
}

</style>