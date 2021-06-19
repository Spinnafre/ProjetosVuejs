<template>
  <div id="app">
    <!-- <h1>Super Quiz</h1> -->
    <transition name="fade" mode="out-in">
      <Question
        v-if="!showResult"
        :question="questions[questionIndex]"
        @changeResp="changeResp"
        key="question"
      />
      <Result
        v-else
        :result="result"
        :selected="resp"
        @next="nextQuestion"
        key="result"
      />
    </transition>
  </div>
</template>

<script>
import Question from "./components/Question";
import Result from "./components/Result";
import Questions from "./util/questions";

export default {
  name: "App",
  components: {
    Question,
    Result,
  },
  data() {
    return {
      showResult: false,
      result: false,
      questionIndex: 0,
      scores: 0,
      questions: Questions,
      resp: "",
      reset: false,
    };
  },
  methods: {
    changeResp(answer) {
      this.result = answer.cond;
      this.resp = answer.txt;
      this.showResult = true;
    },
    nextQuestion() {
      let r = Math.random() * this.questions.length;
      this.questionIndex = parseInt(r);
      this.showResult = false;
      this.result = false;
      // else{
      // 	this.questionIndex=0
      // 	this.showResult=false
      // 	this.result=false

      // }
    },
  },
};
</script>

<style>
body {
  background: rgb(241, 241, 241);
  font-family: "Open Sans", sans-serif;
  color: rgb(119, 119, 119);
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#app h1 {
  font-weight: 200;
  font-size: 3rem;
}
@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to{
	  transform: rotateY(90deg);
  }
}
.fade-enter-active{
	animation: flip-in 0.3s linear;
}
.fade-leave-active{
	animation: flip-out 0.3s linear;

}


</style>
