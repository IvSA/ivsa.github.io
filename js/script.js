let options = {
  format: 'dd.mm.yyyy',
  defaultDate: new Date(),
  setDefaultDate: true,
  container: 'body',
  i18n: {
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      weekdays: ["Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
      weekdaysShort: ["Пн","Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      weekdaysAbbrev: ["Пн","В", "Ср", "Ч", "Пт", "Сб", "В"],
      cancel: 'Отмена',
      done: 'ОК'
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);

  var quart = document.getElementById('quarter');
  var instanceQuart = M.FormSelect.init(quart);
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {
    edge: 'right'
  }
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

const body = document.querySelector("body");
const checkbox = document.querySelector("#switcher-night-mode");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});