<script setup lang="ts">
import router from "@/router";
import { useQuestionsStore } from '@/stores/questions';
import { onMounted, ref } from 'vue';

const store = useQuestionsStore();

const score = ref();

function reset() {
  store.reset();
  router.replace('/start-quiz');
}

onMounted(async () => {
  score.value = await store.calcScore();
});
</script>

<template>
  <section>
    <header>
      <h1>Congrats!</h1>
    </header>
    <div>
      <h2 v-if="score">Score: {{ score }}</h2>
      <h2 v-else>Loading</h2>
    </div>
    <button @click="reset">Play Again</button>
  </section>
</template>

<style lang="scss" scoped></style>
