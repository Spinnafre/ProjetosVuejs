<template>
  <div class="question">
    <!-- <h6>Scores: {{ this.scores }}</h6> -->
    <h1>{{ question.text }}</h1>
    <ul class="answers">
      <li
        v-for="(answer, i) in question.answers"
        :key="i"
        @click="changeResp(answer.correct,answer.text)"
      >
        <span class="number">{{ i }}</span>
        <span class="text">{{ answer.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Questions",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeResp(correct,answer) {
      this.$emit("changeResp", {cond:correct,txt:answer});
    },
  },
};
</script>

<style>
.question {
  /* height: 600px; */
  color: #000;
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  font-size: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

ul.answers {
  font-size: 2rem;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.answers li {
  margin: 20px;
  background-color: #89c454;
  border-radius: 8px;
  width: 40%;

  display: flex;
}

.answers .number {
  padding: 10px;
  background-color: #1e9c31;
  color: #fff;
  flex-basis: 30px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.answers .text {
  flex: 1;
  align-self: center;
}
</style>
