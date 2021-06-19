<template>
    <div class="componente">
         <h4 v-text="nome"></h4>
        <input type="text" v-model="nome"/>
        <input type="number" v-model="age"/>
        <button type="button" @click="resetar()">Resetar Por Callback</button>
        <br>
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
    </div>
</template>

<script>
import SharedEvents from './sharedEvents'
export default {
    props:{
        resetar:Function
    },
    data(){
        return{
            nome:"",
            sex:"",
            age:0
        }
    },
    watch:{
        nome(){
            this.$emit('Nome',this.nome)
        },
        age(){
            SharedEvents.alterarIdade(this.age)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
