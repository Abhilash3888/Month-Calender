const monthEl = document.querySelector(".currentDate h1");
const fullDateEl = document.querySelector(".currentDate p");
const datesEl = document.querySelector(".dates");

// to get last day of current month ->new Date(2023,8,0)-> current year, next month, 0 indicates the last day of previous month.
const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() - 1;
const currentDate = new Date().getDate();

const monIndex = new Date().getMonth();
const monthsArray = [
    "Januray",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

monthEl.innerHTML = monthsArray[monIndex];
fullDateEl.innerHTML = new Date().toDateString();

let dates = "";

for (let i = firstDay; i > 0; i--) {
    dates += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {

    if (i === currentDate) {
        dates += `<div class="today">${i}</div>`;
    } else {
        dates += `<div>${i}</div>`;
    }
}
datesEl.innerHTML = dates;