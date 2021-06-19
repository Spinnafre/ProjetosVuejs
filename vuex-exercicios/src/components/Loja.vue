<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="add">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed:{
    ...mapActions('cart',{
      adicionar: "setProdutos",
    }),
    quantidade:{
      get(){
        return this.$store.state.params.quantidade
      },
      set(qtd){
        return this.$store.commit({
          type:'setQuantidade',
          quantidade:qtd
        })
      }
    },
    preco:{
      get(){
        return this.$store.state.params.preco
      },
      set(p){
        this.$store.commit({
          type:'setPreco',
          preco:p
        })
      }
    }
  },
  methods: {
    // ...mapMutations({
    //   adicionar: "setProdutos",
    // }),
    
    add() {
      //   this.$store.commit("setProdutos", {
      //     id: this.sequencia,
      //     nome: `Produto ${this.sequencia}`,
      //     quantidade: this.quantidade,
      //     preco: this.preco,
      //   });
      this.adicionar({
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      });
      this.sequencia++;
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
