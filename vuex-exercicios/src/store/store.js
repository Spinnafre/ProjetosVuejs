import Vue from "vue";
import Vuex from "vuex";

import cart from "./modules/Cart";
import params from "./modules/Params";

Vue.use(Vuex);

export default new Vuex.Store({
  /*
    Seria com se concatenasse no estado o módulo com o seu estado único
    state: {
    Cart: {
      produtos: [],
    },
    Params: {
      quantidade: 0,
      preco: 1.99,
    },
  },
  */
  modules: { cart, params },
});
