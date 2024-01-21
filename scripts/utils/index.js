export function generateRandomNumber(min = 1, max = 20) {
  const randomNumber = Math.floor(Math.random() * max);

  return randomNumber + min;
}

export function generateElement({ tag, id, className, value }) {
  const element = document.createElement(tag);

  if (id) element.id = id;
  if (className) element.className = className;
  if (value) element.innerText = value;

  return element;
}

export function generateQuizItem({
  id = 0,
  question = "..??",
  answer = "??",
  category = "??",
}) {
  return `
  <div class="quiz-item">
  <div class="section-left">
    <h4 id="quiz-question">${question}</h4>
    <p id="quiz-answer">${answer}</p>
  </div>

  <p id="quiz-category">${category}</p>

  <div class="section-right">
    <button type="button" class="btn btn-edit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-pencil"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"
        />
        <path d="M13.5 6.5l4 4" />
      </svg>
    </button>
    <button type="button" class="btn btn-delete">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-trash"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 7l16 0" />
        <path d="M10 11l0 6" />
        <path d="M14 11l0 6" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg>
    </button>
  </div>
</div>
  `;
}
