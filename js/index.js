const btn = document.querySelector(".main-btn");
const year = document.querySelector("#yearly");
const month = document.querySelector("#monthly");
const pro = document.querySelector("#pro-cost");
const elite = document.querySelector("#elite-cost");

year.style.color = "#f27d13"; // rgb(242,125,19)
month.style.color = "#fff"; // rgb(255, 255, 255)
// green... rgb(5, 65, 45)

// prettier-ignore
btn.addEventListener("mouseover", () => {
  // if text is orange and there is no slide
  if (year.style.color == "rgb(242, 125, 19)" && !btn.classList.contains("slide")) {
    // make green
    year.style.color = "rgb(5, 65, 45)";
  } else {
    year.style.color = "rgb(255, 255, 255)";
  }
  if (month.style.color == "rgb(242, 125, 19)") {
    month.style.color = "rgb(5, 65, 45)";
  } else {
    month.style.color = "rgb(255, 255, 255)";
  }
});

btn.addEventListener("mouseout", () => {
  if (year.style.color == "rgb(5, 65, 45)") {
    year.style.color = "rgb(242,125,19)";
  }
  if (month.style.color == "rgb(5, 65, 45)") {
    month.style.color = "rgb(242,125,19)";
  }
});

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    year.style.color = "rgb(255, 255, 255)";
    month.style.color = "rgb(242,125,19)";
    pro.textContent = "$20/year";
    elite.textContent = "$100/year";
  } else {
    btn.classList.remove("slide");
    year.style.color = "rgb(242,125,19)";
    month.style.color = "rgb(255, 255, 255)";
    pro.textContent = "$7/month";
    elite.textContent = "$14/month";
  }
});
