import Vue from 'vue'

export default new Vue({
    methods:{
        alterarIdade(age){
            this.$emit('alterarIdade',age)
        },
        quandoAlterarIdade(callback){
            this.$on('alterarIdade',callback)
        }
    }
})