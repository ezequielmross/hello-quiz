<script setup lang="ts">
import router from "@/router";
import { useQuestionsStore } from '@/stores/questions';

const store = useQuestionsStore();

function nextQuestion(option: string) {
  store.replyQuestion(option);
  if (store.currentQuestionIndex > store.questions.length - 1) {
    router.push('/results');
  }
}
</script>

<template>
  <main v-if="store.currentQuestion">
    <h1>{{ store.currentQuestion.question }}</h1>
    <ul>
      <li v-for="option in store.currentQuestion.options" :key="option">
        <div class="btn" @click="nextQuestion(option)">
          {{ option }}
        </div>
      </li>
    </ul>
    <button @click="store.goPreviousQuestion" v-if="store.currentQuestionIndex > 0">Back</button>
  </main>
</template>

<style scoped>
.btn {
  cursor: pointer;
}
</style>
