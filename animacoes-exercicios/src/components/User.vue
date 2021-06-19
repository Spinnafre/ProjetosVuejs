<template>
  <div class="container-fluid mt-2">
    <b-button size="sm" variant="info" class="mb-2" @click="addNewUser">Adicionar Novo</b-button>
    <b-list-group v-for="(user, i) in users" :key="i">
      <b-list-group-item button v-text="user" @click="removeUser(i)"></b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      users: ["Davi Silva da Penha", "Maria José", "John Wick"],
    };
  },
  methods: {
    removeUser(i) {
        this.users.splice(i,1)
    },
    addNewUser(){
        let newName=Math.random().toString(16).split('.')[1]
        this.users.push(newName)
    }
  },
};
</script>

<style>
</style>