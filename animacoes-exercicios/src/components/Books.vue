<template>
  <div class="container-fluid mt-2">
    <b-list-group v-for="(book, i) in books" :key="i">
      <b-list-group-item button v-text="book"></b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {
      books: ["Harry Potter", "Star Wars", "Domain Drive Design"],
    };
  },
};
</script>

<style>
</style>