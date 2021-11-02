const daily = document.querySelector(".name-daily");
const dailyCard = document.querySelectorAll(".daily");

const weekly = document.querySelector(".name-weekly");
const weeklyCard = document.querySelectorAll(".weekly");

const monthly = document.querySelector(".name-monthly");
const monthlyCard = document.querySelectorAll(".monthly");

daily.addEventListener("click", () => {
  dailyCard.forEach((card) => {
    card.classList.add("show");
  });

  weeklyCard.forEach((card) => {
    card.classList.remove("show");
  });

  monthlyCard.forEach((card) => {
    card.classList.remove("show");
  });
});

weekly.addEventListener("click", () => {
  dailyCard.forEach((card) => {
    card.classList.remove("show");
  });

  weeklyCard.forEach((card) => {
    card.classList.add("show");
  });

  monthlyCard.forEach((card) => {
    card.classList.remove("show");
  });
});

monthly.addEventListener("click", () => {
  dailyCard.forEach((card) => {
    card.classList.remove("show");
  });

  weeklyCard.forEach((card) => {
    card.classList.remove("show");
  });

  monthlyCard.forEach((card) => {
    card.classList.add("show");
  });
});

     