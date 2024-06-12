"use strict";

alert("Hellooo");

let textBlock = document.querySelector(".bubble p");
let answerBlock = document.querySelector(".speech_bubble p");
let pointer_left = document.querySelector("#pointer_left");
let pointer_right = document.querySelector("#pointer_right");
/*
let text = [ "Добро пожаловать, путник. Давно у нас не было посетителей… Мое имя Ким Хуантхэ (김환태), но ты можешь называть меня Критик.",
"Ох, ты пришел сюда не преднамеренно? Как интересно… Ты находишься в Библиотеке, мой друг. ", 
"Знаешь, сюда не часто захаживают обычные люди. Вероятно, ты потерян и напуган, и желаешь скорее выбраться отсюда.",
"Боюсь тебя разочаровать, но это место подчиняется особым правилам. К сожалению ты не сможешь уйти, пока не получишь подпись от каждого представителя нашего отдела. Но боюсь, за последние десятилетия они немного… заскучали, и не захотят отпускать тебя просто так. Но не волнуйся, если будешь вести себя вежливо и просто выслушаешь их, они с радостью поставят тебе свою подпись. Давай я провожу тебя до ближайшего представителя, а то в этом месте несложно запутаться."];
let answers = ["-Где я?","Немного поразмыслив, ты вспоминаешь, что правда направлялась в библиотеку. Но когда ты пытаешься добраться до остальных воспоминаний, они ощущаются как в тумане. Ты не знаешь, чем ты занималась до этого и как ты здесь оказалась. Мысли даются тяжело.",
"Ты скорее заинтересована.", "Вместе с Хуанхэ вы проходите между книжных полок. Если честно, это место немного вызывает мурашки на коже. Оно отличается от твоих привычных воспоминаний о библиотеках. Знакомые тебе библиотеки современные, чистые и светлые. Это же место величественно в своей мрачности. Вместо электричества, тусклое освещение здесь обеспечивают подсвечники, пол весь в пыли, на книжных полках ты замечаешь паутину. Ты будто оказалась в месте на пару веков старше современности. "]
*/
let i_message = 0;
let i_answer = 0;

let scenario = '{ "lines" :[' + 
    '{ "index": 1, "text": "Добро пожаловать, путник. Давно у нас не было посетителей… Мое имя Ким Хуантхэ (김환태), но ты можешь называть меня Критик.","author": "game"},' +
    '{"index": 2, "text": ["-Где я?"],"author": "player","type": "answers"},' +
    '{"index": 3,"text": "Ох, ты пришел сюда не преднамеренно? Как интересно… Ты находишься в Библиотеке, мой друг.","author":"game"},' +
    '{"index": 4, "text": "Немного поразмыслив, ты вспоминаешь, что правда направлялась в библиотеку. Но когда ты пытаешься добраться до остальных воспоминаний, они ощущаются как в тумане. Ты не знаешь, чем ты занималась до этого и как ты здесь оказалась. Мысли даются тяжело.", "author":"player", "type": "description"},' +
    '{"index": 5, "text": "Знаешь, сюда не часто захаживают обычные люди. Вероятно, ты потерян и напуган, и желаешь скорее выбраться отсюда.","author": "game"},' +
    '{"index": 6, "text": "Ты скорее заинтересована.", "author":"player", "type": "description"} ]}'

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';  fff
const objScenario = JSON.parse(scenario);

let dataR;

fetch('scenario')
  .then(response => response.json())
  .then(jsonData => console.log(jsonData));

  fetch('scenario')
  .then(response => response.json())
  .then(jsonData => dataR = jsonData);

answerBlock.onclick = function () {
    alert(dataR.lines[3].text);
    //changeText();
}

pointer_right.onclick = function () {
    changeText();
}

pointer_left.onclick = function () {
    if (i_message != 0) {
        i_message -= 1;
        textBlock.textContent = text[i_message];
    }
    if (i_answer != 0) {
        if (answers[i_answer-1].charAt(0) == "-") {
            answerBlock.classList.add("speech_bubble")
            answerBlock.classList.remove("thoughts_text")
        }
        else {
            answerBlock.classList.remove("speech_bubble")
            answerBlock.classList.add("thoughts_text")
        }
        i_answer -= 1;
        answerBlock.textContent = answers[i_answer];
    }
    if (i_message == 0) {
        pointer_left.classList.add("pointer_off")
    }
}

function changeText() {
    if (answers[i_answer+1].charAt(0) == "-") {
        answerBlock.classList.add("speech_bubble")
        answerBlock.classList.remove("thoughts_text")
    }
    else {
        answerBlock.classList.remove("speech_bubble")
        answerBlock.classList.add("thoughts_text")
    }
    i_message += 1;
    textBlock.textContent = text[i_message];
    i_answer += 1;
    answerBlock.textContent = answers[i_answer];
    pointer_left.classList.remove("pointer_off")
}

// нужно двигаться вперед назад и сохранять текст, на котором в итоге ты остановился в базу данных/кэш, чтобы потом к нему вернуться?
// нужно как-то разделить фразы мыслей и диалогов