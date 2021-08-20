let sectionName = document.querySelector(
  ".breadcrumbs .nav-item-chapter a"
).innerText;

let wrapper = document.querySelectorAll(".problem > div > div");
let quizList = [];
let lastIndex = 0;
for (let i = 0; i < wrapper.length - 5; i++) {
  if (i % 2 == 0 || i == 0) {
    quizList.push({
      question: wrapper[i].querySelector("pre").innerText || null,
      answers: [],
      correct: -1,
      selected: -1,
    });
  } else {
    let correct = -1;
    let answers = Array.prototype.slice
      .call(wrapper[i].querySelectorAll(".field>label"))
      .map((el, index) => {
        let result = el.innerText;

        if (result.includes("\ncorrect")) {
          result = result.replace("\ncorrect", "");
          correct = index;
        }
        return result.replace(/[\“\“]/gi, "");
      });
    quizList[lastIndex].answers = answers;
    quizList[lastIndex].correct = correct;
    lastIndex++;
  }
}

let section = {
  name: sectionName,
  quizList: quizList,
};

console.log(JSON.stringify(section));
