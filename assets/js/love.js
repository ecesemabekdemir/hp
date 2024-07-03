let wrapper = document.querySelector(".wrapper");
let question = document.querySelector(".question");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");

let wrapperRect = wrapper.getBoundingClientRect();

yes.addEventListener("click", () => {
  question.innerHTML = "I love you too ❤️";
});

no.addEventListener("mouseover", () => {
  let wrapperRect = wrapper.getBoundingClientRect();
  let noBtnRect = no.getBoundingClientRect();
  
  let i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
  let j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
  
  no.style.left = i + "px";
  no.style.top = j + "px";
});