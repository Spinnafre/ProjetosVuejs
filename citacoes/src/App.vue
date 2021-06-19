<template>
  <div id="app">
    <div class="header">
      <button @click="component = 'Sobre'" :class="{'active': component=='Sobre'}">Sobre</button>
      <button @click="component = 'Citacoes'"  :class="{'active': component=='Citacoes'}">Citacao</button>
      <button @click="component = 'Posts'" :class="{'active': component=='Posts'}">Posts</button>
    </div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";
import Posts from "./components/archivePosts";
export default {
  components: { Citacoes, Sobre, Posts },
  data() {
    return {
      component: "Citacoes",
    };
  },
};
</script>

<style >
body {
  background-image: linear-gradient(
    to right,
    #43527a,
    #425881,
    #415d87,
    #3f638d,
    #3d6993
  );
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
  box-sizing: border-box;
  position: relative;
}
.header {
  display: flex;
  position: absolute;
  top: 0;
}
.header button.active{
    background: rgb(241, 195, 168);
	border: solid 2px rgba(248, 140, 39, 0.867);
}
.header button {
  outline: none;
  border: none;
  padding: 8px;
  margin: 10px 5px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 300;
  color: rgb(90, 90, 90);
  background-color: rgba(247, 247, 247, 0.945);
}
</style>