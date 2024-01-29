// VOCABULARY (словарик)

const words = [
  {
    original: "WhatsApp",
    translation: "Здарова",
  },
  {
    original: "Bye",
    translation: "Пакеда",
  },
  {
    original: "Programmer",
    translation: "Программист",
  },
  {
    original: "Mister",
    translation: "Чувак",
  },
];
const notification = {
  start: {
    greetingMessage: "Hi!!! Here you can learn English",
  },
  resultMesage: {
    finishSuccessMesage: "Конец. Ты Большой Молодец",
    finishUnSuccessMesage: "Конец. Ты Не Молодец",
  },
};
const settings = {
  correctAnswerMinProcent: 50,
};
const result = {
  correctAnswer: 0,
};
let unCorrectAnswer = 0;
document.write(notification.start.greetingMessage, "<br>");
for (let i = 0; i < words.length; i++) {
  let answer = prompt(words[i].original).trim();
  if (answer === words[i].translation) {
    result.correctAnswer = 1 + result.correctAnswer;
  } else unCorrectAnswer = ++unCorrectAnswer;
}
const correctAnswerProcent = (result.correctAnswer / words.length) * 100;
if (correctAnswerProcent > settings.correctAnswerMinProcent) {
  document.write(notification.resultMesage.finishSuccessMesage, "<br>");
} else document.write(notification.resultMesage.finishUnSuccessMesage, "<br>");
