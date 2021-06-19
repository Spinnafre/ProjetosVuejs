<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <h5 v-text="name"></h5>
        <h5 v-text="sex"></h5>
        <h5 v-text="age"></h5>
        <p>Vários detalhes...</p>
    </div>
</template>

<script>
import SharedEvents from './sharedEvents'
export default {
    name:"UsuarioInfo",
    props:{
        name:[String],
        sex:{
            type:String,
            default:'Feminino'
        }
    },
    data(){
        return{
            age:0
        }
    },
    created(){
        SharedEvents.quandoAlterarIdade((age)=>{
            this.age=age
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
