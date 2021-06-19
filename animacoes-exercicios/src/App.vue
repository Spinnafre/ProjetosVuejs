<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <!-- <b-button variant="primary" @click="exibir = !exibir"
      >EXIBIR ALERTA</b-button
    > -->

    <!-- <transition name="fade">
			<b-alert show class="mt-2" v-if="exibir">OI VUE</b-alert>
		</transition>

		<transition name="slide">
			<b-alert show class="mt-2" v-if="exibir">COMO VAI?</b-alert>
		</transition>
		<transition 
			mode="in-out"
			enter-active-class="flipInY"
			leave-active-class="bounceOutRight"
		>
			<b-alert show class="mt-2" v-if="exibir">USANDO O ANIMATED</b-alert>
		</transition> -->
    <!-- <hr />
    <b-select v-model="styleSelected">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select> -->
    <!-- Com o appear sempre que o componente for carregado irá tentar executar a animaçã/transição -->
    <!-- <transition :name="styleSelected" mode="out-in" appear>
      <b-alert variant="info" show class="mt-2" v-if="exibir" key="fade"
        >Exibir com FADE</b-alert
      >
      <b-alert variant="warning" show class="mt-2" v-else key="slide"
        >COMO VAI?</b-alert
      >
    </transition>

    <hr />
    <b-button variant="light" @click="exibir2 = !exibir2">Animar</b-button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="square" v-if="exibir2"></div>
    </transition>
    <br /> -->

    <!-- <div class="mt-2">
      <b-button variant="primary" @click="component = 'Users'" class="mr-2"
        >Users</b-button
      >
      <b-button variant="secondary" @click="component = 'Books'"
        >Books</b-button
      >
    </div> -->

    <!-- <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </transition> -->
    <!-- <b-button size="sm" variant="info" class="mb-2" @click="addNewUser"
      >Adicionar Novo</b-button
    >
    <transition-group name="fade" appear>
      <b-list-group v-for="(user, i) in users" :key="i">
        <b-list-group-item
          button
          v-text="user"
          @click="removeUser(i)"
        ></b-list-group-item>
      </b-list-group>
    </transition-group> -->
    
  </div>
</template>

<script>
import Users from "./components/User";
import Books from "./components/Books";
export default {
  name: "App",
  components: {
    Users,
    Books,
  },
  data() {
    return {
      exibir: false,
      exibir2: false,
      styleSelected: "fade",
      elementWidth: 0,
      component: "Users",
      users: ["Davi Silva da Penha", "Maria José", "John Wick"],
    };
  },
  methods: {
    removeUser(i) {
      this.users.splice(i, 1);
    },
    addNewUser() {
      let newName = Math.random().toString(16).split(".")[1];
      this.users.push(newName);
    },
    beforeEnter(el) {
      this.elementWidth = 0;
      el.style.width = "0px";
    },
    enter(el, done) {
      let count = 0;
      let temporizador = setInterval(() => {
        let newWidth = this.elementWidth + count * 10;
        el.style.width = `${newWidth}px`;
        if (newWidth > 300) {
          clearInterval(temporizador);
          // Minha animação irá encerrar quando chamar o done()
          done();
        }
        count++;
      }, 30);
    },
    afterEnter(el) {},
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      this.elementWidth = 300;
      el.style.width = `${this.elementWidth}px`;
    },
    leave(el, done) {
      console.log("leave");
      let count = 0;
      let temporizador = setInterval(() => {
        let newWidth = this.elementWidth - count * 10;
        el.style.width = `${newWidth}px`;
        if (newWidth > 300) {
          clearInterval(temporizador);
          // Minha animação irá encerrar quando chamar o done()
          done();
        }
        count++;
      }, 30);
    },
    afterLeave(el) {},
    leaveCancelled(el) {},
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
.square {
  height: 320px;
  background: #2c3e50;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s linear;
}
/* .fade-enter-to{
	opacity: 1;
}
.fade-leave{
	opacity: 1;
} */

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
}

.slide-leave-active {
  animation: slide-out 2s ease;
}
</style>
