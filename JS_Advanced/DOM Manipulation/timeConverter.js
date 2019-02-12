function attachEventsListeners() {
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    document.getElementById('daysBtn')
        .addEventListener('click', daysFunc)
    function daysFunc() {
        hours.value = days.value * 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }
    document.getElementById('hoursBtn')
        .addEventListener('click', hoursFunc)
    function hoursFunc() {
        days.value = hours.value / 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60    }
    document.getElementById('minutesBtn')
        .addEventListener('click', minutesFunc)
    function minutesFunc() {
        hours.value = minutes.value / 60
        days.value = hours.value * 24
        seconds.value = minutes.value * 60
    }
    document.getElementById('secondsBtn')
        .addEventListener('click', secondsFunc)
    function secondsFunc() {
        minutes.value = seconds.value / 60
        hours.value = minutes.value / 60
        days.value = hours.value / 24
    }
}