<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <h4 v-text="nome"></h4>
        <input type="text" v-model="nome"/>
        <hr>
        <div class="componentes">
            <app-usuario-info :name="nome" />
            <app-usuario-editar @Nome="AlterarNome" :resetar="Reiniciar"/>
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome:"Pedro",
            sex:'Feminino'
        }
    },
    methods: {
        AlterarNome(e){
            this.nome=e
        },
        Reiniciar(){
            this.nome="Pedro"
        }
    },
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
