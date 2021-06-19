<template>
  <div>
    <div class="header-container">
      <button @click="component = 'Archive'" :class="{'active':component == 'Archive'}">Archive</button>
      <button @click="component = 'Posts'" :class="{'active':component == 'Posts'}">Posts</button>
    </div>

    <div class="arquivePost">
      <div class="cards-container">
        <keep-alive>
            <component :is="component"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Archive from "./Archive";
import Posts from "./Posts";
export default {
  components: {
    Archive,
    Posts,
  },
  data() {
    return {
      component: "Posts",
    };
  },
};
</script>

<style scoped>
.header-container button.active{
    background: rgb(206, 206, 206);
}
.header-container button {
  background: rgb(248, 248, 248);
  padding: 4px;
  margin: 0;
  border: none;
  font-size: 0.8em;
  transition: all ease 0.3s;
}
.header-container button:hover {
  background: rgb(223, 223, 223);
}
.header-container > :first-child {
  border-radius: 4px 0 0 0;
}
.header-container > :last-child {
  border-radius: 0 4px 0 0;
}
.arquivePost {
  background-color: rgb(248, 248, 248);
  /* padding: 8px; */
  width: 750px;
  height: 350px;
  border: solid 2px #dedede;
}
.cards-container {
  height: 100%;
  background-color: rgb(248, 248, 248);
}
</style>
