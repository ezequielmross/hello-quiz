/// <reference types="vite/client" />
import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';

const SERVER_URL = import.meta.env.SERVER_URL ?? 'http://localhost:3000';

type Question = {
  question: string;
  options: string[];
  correct: string;
  answer?: string | null;
};

function getCacheAnswers(questions: Question[]) {
  const cache = localStorage['questions'] ? JSON.parse(localStorage.getItem('questions')!) : [];

  if (questions.length < 1) return cache;

  return questions.map((q: Question) => {
    const questionCache = cache.find((qCache: Question) => q.question === qCache.question) ?? {};
    return { ...q, answer: questionCache.answer };
  });
}
function cacheAnswers(questions: Question[]) {
  localStorage.setItem('questions', JSON.stringify(questions));
}

export const useQuestionsStore = defineStore('questions', () => {
  const questions = ref<Question[]>([]);
  const currentQuestion = ref<Question>();
  const currentQuestionIndex = ref(0);

  function replyQuestion(option: string) {
    if (currentQuestion.value) {
      currentQuestion.value.answer = option;
    }

    currentQuestion.value = questions.value[++currentQuestionIndex.value];

    cacheAnswers(questions.value);
  }
  function goPreviousQuestion() {
    if (currentQuestionIndex.value > 0) {
      currentQuestion.value = questions.value[--currentQuestionIndex.value];
    }
  }
  async function calcScore() {
    const payload = getCacheAnswers(questions.value).map((q: Question) => {
      return { question: q.question, answer: q.answer };
    });
    const response = await fetch(SERVER_URL + '/api/submit', { method: 'POST', body: JSON.stringify(payload) });
    const responseJson = await response.json();

    return `${responseJson.totalCorrected}/${questions.value.length}`;
  }
  function reset() {
    questions.value = questions.value.map(q => ({ ...q, answer: null }));
    currentQuestionIndex.value = 0;
    currentQuestion.value = questions.value[0];
    cacheAnswers([]);
  }

  onMounted(async () => {
    const response = await fetch(SERVER_URL + '/api/questions');
    const responseJson = await response.json();
    
    questions.value = getCacheAnswers(responseJson);
    currentQuestion.value = questions.value[0];
  });

  return { currentQuestion, currentQuestionIndex, questions, replyQuestion, goPreviousQuestion, calcScore, reset };
})