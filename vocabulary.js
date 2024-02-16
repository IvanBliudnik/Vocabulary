// VOCABULARY (словарик)
// _______________хранилище данных (data)
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
  {
    original: "Screen",
    translation: "Экран",
  },
];
const notification = {
  start: {
    greetingMessage: "Hi!!! Here you can learn English",
  },
  resultMesage: {
    finishSuccessMesage: "Конец. Ты Большой Молодец",
    finishUnSuccessMesage: "Конец. Ты looser",
  },
};
const settings = {
  correctAnswer: 0,
  unCorrectAnswer: 0,
  correctAnswerMinProcent: 50,
};
// ______________обьявляем функции
function showGreetingMessage(_notification) {
  alert(_notification.start.greetingMessage);
}
function startTraining(_words, _settings) {
  for (let i = 0; i < _words.length; i++) {
    let answer = prompt(_words[i].original).trim();
    document.write(`${answer}: ${answer === _words[i].translation}<br>`);
    if (answer === words[i].translation) {
      settings.correctAnswer = 1 + settings.correctAnswer;
    } else settings.unCorrectAnswer = ++settings.unCorrectAnswer;
  }
}
function getPercentage(_settings, _words) {
  return (settings.correctAnswer / _words.length) * 100;
}
function showResults(_words, _settings, _notification) {
  const correctAnswerProcent = getPercentage(settings, words);
  if (correctAnswerProcent > settings.correctAnswerMinProcent) {
    document.write(
      `Количество правильных ответов: ${settings.correctAnswer} <br> Количество неправильных ответов: ${settings.unCorrectAnswer}<br>`
    );
    document.write(notification.resultMesage.finishSuccessMesage, "<br>");
  } else {
    document.write(
      `Количество правильных ответов: ${settings.correctAnswer} <br> Количество неправильных ответов: ${settings.unCorrectAnswer}<br>`
    );
    document.write(notification.resultMesage.finishUnSuccessMesage, "<br>");
  }
}
// _______________main (application)
showGreetingMessage(notification);
startTraining(words, settings);
showResults(words, settings, notification);
