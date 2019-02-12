function attachEventsListeners(){
    let input = document.getElementById('inputDistance');
    let from = document.getElementById('inputUnits');
    let to = document.getElementById('outputUnits');
    let distanceInMetersForOne = {km:1000, m:1, cm:0.01, mm:0.001, mi:1609.34, yrd:0.9144, ft:0.3048, in:0.0254};

    document.getElementById('convert')
        .addEventListener('click', () => document.getElementById('outputDistance').value
            = input.value * distanceInMetersForOne[from.value] / distanceInMetersForOne[to.value]);
}