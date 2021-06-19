export default {
  namespaced:true,
    // Estado específico do módulo
  state: {
    produtos: [],
  },
  mutations: {
    setProdutos(state, payload) {
      state.produtos.push(payload.produto);
    },
  },
  actions: {
    setProdutos(context, payload) {
      setTimeout(() => {
        context.commit({
          type: "setProdutos",
          produto: payload,
        });
      }, 1000);
    },
  },
};
