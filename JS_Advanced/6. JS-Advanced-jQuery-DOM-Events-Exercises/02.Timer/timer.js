function timer() {
    let hours = $('#hours')
    let minutes = $('#minutes')
    let seconds = $('#seconds')
    let interval
    let counter = 0
    $('#start-timer').on('click',
        () => {
        if (interval === undefined) {
            interval = setInterval(startTimer, 1000)
        }
        })
    $('#stop-timer').on('click',
        () => {
        clearInterval(interval)
            interval = undefined
            counter = 0
    })


    function startTimer() {
        counter++
        seconds.text(`0${counter % 60}`.slice(-2))
        minutes.text(`0${Math.floor(counter / 60) % 60}`.slice(-2))
        hours.text(`0${Math.floor(counter / 60 / 60) % 24}`.slice(-2))
    }
}