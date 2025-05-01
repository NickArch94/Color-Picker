window.onload = function() {
    initColorPicker();

};

function initColorPicker() {
    let colorBox = document.getElementById('color-box');
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),

    };
    let colorPickers = document.getElementsByClassName('picker');
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(element, colors, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i= 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            setElementBackgroundColor(element, colors.red.value, colors.green.value, colors.blue.value);
            setDisplayValues(colors.red.value, colors.green.value, colors.blue.value);
        } );
    }

function setElementBackgroundColor(bgElement, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    bgElement.style.backgroundColor = 'rgb(' + rgbVal + ')';
}}

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}