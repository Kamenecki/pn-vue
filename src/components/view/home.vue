<template>

  <div class="container">
    <nav>Navbar</nav>
    <main>Main</main>
    <div id="content1">content1</div>
    <div id="content2">content2</div>
    <div id="content3">content3</div>
    <div id="content4">content4</div>
    <div id="content5">content5</div>
    <div id="content6">content6</div>
    <div id="content7">content7</div>
    <div id="content8">content8</div>
    <div id="content9">content9</div>


  </div>

</template>



<script>
export default {
name: "home"
}
</script>



<style scoped>

.container{
  display:grid;
  height:110vh;

  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: 10% 10% 20% 20% 20%;
  grid-template-areas:
      "nav nav nav"
      "main main main"
      "content1 content2 content3"
      "content4 content5 content6"
      "content7 content8 content9";
}

nav{
  background: azure;
  grid-area:nav;
}

main{
  background: #2c3e50;
  grid-area:main;
}

#content1{
  background: aquamarine;
  grid-area:content1;
}

#content2{
  background: aquamarine;
  grid-area:content2;
}

#content3{
  background: aquamarine;
  grid-area:content3;
}

#content4{
  background: aquamarine;
  grid-area:content4;
}

#content5{
  background: aquamarine;
  grid-area:content5;
}

#content6{
  background: aquamarine;
  grid-area:content6;
}

#content7{
  background: aquamarine;
  grid-area:content7;
}

#content8{
  background: aquamarine;
  grid-area:content8;
}

#content9{
  background: aquamarine;
  grid-area:content9;
}
</style>