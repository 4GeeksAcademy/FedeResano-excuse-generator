/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["dog", "cat", "cop", "jogger", "driver", "taxi driver"];
  let action = [
    "ate my",
    "took my",
    "broke my",
    "stole my",
    "bit my",
    "spit on my"
  ];

  let item = ["homework", "car", "shoe", "leg"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let itemIndex = Math.floor(Math.random() * item.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    item[itemIndex]
  );
};
