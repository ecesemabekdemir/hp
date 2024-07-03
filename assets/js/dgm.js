document.addEventListener("DOMContentLoaded", () => {
  let question = document.querySelector(".question");
  let yes = document.querySelector(".yes");
  let no = document.querySelector(".no");
  let surprise = document.querySelector(".surprise");
  let btnGroup = document.querySelector(".btn-group");

  yes.addEventListener("click", () => {
    surprise.style.display = "block";
    question.innerHTML = "İşte sürprizin!";
    btnGroup.style.display = "none"; // Buton grubunu gizle
  });

  no.addEventListener("click", () => {
    question.innerHTML = "Belki başka zaman!";
    setTimeout(() => {
      question.innerHTML = "<i>Bir sürpriz görmek ister misin??</i>";
    }, 3000);
  });

});

