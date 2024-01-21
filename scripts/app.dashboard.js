// == TEMPLATE QUIZ ITEM ==

import { getQuestions, createQuestion } from "./api.js";
import { generateQuizItem } from "./utils/index.js";

const quizContent = document.getElementById("quiz-content");

document.addEventListener("DOMContentLoaded", () => {
  async function handleAllQuestions() {
    try {
      const question = await getQuestions();

      //
      if (!question) return;

      quizContent.innerHTML = question
        .map((question) => {
          return generateQuizItem({
            id: question.id,
            question: question.jokes,
            answer: question.answer,
            category: question.category,
          });
        })
        .join("");

      console.log({ question });
    } catch (error) {
      console.error("Ada error nih : ", {
        error,
      });
    }
  }

  handleAllQuestions();
});
