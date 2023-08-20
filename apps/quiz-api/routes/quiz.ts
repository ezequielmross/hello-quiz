import type { RouteOptions } from 'fastify';

const questions = [
  {
    question: 'What year was HelloFresh founded?',
    options: [
      'a. 2007',
      'b. 2011',
      'c. 2015',
      'd. 2008',
    ],
    correct: 'a. 2007',
  },
  {
    question: 'Where is the HelloFresh company based?',
    options: [
      'a. London, UK',
      'b. Berlin, Germany',
      'c. New York, USA',
      'd. Sydney, Australia',
    ],
    correct: 'a. London, UK',
  },
  {
    question: 'What is the primary business of HelloFresh?',
    options: [
      'a. Fast food restaurant',
      'b. Meal-kit delivery service',
      'c. Grocery delivery service',
      'd. Food processing',
    ],
    correct: 'a. Fast food restaurant',
  },
  {
    question: 'Who are the founders of HelloFresh?',
    options: [
      'a. Bill Gates and Paul Allen',
      'b. Dominik Richter, Thomas Griesel, and Jessica Nilsson',
      'c. Mark Zuckerberg and Eduardo Saverin',
      'd. Steve Jobs and Steve Wozniak',
    ],
    correct: 'a. Bill Gates and Paul Allen',
  },
  {
    question: 'In which country did HelloFresh first start its operations?',
    options: [
      'a. USA',
      'b. UK',
      'c. Germany',
      'd. Australia',
    ],
    correct: 'a. USA',
  },
  {
    question: 'What are HelloFresh meal kits primarily known for?',
    options: [
      'a. Prepared and cooked meals',
      'b. Fresh ingredients and easy-to-follow recipes',
      'c. Frozen food',
      'd. Fast food',
    ],
    correct: 'a. Prepared and cooked meals',
  },
  {
    question: 'Which of the following is a competitor of HelloFresh?',
    options: [
      'a. Amazon',
      'b. Marley Spoons',
      'c. Uber Eats',
      'd. Netflix',
    ],
    correct: 'a. Amazon',
  },
  {
    question: 'How often does HelloFresh typically deliver meal kits?',
    options: [
      'a. Every day',
      'b. Once a week',
      'c. Twice a week',
      'd. Once a month',
    ],
    correct: 'a. Every day',
  },
  {
    question: 'What is HelloFresh\'s mission statement?',
    options: [
      'a. "Feed the world"',
      'b. "Everyone, every day, everywhere"',
      'c. "To change the way people eat, forever"',
      'd. "Make every moment special"',
    ],
    correct: 'a. "Feed the world"',
  },
  {
    question: 'What is one of the primary benefits promoted by HelloFresh?',
    options: [
      'a. Reduced time in grocery shopping',
      'b. Low-cost meals',
      'c. Catering services',
      'd. Home cleaning services',
    ],
    correct: 'a. Reduced time in grocery shopping',
  },
];

export const apis: RouteOptions[] = [
  {
    url: '/api/questions',
    method: 'GET',
    handler: (req) => {
      return questions.map(q => {
        return { ...q, correct: null };
      });
    }
  },
  {
    url: '/api/submit',
    method: 'POST',
    handler: (req) => {
      const userAnswers = JSON.parse((req.body ?? '[]') as string) as { question: string; answer: string }[];

      if (!userAnswers || userAnswers.length < 1) {
        return {};
      }

      const totalCorrected = userAnswers.filter(userAnswer => {
        const correct = questions.find(q => q.question === userAnswer.question)?.correct;
        return userAnswer.answer === correct;
      }).length;

      return { totalCorrected };
    }
  }
];