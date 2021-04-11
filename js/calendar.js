let calendar = document.querySelector('.calendar')

const month_names = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}
// isLeapYear = (year) => {
//     return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
// }

function getFebDays(year) {
    return isLeapYear(year) ? 29 : 28
}
// getFebDays = (year) => {
//     return isLeapYear(year) ? 29 : 28
// }

function generateCalendar(month, year) {
// generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if(month == null) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = month_names[month] + ''
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 1; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += '<span></span><span></span><span></span><span></span>'
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
            if (i - first_day.getDay() + 1 === currDate.getDate() - 5) {
                day.classList.add('sel-date')
                day.classList.add('tooltipped')
                day.setAttribute('data-position', 'top')
                day.setAttribute('data-tooltip', 
                `<div>
                    <table>
                        <thead>
                        <tr>
                            <th>Полигон</th>
                            <th>Дата торгов</th>
                            <th>Наименование объекта</th>
                        </tr>
                        </thead>
                
                        <tbody>
                        <tr>
                            <td>Окт</td>
                            <td>15.03.2021</td>
                            <td>Нежилые помещения
                            №1,31,32 общей площадью
                            49,9 кв.м . первого этажа в
                            здании #Пищеблока#</td>
                        </tr>
                        <tr>
                            <td>Окт</td>
                            <td>15.03.2021</td>
                            <td>чзу, передаваемая на Торгах</td>
                        </tr>
                        </tbody>
                    </table>
                </div>`)
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')
month_names.forEach( function(e, index) {
// month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = "<div data-month=" + index + ">" + e + "</div>"
    month.querySelector('div').onclick = function() {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = function() {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = function() {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = function() {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  });


// let dark_mode_toggle = document.querySelector('.dark-mode-switch')

// dark_mode_toggle.onclick = () => {
//     document.querySelector('body').classList.toggle('light')
//     document.querySelector('body').classList.toggle('dark')
// }