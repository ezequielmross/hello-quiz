# Welcome

## About

It uses [Turborepo](https://turborepo.org) and contains:

```text
.vscode
  └─ Recommended extensions and settings for VSCode users
apps (ref: `@apps`)
  ├─ quiz
  |   ├─ Vue 3
  |   ├─ Vite
  └─ quiz-api
      ├─ Nodejs
      ├─ Fastify
packages (ref: `@packages`)
  ├─ api
  |   └─ Server packages
  └─ db
      └─ Typesafe db calls using Drizzle & Planetscale 
tools (ref: `@tools`)
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

## Quick Start

To get it running, follow the steps below:

### 1. Setup dependencies

```bash
# Install dependencies
pnpm i

# Run apps
pnpm dev
```

# Hello Quiz
This take home project is designed to test your understanding of Vue.js, Python/Node.js, REST APIs, and potentially security, authentication and databases. We are looking for your creativity in the solution, code readability/structure and your thoughts and design process. There is no perfect solution so please remember to have fun.

**_Please note for this project, focus on producing working code. The database, REST APIs, and docker components are nice to have, but not essential if time is an issue, so feel free to mock or stub these portions of the application._**

Estimated completion time: 3 hours

**The HelloQuiz App should randomly select 5 questions from a database of at least 10 questions and display the score at the end. Sample questions are provided below, feel free to add more of your own.**

## Frontend Task
The frontend of the application should be developed using Vue.js and should have the following features:
1. Welcome Screen: A welcome screen which introduces the quiz to the user with a "Start Quiz" button.
2. Quiz Screen: The quiz screen should display one question at a time with multiple choice answers. It should allow the user to select an answer and automatically move to the next question. The user should also have the ability to navigate back to previous questions and change their answers.
3. Results Screen: After all the questions are answered, display a results screen showing the total score and which questions were answered correctly and incorrectly. Include a "Play Again" button to restart the quiz.

## Backend Task
The backend should be developed using either Python or Node.js. You can use any orm you like. It should run in a container and be implemented as a simple microservice. It should provide a REST API with the following endpoints:

1. GET /api/questions: This endpoint should return a random selection of 10 questions from the database.
2. POST /api/submit: This endpoint should accept the user's answers in the request body and return a response with the total score and a breakdown of which questions were answered correctly and incorrectly.

Document your thoughts and design process as you progress through.

The questions and answers can be hard-coded into the application for the sake of simplicity, but they should be structured in a way that would make it easy to switch to using an actual database in the future.

## Bonus
Implement user authentication in the application. A user should be able to sign up, log in, and have their scores saved in a user profile. This user profile can be accessed and updated via the API.

## Submission
Fork this repository, commit your changes to the fork of this repository and send the link for your git repository to the hiring team once you have completed the task.

## Sample Questions
```
What year was HelloFresh founded?
a. 2007
b. 2011
c. 2015
d. 2008

Where is the HelloFresh company based?
a. London, UK
b. Berlin, Germany
c. New York, USA
d. Sydney, Australia

What is the primary business of HelloFresh?
a. Fast food restaurant
b. Meal-kit delivery service
c. Grocery delivery service
d. Food processing

Who are the founders of HelloFresh?
a. Bill Gates and Paul Allen
b. Dominik Richter, Thomas Griesel, and Jessica Nilsson
c. Mark Zuckerberg and Eduardo Saverin
d. Steve Jobs and Steve Wozniak

In which country did HelloFresh first start its operations?
a. USA
b. UK
c. Germany
d. Australia

What are HelloFresh meal kits primarily known for?
a. Prepared and cooked meals
b. Fresh ingredients and easy-to-follow recipes
c. Frozen food
d. Fast food

Which of the following is a competitor of HelloFresh?
a. Amazon
b. Marley Spoons
c. Uber Eats
d. Netflix

How often does HelloFresh typically deliver meal kits?
a. Every day
b. Once a week
c. Twice a week
d. Once a month

What is HelloFresh's mission statement?
a. "Feed the world"
b. "Everyone, every day, everywhere"
c. "To change the way people eat, forever"
d. "Make every moment special"

What is one of the primary benefits promoted by HelloFresh?
a. Reduced time in grocery shopping
b. Low-cost meals
c. Catering services
d. Home cleaning services
```