<template>
  <div id="app">
    <h3>Exemplo usando diretivas personalizadas</h3>
    <hr />
    <input
      type="text"
      placeholder="Escolher posição do texto"
      v-model="position"
    />
    <input type="number" placeholder="Escolher posição em px" v-model="px" />
    <!-- Diretiva registrada globalmente -->
    <div v-destaque:fundo.alternar="'blue'">
      Minha diretiva personalizada usando
    </div>
    <!-- Diretiva registrada localmente -->
    <div
      v-height="{ height: '20px', width: '120px', color: 'lightgray' }"
    ></div>

    <h1 v-pin:[position]="px">Estou fixada na posição: {{ position }}</h1>
    <hr />
    <button v-quando:click="incrementar">
      Executar função com diretiva personalizada
    </button>
    <h5 v-text="numero"></h5>
  </div>
</template>

<script>
export default {
  name: "app",
  //Posso criar diretivas personalizadas localmente
  directives: {
    //   Nome da minha diretiva
    height: {
      bind(el, binding, vnode) {
        const s = JSON.stringify;
        el.innerHTML = `
			<h1>${binding.name}</h1>
			<h3>Height: ${s(binding.value.height)}</h3>
			<h3>Width: ${s(binding.value.height)}</h3>
			<h3>Color: ${s(binding.value.color)}</h3>
			<em>${binding.expression}</em>
		`;
      },
    },
    pin: {
      bind(el, binding, Vnode) {
        el.style.position = "fixed";
        let spacing = binding.arg == "left" ? "left" : "top";
        el.style[spacing] = binding.value + "px";
      },
      update(el, binding, Vnode) {
        let spacing = binding.arg == "left" ? "left" : "top";
        el.style[spacing] = binding.value + "px";
      },
    },
    quando: {
      bind(el, binding, VNode) {
        console.log(binding)
        const tipo=binding.arg 
        el.addEventListener(tipo , () => {
          binding.value();
        });
      },
    },
  },
  data() {
    return {
      position: "left",
      px: 0,
      numero: 0,
    };
  },
  methods: {
    incrementar() {
      this.numero++;
    },
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

  font-size: 1rem;
  height: 1920px;
}

#app div {
  margin: 20px;
}
</style>
