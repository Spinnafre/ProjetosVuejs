<template>
    <div class="citacao"> 
        <slot name="fonte"></slot>
        <slot name="texto"></slot>
        <slot name="autor"></slot>
    </div>
</template>

<script>

export default {
    name:'citacao',
    props:{
        texto:{
            type:String,
            default:'Vazio'
        }
    }
}
</script>
<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(247, 244, 244, 0.945);
        padding: 25px;
        width: 450px;
        height: 300px;
        overflow-y: auto;
        border-radius: 8px;
        
    }
</style>
