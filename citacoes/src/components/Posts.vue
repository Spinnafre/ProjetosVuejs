<template>
  <div class="container">
      <ul class="post-title">
          <li
            v-for="(post,i) in posts"
            :key="i"
            v-text="post.title"
            @click="selectedPost= post"
            :class="{'active':selectedPost === post}"
          >
          </li>
      </ul>
      <div class="exibition" v-if="selectedPost">
          {{selectedPost.content}}
      </div>
      <div class="exibition" v-else>
          Selecione uma opção a esquerda para exibir o conteúdo aqui
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Feijão",
          content:
            "Feijão faz bem pois é apresenta o ferro que é essencial para o corpo humano.",
        },
        {
          id: 2,
          title: "Laranja",
          content:
            "Laranja é o grande gerador de vitamina C para o corpo humano, ajudando na imunidade e digestão.",
        },
        {
          id: 3,
          title: "Leite",
          content:
            "Leite é bom pois fornece para o corpo humano o cálcio, esse último ajuda no fortalecimento dos ossos.",
        },
      ],
      selectedPost:""
    };
  },
};
</script>

<style scoped>
    ul{
        height: 100%;
        margin: 0;
        padding: 0;
        /* width: 100px; */
        text-align: center;
    }
    li{
        list-style: none;

        padding:2px 5px;
        margin-top: 4px;
        font-size: 0.8em;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: all ease 0.3s;
        border: 2px solid #dedede;
    }
    li:hover{
        background: rgb(235, 235, 235);
    }
    li.active{
        background: rgb(214, 214, 214);
    }
    .container{
        display: flex;
        height: 100%;
        padding: 0 4px;

    }
    .post-title{
        padding-right: 4px;
        border-right: 2px solid rgb(204, 204, 204);
    }
    .exibition{
        font-size: 0.65em;
        padding: 8px;
        hyphens: auto;
        word-wrap: break-word;

    }
</style>