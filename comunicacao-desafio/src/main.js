import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque',{
  // Quando cahamr essa diretiva no elemento irá cair no bind
  bind(el,binding,vnode){
    if(binding.arg==='fundo'){
      el.style.backgroundColor=binding.value
    }
    
    let cor1=binding.value
    let cor2='red'
    let current=cor1

    setTimeout(()=>{
        if(binding.modifiers['alternar']){
          setInterval(()=>{
            current=current === cor1? cor2:cor1
            el.style.backgroundColor=current
            el.style.color='white'
          },1000)
        }else{
          el.style.backgroundColor=binding.value
        }
    },3000)

  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
