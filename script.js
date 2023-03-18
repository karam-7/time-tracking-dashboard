

const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');

const present = document.querySelectorAll('.head-h2');
const past = document.querySelectorAll('.head-h3');

function dailyData() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) =>
      present.forEach((e, i) => {
        present[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
        past[i].innerHTML =
          'Yesterday  - ' + data[i].timeframes.daily.previous + 'hrs';
      })
    );
}

function weeklyData() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      present.forEach((e, i) => {
        present[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
        past[i].innerHTML =
          'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs';
      });
    });
}

function monthlyData() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      present.forEach((e, i) => {
        present[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
        past[i].innerHTML =
          'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs';
      });
    });
}

dailyBtn.addEventListener('click', () => {
  dailyBtn.classList.add('active');
  weeklyBtn.classList.remove('active');
  monthlyBtn.classList.remove('active');
  dailyData();
});

weeklyBtn.addEventListener('click', () => {
  weeklyBtn.classList.add('active');
  dailyBtn.classList.remove('active');
  monthlyBtn.classList.remove('active');
  weeklyData();
});

monthlyBtn.addEventListener('click', () => {
  monthlyBtn.classList.add('active');
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.remove('active');
  monthlyData();
});